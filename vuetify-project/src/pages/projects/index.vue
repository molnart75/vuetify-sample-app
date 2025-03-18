<template>
  <div class="projects-page py-12">
    <v-container>
      <h1 class="text-h3 font-weight-bold mb-8">
        Our Projects
      </h1>
      
      <!-- Search and filter toolbar -->
      <v-card class="mb-8">
        <v-toolbar
          flat
          density="compact"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search projects"
            single-line
            hide-details
            density="compact"
            class="mr-4"
            @update:model-value="debouncedSearch"
          />
          
          <v-spacer />
          
          <v-select
            v-model="sortBy"
            :items="sortOptions"
            label="Sort by"
            density="compact"
            hide-details
            class="mx-2"
            style="max-width: 200px"
            @update:model-value="loadItems"
          />
        </v-toolbar>
      </v-card>
      
      <!-- Data table -->
      <v-data-table-server
        v-model:items-per-page="itemsPerPage"
        v-model:page="page"
        :headers="headers"
        :items="projects"
        :items-length="totalProjects"
        :loading="loading"
        class="elevation-1 projects-table"
        item-value="id"
        @update:options="loadItems"
      >
        <!-- Project name column -->
        <template #[`item.name`]="{ item }">
          <div class="font-weight-bold">
            {{ getItemRaw(item).name }}
          </div>
        </template>
        
        <!-- Project type column -->
        <template #[`item.type`]="{ item }">
          <v-chip
            :color="getTypeColor(getItemRaw(item).type)"
            text-color="white"
            size="small"
          >
            {{ formatType(getItemRaw(item).type) }}
          </v-chip>
        </template>
        
        <!-- Completion date column -->
        <template #[`item.completionDate`]="{ item }">
          {{ formatDate(getItemRaw(item).completionDate) }}
        </template>
        
        <!-- Project image column -->
        <template #[`item.image`]="{ item }">
          <v-img
            :src="getItemRaw(item).image || getSampleImage(getItemRaw(item).id)"
            width="120"
            height="70"
            cover
            class="rounded"
          />
        </template>
        
        <!-- Actions column -->
        <template #[`item.actions`]="{ item }">
          <v-btn
            icon
            variant="text"
            density="comfortable"
            :to="`/projects/${getItemRaw(item).id}`"
          >
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>
      </v-data-table-server>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import { debounce } from 'lodash'

interface Project {
  id: number;
  name: string;
  description: string;
  type: string;
  completionDate: string;
  client: string;
  image: string;
}

interface DataTableItem {
  raw: Project;
  columns: Record<string, unknown>;
}

// Define route meta
defineOptions({
  layout: 'sidebar'
})

// Accept filters from parent component (sidebar)
const props = defineProps({
  filters: {
    type: Object,
    default: () => ({})
  }
})

// Store access
const projectsStore = useProjectsStore()

// Table state
const headers = [
  { title: 'Project', key: 'name', sortable: true },
  { title: 'Type', key: 'type', sortable: true },
  { title: 'Description', key: 'description', sortable: false },
  { title: 'Client', key: 'client', sortable: true },
  { title: 'Completed', key: 'completionDate', sortable: true },
  { title: 'Preview', key: 'image', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false, align: 'end' }
] as const

const projects = ref([])
const totalProjects = ref(0)
const loading = ref(false)
const page = ref(1)
const itemsPerPage = ref(10)
const sortBy = ref('completionDate:desc')
const sortOptions = [
  { title: 'Newest First', value: 'completionDate:desc' },
  { title: 'Oldest First', value: 'completionDate:asc' },
  { title: 'Name (A-Z)', value: 'name:asc' },
  { title: 'Name (Z-A)', value: 'name:desc' }
]
const search = ref('')

// Create debounced search function
const debouncedSearch = debounce(() => {
  page.value = 1 // Reset to first page when searching
  loadItems()
}, 500)

// Watch for filter changes from sidebar
watch(() => props.filters, () => {
  page.value = 1 // Reset to first page when filters change
  loadItems()
}, { deep: true })

interface ProjectsParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
  q?: string;
  type?: string;
  completionDate_like?: string | number;
}

// Load projects with pagination, sorting, and filtering
const loadItems = async () => {
  loading.value = true;
  
  try {
    // Parse sort option
    const [sortField, sortOrder] = sortBy.value.split(':');
    
    // Build query params with proper typing
    const params: ProjectsParams = {
      _page: page.value,
      _limit: itemsPerPage.value,
      _sort: sortBy.value.split(':')[0],
      _order: sortBy.value.split(':')[1]
    };
    
    // Add search param if present
    if (search.value) {
      params.q = search.value;
    }
    
    // Add type filter if present
    if (props.filters?.type) {
      params.type = props.filters.type;
    }
    
    // Add year filter if present
    if (props.filters?.year) {
      // Filter projects by year using the completionDate field
      params.completionDate_like = props.filters.year;
    }
    
    // Fetch projects with params
    const data = await projectsStore.fetchProjects(params);
    projects.value = data;
    totalProjects.value = projectsStore.totalProjects;
    
  } catch (error) {
    console.error('Error loading projects:', error);
  } finally {
    loading.value = false;
  }
}

// Format project type for display
const formatType = (type:string) => {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

// Get color for project type
const getTypeColor = (type:string) => {
  switch (type) {
    case 'web':
      return 'indigo'
    case 'mobile':
      return 'green'
    case 'desktop':
      return 'deep-purple'
    default:
      return 'grey'
  }
}

// Format date for display
const formatDate = (dateString:string | number | Date) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Provide sample image URLs for development/fallback
const getSampleImage = (id:number) => {
  const imageId = id % 10 + 1  // Cycle through 10 sample images
  return `https://picsum.photos/id/${200 + imageId}/500/300`
}

interface RawDataItem {
  raw: Project;
  [key: string]: unknown;
}

interface DirectDataItem extends Project {
  [key: string]: unknown;
}

type DataItem = RawDataItem | DirectDataItem;

// Típusbiztos helper függvény
function getItemRaw(item: unknown): Project {
  // Ellenőrizzük, hogy az item egy objektum-e
  if (!item || typeof item !== 'object') {
    console.error('Invalid DataTable item: not an object', item);
    throw new Error('Invalid DataTable item: not an object');
  }

  // Ellenőrizzük, hogy van-e raw tulajdonsága (RawDataItem esetén)
  if ('raw' in item && item.raw && typeof item.raw === 'object') {
    const rawData = item.raw as Project;
    if ('id' in rawData && 'name' in rawData) {
      return rawData;
    }
  }

  // Ellenőrizzük, hogy közvetlenül tartalmazza-e a szükséges tulajdonságokat (DirectDataItem esetén)
  if ('id' in item && 'name' in item) {
    return item as Project;
  }

  // Ha egyik struktúra sem illeszkedik
  console.error('Invalid DataTable item structure', item);
  throw new Error('Invalid DataTable item structure');
}


// Load initial data when component mounts
onMounted(() => {
  loadItems()
})
</script>

<style scoped lang="scss">
.projects-table {
  :deep(th) {
    font-weight: bold;
  }
}
</style>

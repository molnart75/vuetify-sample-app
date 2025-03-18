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
            @update:model-value="handleSearch"
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
import type { ProjectsParams } from '@/stores/projects'

interface Project {
  id: number;
  name: string;
  description: string;
  type: string;
  completionDate: string;
  client: string;
  image: string;
}

defineOptions({
  layout: 'sidebar'
})

const props = defineProps({
  filters: {
    type: Object,
    default: () => ({})
  }
})

const projectsStore = useProjectsStore()

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

const debouncedSearch = debounce(() => {
  console.log('Searching for:', search.value); 
  page.value = 1;
  loadItems();
}, 500);

const handleSearch = (val: string) => {
  search.value = val;
  debouncedSearch();
}

watch(() => props.filters, () => {
  page.value = 1 
  loadItems()
}, { deep: true })

const loadItems = async () => {
  loading.value = true;
  
  try {
    const [sortField, sortOrder] = sortBy.value.split(':');
    
    const params: ProjectsParams = {
      _page: page.value,
      _per_page: itemsPerPage.value,
      _sort: sortField,
      _order: sortOrder
    };
    
    if (search.value && search.value.trim() !== '') {
      const searchTerm = search.value.trim();
      params.name_like = searchTerm;
    }

    console.log('Final request params:', params);
    
    if (props.filters?.type) {
      params.type = props.filters.type;
    }
    
    if (props.filters?.year) {
      params.completionDate_like = props.filters.year;
    }
        
    const data = await projectsStore.fetchProjects(params);
    projects.value = data;
    totalProjects.value = projectsStore.totalProjects;
    
  } catch (error) {
    console.error('Error loading projects:', error);
  } finally {
    loading.value = false;
  }
}

const formatType = (type:string) => {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

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

const formatDate = (dateString:string | number | Date) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getSampleImage = (id:number) => {
  const imageId = id % 10 + 1 
  return `https://picsum.photos/id/${200 + imageId}/500/300`
}


function getItemRaw(item: unknown): Project {
  if (!item || typeof item !== 'object') {
    console.error('Invalid DataTable item: not an object', item);
    throw new Error('Invalid DataTable item: not an object');
  }

  if ('raw' in item && item.raw && typeof item.raw === 'object') {
    const rawData = item.raw as Project;
    if ('id' in rawData && 'name' in rawData) {
      return rawData;
    }
  }

  if ('id' in item && 'name' in item) {
    return item as Project;
  }

  console.error('Invalid DataTable item structure', item);
  throw new Error('Invalid DataTable item structure');
}

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

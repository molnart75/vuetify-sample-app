<template>
  <div class="project-detail-page py-12">
    <v-container v-if="project">
      <v-row>
        <v-col cols="12">
          <!-- Back button -->
          <v-btn
            variant="text"
            prepend-icon="mdi-arrow-left"
            to="/projects"
            class="mb-4"
          >
            Back to Projects
          </v-btn>
          
          <!-- Project header -->
          <v-card class="mb-8">
            <v-img
              :src="project.image || getSampleImage(project.id)"
              height="400"
              cover
              class="align-end"
            >
              <div class="project-header-overlay pa-6">
                <v-chip
                  :color="getTypeColor(project.type)"
                  text-color="white"
                  class="mb-3"
                >
                  {{ formatType(project.type) }}
                </v-chip>
                
                <h1 class="text-h3 font-weight-bold text-white mb-2">
                  {{ project.name }}
                </h1>
                
                <p class="text-h6 text-white mb-4">
                  {{ project.description }}
                </p>
                
                <div class="d-flex align-center flex-wrap">
                  <v-chip
                    label
                    class="mr-2 mb-2"
                    color="grey-lighten-3"
                  >
                    <v-icon
                      start
                      size="small"
                    >
                      mdi-calendar
                    </v-icon>
                    Completed: {{ formatDate(project.completionDate) }}
                  </v-chip>
                  
                  <v-chip
                    label
                    class="mr-2 mb-2"
                    color="grey-lighten-3"
                  >
                    <v-icon
                      start
                      size="small"
                    >
                      mdi-account-group
                    </v-icon>
                    Team Size: {{ project.teamSize }} developers
                  </v-chip>
                  
                  <v-chip
                    label
                    class="mr-2 mb-2"
                    color="grey-lighten-3"
                  >
                    <v-icon
                      start
                      size="small"
                    >
                      mdi-clock-outline
                    </v-icon>
                    Duration: {{ project.duration }}
                  </v-chip>
                  
                  <v-chip
                    label
                    class="mb-2"
                    color="grey-lighten-3"
                  >
                    <v-icon
                      start
                      size="small"
                    >
                      mdi-office-building
                    </v-icon>
                    Client: {{ project.client }}
                  </v-chip>
                </div>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row>
        <!-- Project details -->
        <v-col
          cols="12"
          md="8"
        >
          <v-card class="mb-6">
            <v-card-title class="text-h5 font-weight-bold">
              Project Overview
            </v-card-title>
            
            <v-card-text>
              <p class="text-body-1 mb-4">
                {{ project.description }} 
                This project was developed for {{ project.client }} and completed in {{ project.duration }}.
                Our team of {{ project.teamSize }} developers worked to create a solution that met all the client's requirements.
              </p>
              
              <h3 class="text-h6 font-weight-bold mb-2">
                Key Features
              </h3>
              <v-list density="compact">
                <v-list-item
                  v-for="(feature, index) in project.features"
                  :key="index"
                  :title="feature"
                  prepend-icon="mdi-check-circle"
                  icon-color="success"
                />
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        
        <!-- Technologies sidebar -->
        <v-col
          cols="12"
          md="4"
        >
          <v-card class="mb-6">
            <v-card-title class="text-h5 font-weight-bold">
              Technologies Used
            </v-card-title>
            
            <v-card-text>
              <v-chip-group>
                <v-chip
                  v-for="(tech, index) in project.technologies"
                  :key="index"
                  color="primary"
                  text-color="white"
                  class="ma-1"
                >
                  {{ tech }}
                </v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
          
          <!-- Contact CTA -->
          <v-card>
            <v-card-title class="text-h5 font-weight-bold">
              Like What You See?
            </v-card-title>
            
            <v-card-text>
              <p class="text-body-1 mb-4">
                Interested in a similar project? Let's discuss how we can help bring your ideas to life.
              </p>
            </v-card-text>
            
            <v-card-actions>
              <v-btn
                color="primary"
                variant="flat"
                block
                to="/contact"
              >
                Contact Us
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Loading state -->
    <v-container v-else-if="loading">
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <v-progress-circular
            indeterminate
            color="primary"
            size="64"
          />
          <div class="text-h6 mt-4">
            Loading project details...
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <!-- Error state -->
    <v-container v-else>
      <v-row
        class="fill-height"
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <v-icon
            color="error"
            size="64"
            class="mb-4"
          >
            mdi-alert-circle
          </v-icon>
          <h2 class="text-h4 mb-2">
            Project Not Found
          </h2>
          <p class="text-body-1 mb-4">
            The project you are looking for does not exist or may have been removed.
          </p>
          <v-btn
            color="primary"
            variant="flat"
            to="/projects"
          >
            Back to Projects
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProjectsStore } from '@/stores/projects'
import type { Project } from '@/stores/projects'

// Define route meta
defineOptions({
  layout: 'default'
})

// Store access
const projectsStore = useProjectsStore()
const project = ref<Project | null>(null)
const loading = ref(true)


// Get route params
const route = useRoute();
let projectId: number | null = null;


if (route.params && typeof route.params === 'object' && 'id' in route.params) {
  const idParam = route.params.id;
  if (typeof idParam === 'string') {
    projectId = parseInt(idParam);
    if (isNaN(projectId)) {
      projectId = null;
    }
  }
}

// Load project details
onMounted(async () => {
  if (projectId === null) {
    // Nincs érvényes ID paraméter
    loading.value = false;
    return;
  }

  try {
    const projectData = await projectsStore.getProjectById(projectId);
    project.value = projectData;
  } catch (error) {
    console.error('Error loading project:', error);
  } finally {
    loading.value = false;
  }
});

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
    month: 'long',
    day: 'numeric'
  })
}

// Provide sample image URLs for development/fallback
const getSampleImage = (id:number) => {
  const imageId = id % 10 + 1  // Cycle through 10 sample images
  return `https://picsum.photos/id/${200 + imageId}/1200/600`
}
</script>

<style scoped lang="scss">
.project-header-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  width: 100%;
}
</style>

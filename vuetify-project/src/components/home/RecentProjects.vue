<template>
  <section class="py-12 recent-projects-section">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-2">
            Recent Projects
          </h2>
          <p class="text-subtitle-1">
            Check out our latest work
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          sm="6"
          lg="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="d-flex flex-column project-card"
            >
              <v-img
                :src="project.image || getSampleImage(project.id)"
                height="200"
                cover
                class="align-end"
              >
                <v-chip
                  class="ma-3"
                  :color="getTypeColor(project.type)"
                  text-color="white"
                  size="small"
                >
                  {{ formatType(project.type) }}
                </v-chip>
              </v-img>
              
              <v-card-title class="text-h5 font-weight-bold">
                {{ project.name }}
              </v-card-title>
              
              <v-card-text>
                <p class="text-body-1">
                  {{ project.description }}
                </p>
                <p class="text-caption text-medium-emphasis mt-2">
                  Completed: {{ formatDate(project.completionDate) }}
                </p>
              </v-card-text>
              
              <v-card-actions class="mt-auto">
                <v-spacer />
                <v-btn
                  variant="flat"
                  color="primary"
                  :to="`/projects/${project.id}`"
                >
                  View Details
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          cols="12"
          class="text-center mt-4"
        >
          <v-btn
            color="primary"
            size="large"
            to="/projects"
            variant="flat"
          >
            View All Projects
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projects'

interface Project {
  id: number;
  name: string;
  description: string;
  type: 'web' | 'mobile' | 'desktop'; // Szűkítheted a lehetséges értékeket
  completionDate: string;
  client: string;
  image: string;
  technologies: string[];
  features: string[];
  teamSize: number;
  duration: string;
}



const projectsStore = useProjectsStore()
const projects = ref<Project[]>([])

// Load latest projects from API
onMounted(async () => {
  await projectsStore.fetchLatestProjects(6) // Get 6 recent projects
  projects.value = projectsStore.latestProjects
})

// Format project type for display
const formatType = (type: string) => {
  return type.charAt(0).toUpperCase() + type.slice(1)
}

// Get color for project type
const getTypeColor = (type: string) => {
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
const formatDate = (dateString: string | number | Date) => {
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
  return `https://picsum.photos/id/${200 + imageId}/500/300`
}
</script>

<style scoped lang="scss">
.project-card {
  transition: transform 0.3s;
  
  &.on-hover {
    transform: translateY(-8px);
  }
}
</style>

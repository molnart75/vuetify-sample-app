// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

// Define project interface
export interface Project {
  id: number;
  name: string;
  description: string;
  type: 'web' | 'mobile' | 'desktop';
  completionDate: string;
  client: string;
  image: string;
  technologies: string[];
  features: string[];
  teamSize: number;
  duration: string;
}

export interface ProjectsParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: string;
  type?: string;
  q?: string;
}

export const useProjectsStore = defineStore('projects', () => {
  const baseUrl = 'http://localhost:3001'
  
  // Projects state
  const projects = ref<Project[]>([])
  const totalProjects = ref(0)
  const latestProjects = ref<Project[]>([])
  
  // Loading and error states
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Fetch all projects (for server-side table)
  async function fetchProjects(params: ProjectsParams) {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(`${baseUrl}/projects`, {
        params: params,
        headers: {
          'X-Total-Count': 'true'
        }
      })
      
      projects.value = response.data
      
      // Get total count from headers if available
      const totalHeader = response.headers['x-total-count']
      if (totalHeader) {
        totalProjects.value = parseInt(totalHeader)
      }
      
      return response.data
    } catch (err) {
      console.error('Error fetching projects:', err)
      error.value = 'Failed to load projects'
      return []
    } finally {
      loading.value = false
    }
  }
  
  // Fetch latest projects for homepage
  async function fetchLatestProjects(limit = 6) {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(`${baseUrl}/projects`, {
        params: {
          _sort: 'completionDate',
          _order: 'desc',
          _limit: limit
        }
      })
      
      latestProjects.value = response.data
      return response.data
    } catch (err) {
      console.error('Error fetching latest projects:', err)
      error.value = 'Failed to load latest projects'
      return []
    } finally {
      loading.value = false
    }
  }
  
  // Get project by ID
  async function getProjectById(id: number): Promise<Project | null> {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(`${baseUrl}/projects/${id}`)
      return response.data
    } catch (err) {
      console.error(`Error fetching project with ID ${id}:`, err)
      error.value = 'Failed to load project details'
      return null
    } finally {
      loading.value = false
    }
  }
  
  // Get project types for filtering
  const projectTypes = computed(() => {
    const types = new Set(projects.value.map(project => project.type))
    return Array.from(types)
  })
  
  return {
    projects,
    totalProjects,
    latestProjects,
    loading,
    error,
    projectTypes,
    fetchProjects,
    fetchLatestProjects,
    getProjectById
  }
})

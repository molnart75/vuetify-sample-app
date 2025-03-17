// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAppStore = defineStore('app', () => {
  const baseUrl = 'http://localhost:3001'
  
  // Company statistics
  const stats = ref({
    completedProjects: 0,
    teamMembers: 0,
    yearsExperience: 0,
    clientSatisfaction: 0
  })
  
  // Loading states
  const loading = ref({
    projects: false,
    strengths: false,
    slides: false,
    stats: false
  })
  
  // Error states
  const error = ref<{
    projects: string | null,
    strengths: string | null,
    slides: string | null,
    stats: string | null
  }>({
    projects: null,
    strengths: null,
    slides: null,
    stats: null
  })
  
  // Fetch company statistics
  async function fetchStats() {
    loading.value.stats = true
    error.value.stats = null
    
    try {
      const response = await axios.get(`${baseUrl}/stats`)
      stats.value = response.data
    } catch (err) {
      console.error('Error fetching stats:', err)
      error.value.stats = 'Failed to load company statistics'
    } finally {
      loading.value.stats = false
    }
  }
  
  return {
    stats,
    loading,
    error,
    fetchStats
  }
})

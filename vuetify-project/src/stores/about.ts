// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// Define team member interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export const useAboutStore = defineStore('about', () => {
  const baseUrl = 'http://localhost:3001'
  
  // Team members state
  const teamMembers = ref<TeamMember[]>([])
  
  // Loading and error states
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Fetch team members
  async function fetchTeamMembers() {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(`${baseUrl}/team`)
      teamMembers.value = response.data
      return response.data
    } catch (err) {
      console.error('Error fetching team members:', err)
      error.value = 'Failed to load team members'
      return []
    } finally {
      loading.value = false
    }
  }
  
  return {
    teamMembers,
    loading,
    error,
    fetchTeamMembers
  }
})

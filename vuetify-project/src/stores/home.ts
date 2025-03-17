// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// Define strength interface
interface Strength {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Define slide interface
interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export const useHomeStore = defineStore('home', () => {
  const baseUrl = 'http://localhost:3001'
  
  // Strengths state
  const strengths = ref<Strength[]>([])
  
  // Slides state
  const slides = ref<Slide[]>([])
  
  // Loading and error states
  const loading = ref({
    strengths: false,
    slides: false
  })
  
  const error = ref({
    strengths: null as string | null,
    slides: null as string | null
  })
  
  // Fetch strengths
  async function fetchStrengths() {
    loading.value.strengths = true
    error.value.strengths = null
    
    try {
      const response = await axios.get(`${baseUrl}/strengths`)
      strengths.value = response.data
      return response.data
    } catch (err) {
      console.error('Error fetching strengths:', err)
      error.value.strengths = 'Failed to load strengths'
      return []
    } finally {
      loading.value.strengths = false
    }
  }
  
  // Fetch slider content
  async function fetchSlides() {
    loading.value.slides = true
    error.value.slides = null
    
    try {
      const response = await axios.get(`${baseUrl}/slides`)
      slides.value = response.data
      return response.data
    } catch (err) {
      console.error('Error fetching slides:', err)
      error.value.slides = 'Failed to load slider content'
      return []
    } finally {
      loading.value.slides = false
    }
  }
  
  return {
    strengths,
    slides,
    loading,
    error,
    fetchStrengths,
    fetchSlides
  }
})

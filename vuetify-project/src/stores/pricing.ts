// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

// Define pricing plan interface
interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  period: string;
  features: string[];
  popular: boolean;
}

export const usePricingStore = defineStore('pricing', () => {
  const baseUrl = 'http://localhost:3001'
  
  // Pricing plans state
  const pricingPlans = ref<PricingPlan[]>([])
  
  // Loading and error states
  const loading = ref(false)
  const error = ref<string | null>(null)
  
  // Fetch pricing plans
  async function fetchPricingPlans() {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(`${baseUrl}/pricing`)
      pricingPlans.value = response.data
      return response.data
    } catch (err) {
      console.error('Error fetching pricing plans:', err)
      error.value = 'Failed to load pricing plans'
      return []
    } finally {
      loading.value = false
    }
  }
  
  return {
    pricingPlans,
    loading,
    error,
    fetchPricingPlans
  }
})

<template>
  <component :is="resolveLayout" />
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import DefaultLayout from '@/layouts/default.vue'
import SidebarLayout from '@/layouts/sidebar.vue'

// Store access
const themeStore = useThemeStore()
const route = useRoute()

// Initialize theme on app load
onMounted(() => {
  // Get stored theme from localStorage or use default
  const storedTheme = localStorage.getItem('selectedTheme')
  if (storedTheme) {
    themeStore.isDark = storedTheme === 'dark'
  }
})

// Manually resolve layout based on the current route
const resolveLayout = computed(() => {
  // Check if we're on the main projects page (not a project detail page)
  if (route.path === '/projects' || route.path === '/projects/') {
    return SidebarLayout
  }
  
  // Use default layout for all other pages
  return DefaultLayout
})
</script>

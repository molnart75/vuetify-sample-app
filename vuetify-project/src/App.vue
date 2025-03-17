<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

// Store access
const themeStore = useThemeStore()

// Initialize theme on app load
onMounted(() => {
  // Get stored theme from localStorage or use default
  const storedTheme = localStorage.getItem('selectedTheme')
  if (storedTheme) {
    themeStore.isDark = storedTheme === 'dark'
  }
})
</script>

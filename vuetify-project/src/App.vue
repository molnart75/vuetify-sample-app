<template>
  <component :is="resolveLayout" />
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import DefaultLayout from '@/layouts/default.vue'
import SidebarLayout from '@/layouts/sidebar.vue'

const themeStore = useThemeStore()
const route = useRoute()

onMounted(() => {
  const storedTheme = localStorage.getItem('selectedTheme')
  if (storedTheme) {
    themeStore.isDark = storedTheme === 'dark'
  }
})

const resolveLayout = computed(() => {
  if (route.path === '/projects' || route.path === '/projects/') {
    return SidebarLayout
  }
  
  return DefaultLayout
})
</script>

<template>
  <v-app-bar
    app
    elevation="1"
    :color="appBarColor"
  >
    <v-app-bar-nav-icon
      v-if="showSidebar"
      class="d-lg-none"
      @click="toggleSidebar"
    />
    
    <v-app-bar-title class="font-weight-bold">
      <router-link
        to="/"
        class="text-decoration-none"
      >
        <span class="primary-text">Code</span><span class="text-primary">Craft</span>
      </router-link>
    </v-app-bar-title>
    
    <v-spacer />
    
    <!-- Desktop Menu -->
    <div class="d-none d-md-flex align-center">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.to"
        variant="text"
        class="mx-1"
      >
        {{ item.title }}
      </v-btn>
    </div>
    
    <!-- Theme switch -->
    <v-btn
      icon
      :title="themeStore.isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
      class="ml-4"
      @click="toggleTheme"
    >
      <v-icon>{{ themeStore.isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
    
    <!-- Mobile Menu Button -->
    <v-btn
      v-if="!showSidebar"
      icon
      class="d-md-none ml-4"
      @click="mobileMenu = true"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
  
  <!-- Mobile Menu Dialog -->
  <v-dialog
    v-model="mobileMenu"
    fullscreen
    transition="dialog-bottom-transition"
    :scrim="false"
  >
    <v-card>
      <v-toolbar :color="appBarColor">
        <v-btn
          icon
          @click="mobileMenu = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Menu</v-toolbar-title>
      </v-toolbar>
      <v-list lines="one">
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          @click="mobileMenu = false"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  showSidebar: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleSidebar'])

// Mobile menu state
const mobileMenu = ref(false)

// Theme toggle functionality
const themeStore = useThemeStore()
const toggleTheme = () => themeStore.toggleTheme()

// Toggle sidebar functionality
const toggleSidebar = () => {
  emit('toggleSidebar')
}

// Compute app bar color based on theme
const appBarColor = computed(() => {
  return themeStore.isDark ? 'rgb(25, 32, 39)' : 'white'
})

// Menu items
const menuItems = [
  { title: 'Home', to: '/' },
  { title: 'Projects', to: '/projects' },
  { title: 'About Us', to: '/about' },
  { title: 'Pricing', to: '/pricing' },
  { title: 'Contact', to: '/contact' }
]
</script>

<style scoped lang="scss">
.primary-text {
  color: var(--v-theme-on-surface);
}
</style>

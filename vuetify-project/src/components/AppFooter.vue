<template>
  <v-footer :color="themeStore.isDark ? 'rgb(25, 32, 39)' : 'grey-lighten-3'">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
          class="text-center text-md-left"
        >
          <h3 class="text-h5 mb-4">
            <span class="text-high-emphasis">Code</span><span class="text-primary">Craft</span>
          </h3>
          <p class="text-body-2 text-medium-emphasis mb-4">
            Creating innovative software solutions for businesses around the world.
            Our expert team is dedicated to delivering high-quality digital experiences.
          </p>
          <div class="d-flex justify-center justify-md-start">
            <v-btn
              icon
              class="mr-2"
              variant="plain"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mr-2"
              variant="plain"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mr-2"
              variant="plain"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="plain"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="3"
          class="text-center text-md-left"
        >
          <h4 class="text-h6 mb-4">
            Quick Links
          </h4>
          <v-list 
            density="compact" 
            :bg-color="themeStore.isDark ? 'rgb(25, 32, 39)' : 'grey-lighten-3'"
            class="pa-0"
          >
            <v-list-item 
              v-for="link in quickLinks" 
              :key="link.title" 
              :to="link.to"
              :title="link.title"
              class="px-0"
            />
          </v-list>
        </v-col>
        
        <v-col
          cols="12"
          md="5"
          class="text-center text-md-left"
        >
          <h4 class="text-h6 mb-4">
            Contact Us
          </h4>
          <v-list 
            density="compact" 
            :bg-color="themeStore.isDark ? 'rgb(25, 32, 39)' : 'grey-lighten-3'"
            class="pa-0"
          >
            <v-list-item
              prepend-icon="mdi-map-marker"
              class="px-0"
            >
              <v-list-item-title>123 Tech Street, Silicon Valley, CA 94043</v-list-item-title>
            </v-list-item>
            
            <v-list-item
              prepend-icon="mdi-phone"
              class="px-0"
            >
              <v-list-item-title>+1 (555) 123-4567</v-list-item-title>
            </v-list-item>
            
            <v-list-item
              prepend-icon="mdi-email"
              class="px-0"
            >
              <v-list-item-title>info@codecraft.example.com</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
      
      <v-divider class="my-4" />
      
      <div class="text-center text-body-2">
        &copy; {{ new Date().getFullYear() }} CodeCraft Inc. All rights reserved.
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

const quickLinks = [
  { title: 'Home', to: '/' },
  { title: 'Projects', to: '/projects' },
  { title: 'About Us', to: '/about' },
  { title: 'Our Services', to: '/services' },
  { title: 'Pricing', to: '/pricing' },
  { title: 'Contact', to: '/contact' }
]
</script>

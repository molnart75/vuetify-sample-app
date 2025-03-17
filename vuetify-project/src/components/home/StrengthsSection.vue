<template>
  <section class="py-12">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-2">
            Our Strengths
          </h2>
          <p class="text-subtitle-1">
            What sets us apart from the competition
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          v-for="strength in strengths"
          :key="strength.id"
          cols="12"
          md="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="d-flex flex-column strength-card"
            >
              <div class="pa-6 text-center">
                <v-avatar
                  color="primary"
                  size="72"
                  class="mb-4"
                >
                  <v-icon
                    :icon="strength.icon"
                    size="36"
                    color="white"
                  />
                </v-avatar>
                
                <h3 class="text-h5 font-weight-bold mb-2">
                  {{ strength.title }}
                </h3>
                <p class="text-body-1">
                  {{ strength.description }}
                </p>
              </div>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHomeStore } from '@/stores/home'

interface Strength {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const homeStore = useHomeStore()
const strengths = ref<Strength[]>([])

// Load strengths from API
onMounted(async () => {
  await homeStore.fetchStrengths()
  strengths.value = homeStore.strengths.slice(0, 3) // Show 3 strengths
})
</script>

<style scoped lang="scss">
.strength-card {
  transition: transform 0.3s;
  
  &.on-hover {
    transform: translateY(-8px);
  }
}
</style>


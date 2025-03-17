<template>
  <v-carousel
    height="600"
    hide-delimiter-background
    show-arrows="hover"
    cycle
    interval="7000"
  >
    <v-carousel-item
      v-for="slide in slides"
      :key="slide.id"
      :src="slide.image || getSampleImage(slide.id)"
      cover
    >
      <v-sheet
        class="fill-height d-flex align-center justify-start"
        color="transparent"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="7"
              class="slider-content"
            >
              <h1 class="text-h2 font-weight-bold mb-2">
                {{ slide.title }}
              </h1>
              <p class="text-h6 mb-6">
                {{ slide.subtitle }}
              </p>
              <v-btn
                color="primary"
                size="large"
                :to="slide.buttonLink"
                class="text-white"
              >
                {{ slide.buttonText }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHomeStore } from '@/stores/home'

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const homeStore = useHomeStore()
const slides = ref<Slide[]>([])

// Load slider content from API
onMounted(async () => {
  await homeStore.fetchSlides()
  slides.value = homeStore.slides
})

// Provide sample image URLs for development/fallback
const getSampleImage = (id:number) => {
  const imageId = id % 5 + 1  // Cycle through 5 sample images
  return `https://picsum.photos/id/${150 + imageId}/1600/900`
}
</script>

<style scoped lang="scss">
.slider-content {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  color: white;
  
  h1 {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  }
  
  p {
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  }
}
</style>


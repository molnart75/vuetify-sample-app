<template>
  <div>
    <HeroSlider />
    <StrengthsSection />
    <RecentProjects />
    <StatsCounter />
    <NewsletterSection />
  </div>
</template>

<script setup lang="ts">
import HeroSlider from '@/components/home/HeroSlider.vue'
import StrengthsSection from '@/components/home/StrengthsSection.vue'
import RecentProjects from '@/components/home/RecentProjects.vue'
import StatsCounter from '@/components/home/StatsCounter.vue'
import NewsletterSection from '@/components/home/NewsletterSection.vue'

// Define route meta
defineOptions({
  layout: 'default'
})
</script>

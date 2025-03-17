<template>
  <section class="stats-section py-12">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-2">
            Our Track Record
          </h2>
          <p class="text-subtitle-1">
            Numbers that speak for themselves
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          v-for="(stat, index) in stats"
          :key="index"
          cols="6"
          md="3"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 'on-hover': isHovering }"
              height="100%"
              class="d-flex flex-column align-center justify-center py-6 stat-card"
            >
              <v-icon
                :icon="stat.icon"
                size="48"
                color="primary"
                class="mb-3"
              />
              
              <div class="text-h3 font-weight-bold mb-2">
                <vue-countup
                  :start-val="0"
                  :end-val="stat.value"
                  :duration="2.5"
                  :options="countOptions"
                />
                <span v-if="stat.suffix">{{ stat.suffix }}</span>
              </div>
              
              <div class="text-subtitle-1">
                {{ stat.label }}
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
import { useAppStore } from '@/stores/app'
import VueCountup from 'vue-countup-v3'

const appStore = useAppStore()

// CountUp options
const countOptions = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
}

// Stats definition
const stats = ref([
  {
    icon: 'mdi-check-circle-outline',
    value: 0,
    label: 'Projects Completed',
    suffix: ''
  },
  {
    icon: 'mdi-account-group',
    value: 0,
    label: 'Team Members',
    suffix: '+'
  },
  {
    icon: 'mdi-calendar-check',
    value: 0,
    label: 'Years Experience',
    suffix: '+'
  },
  {
    icon: 'mdi-thumb-up',
    value: 0,
    label: 'Client Satisfaction',
    suffix: '%'
  }
])

// Load stats from API
onMounted(async () => {
  await appStore.fetchStats()
  
  // Update stats with real data
  if (appStore.stats) {
    stats.value[0].value = appStore.stats.completedProjects
    stats.value[1].value = appStore.stats.teamMembers
    stats.value[2].value = appStore.stats.yearsExperience
    stats.value[3].value = appStore.stats.clientSatisfaction
  }
})
</script>

<style scoped lang="scss">
.stats-section {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.stat-card {
  transition: transform 0.3s;
  
  &.on-hover {
    transform: translateY(-8px);
  }
}
</style>

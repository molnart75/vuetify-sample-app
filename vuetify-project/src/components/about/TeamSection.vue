<template>
  <section class="team-section py-12">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-2">
            Meet Our Team
          </h2>
          <p class="text-subtitle-1">
            The talented people behind our success
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          v-for="member in teamMembers"
          :key="member.id"
          cols="12"
          sm="6"
          md="4"
          class="mb-6"
        >
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              v-bind="props"
              :elevation="isHovering ? 8 : 2"
              :class="{ 'on-hover': isHovering }"
              class="team-card"
            >
              <v-img
                :src="member.image || getPlaceholderImage(member.id, member.name)"
                height="300"
                cover
              >
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    />
                  </v-row>
                </template>
              </v-img>
              
              <v-card-title class="text-h5 font-weight-bold">
                {{ member.name }}
              </v-card-title>
              
              <v-card-subtitle class="text-subtitle-1 font-weight-medium text-primary pb-0">
                {{ member.position }}
              </v-card-subtitle>
              
              <v-card-text>
                <p class="text-body-2">
                  {{ member.bio }}
                </p>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer />
                <v-btn
                  icon
                  variant="plain"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="plain"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="plain"
                >
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAboutStore } from '@/stores/about'

interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

const aboutStore = useAboutStore()
const teamMembers = ref<TeamMember[]>([])

// Load team members from API
onMounted(async () => {
  await aboutStore.fetchTeamMembers()
  teamMembers.value = aboutStore.teamMembers;
})

// Generate placeholder images for team members if no image is available
const getPlaceholderImage = (id: number, name: string) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map((part: string) => part.charAt(0))
    .join('')
    .toUpperCase()
  
  // Use different background colors based on ID
  const colors = [
    '1F77B4', 'FF7F0E', '2CA02C', 'D62728', 
    '9467BD', '8C564B', 'E377C2', '7F7F7F', 
    'BCBD22', '17BECF'
  ]
  
  const color = colors[id % colors.length]
  
  // Generate a placeholder image URL with initials
  return `https://via.placeholder.com/300x300/${color}/FFFFFF?text=${initials}`
}
</script>

<style scoped lang="scss">
.team-card {
  transition: transform 0.3s;
  
  &.on-hover {
    transform: translateY(-8px);
  }
}
</style>

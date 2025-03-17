<template>
  <div class="contact-page">
    <!-- Hero section -->
    <section class="contact-hero py-16">
      <v-container>
        <v-row class="text-center">
          <v-col
            cols="12"
            md="8"
            offset-md="2"
          >
            <h1 class="text-h2 font-weight-bold mb-4">
              Get In Touch
            </h1>
            <p class="text-h6 mb-8">
              Have a question or want to discuss a project? We're here to help.
              Reach out to us and our team will get back to you shortly.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Contact form section -->
    <ContactForm />
    
    <!-- Map section -->
    <section class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold mb-2">
              Our Location
            </h2>
            <p class="text-subtitle-1">
              Find us at our headquarters
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-text class="pa-0">
                <!-- Placeholder for a Google Map -->
                <v-img
                  src="https://via.placeholder.com/1200x400/f5f5f5/cccccc?text=Map+Location"
                  height="400"
                  cover
                  class="map-placeholder"
                >
                  <div class="map-overlay d-flex align-center justify-center">
                    <div class="text-center">
                      <v-icon
                        size="64"
                        color="primary"
                      >
                        mdi-map-marker
                      </v-icon>
                      <div class="text-h5 font-weight-bold mt-2">
                        CodeCraft Headquarters
                      </div>
                      <div class="text-body-1">
                        123 Tech Street, Silicon Valley, CA 94043
                      </div>
                    </div>
                  </div>
                </v-img>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Office hours section -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h2 class="text-h4 font-weight-bold mb-6">
              Office Hours
            </h2>
            
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-icon color="primary">
                    mdi-clock-outline
                  </v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                  Monday - Friday
                </v-list-item-title>
                <v-list-item-subtitle>9:00 AM - 6:00 PM PST</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template #prepend>
                  <v-icon color="primary">
                    mdi-clock-outline
                  </v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                  Saturday
                </v-list-item-title>
                <v-list-item-subtitle>10:00 AM - 2:00 PM PST</v-list-item-subtitle>
              </v-list-item>
              
              <v-list-item>
                <template #prepend>
                  <v-icon color="primary">
                    mdi-clock-outline
                  </v-icon>
                </template>
                <v-list-item-title class="font-weight-bold">
                  Sunday
                </v-list-item-title>
                <v-list-item-subtitle>Closed</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
          
          <v-col
            cols="12"
            md="6"
          >
            <h2 class="text-h4 font-weight-bold mb-6">
              Support
            </h2>
            
            <v-card class="mb-4">
              <v-card-title class="d-flex align-center">
                <v-icon
                  color="primary"
                  class="mr-2"
                >
                  mdi-headset
                </v-icon>
                Technical Support
              </v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-2">
                  For technical issues or support with existing projects:
                </p>
                <div class="font-weight-bold">
                  support@codecraft.example.com
                </div>
                <div class="font-weight-bold">
                  +1 (555) 123-4568
                </div>
              </v-card-text>
            </v-card>
            
            <v-card>
              <v-card-title class="d-flex align-center">
                <v-icon
                  color="primary"
                  class="mr-2"
                >
                  mdi-briefcase
                </v-icon>
                Business Inquiries
              </v-card-title>
              <v-card-text>
                <p class="text-body-1 mb-2">
                  For new projects, partnerships, or business opportunities:
                </p>
                <div class="font-weight-bold">
                  business@codecraft.example.com
                </div>
                <div class="font-weight-bold">
                  +1 (555) 123-4569
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue'

// Define route meta
defineOptions({
  layout: 'default'
})
</script>

<style scoped lang="scss">
.contact-hero {
  background-color: rgba(var(--v-theme-primary), 0.05);
}

.map-placeholder {
  position: relative;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>

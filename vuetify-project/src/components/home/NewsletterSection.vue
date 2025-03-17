<template>
  <section class="newsletter-section py-12">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
          lg="6"
        >
          <v-card
            class="newsletter-card pa-6"
            :elevation="6"
          >
            <div class="text-center mb-6">
              <h2 class="text-h4 font-weight-bold mb-2">
                Stay Updated
              </h2>
              <p class="text-subtitle-1">
                Subscribe to our newsletter for the latest news and updates
              </p>
            </div>
            
            <v-form
              ref="form"
              v-model="isFormValid"
              @submit.prevent="submitForm"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.name"
                    :rules="nameRules"
                    label="Full Name"
                    required
                    variant="outlined"
                  />
                </v-col>
                
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.email"
                    :rules="emailRules"
                    label="Email Address"
                    required
                    variant="outlined"
                    type="email"
                  />
                </v-col>
                
                <v-col cols="12">
                  <v-checkbox
                    v-model="formData.consent"
                    :rules="consentRules"
                    required
                  >
                    <template #label>
                      <div>
                        I agree to the <a
                          href="#"
                          class="text-decoration-none"
                        >privacy policy</a> and consent to receiving marketing communications.
                      </div>
                    </template>
                  </v-checkbox>
                </v-col>
                
                <v-col
                  cols="12"
                  class="text-center"
                >
                  <v-btn
                    type="submit"
                    color="primary"
                    size="large"
                    :loading="isSubmitting"
                    :disabled="!isFormValid"
                    block
                  >
                    Subscribe
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
            
            <v-snackbar
              v-model="snackbar.show"
              :color="snackbar.color"
              timeout="5000"
            >
              {{ snackbar.text }}
              
              <template #actions>
                <v-btn
                  color="white"
                  variant="text"
                  @click="snackbar.show = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { VForm } from 'vuetify/components'

// Form validation rules
const nameRules = [
  (  v: string) => !!v || 'Name is required',
  (  v: string) => (v && v.length >= 3) || 'Name must be at least 3 characters'
]

const emailRules = [
  (  v: string) => !!v || 'Email is required',
  (  v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const consentRules = [
  (  v: string) => !!v || 'You must agree to the privacy policy'
]

// Form state
const form = ref<VForm | null>(null)
const isFormValid = ref(false)
const isSubmitting = ref(false)

const formData = reactive({
  name: '',
  email: '',
  consent: false
})

// Snackbar state
const snackbar = reactive({
  show: false,
  text: '',
  color: 'success'
})

// Submit the form
const submitForm = async () => {
  if (!isFormValid.value) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Show success message
    snackbar.color = 'success'
    snackbar.text = 'Thank you for subscribing to our newsletter!'
    snackbar.show = true
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.consent = false
    form.value?.reset()
  } catch (error) {
    console.error('Error submitting form:', error)
    snackbar.color = 'error'
    snackbar.text = 'An error occurred. Please try again later.'
    snackbar.show = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.newsletter-section {
  background-color: rgba(var(--v-theme-secondary), 0.05);
}

.newsletter-card {
  border-radius: 8px;
}
</style>

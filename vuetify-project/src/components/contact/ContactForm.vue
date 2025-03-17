<template>
  <section class="contact-form-section py-12">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="5"
          lg="4"
        >
          <h2 class="text-h3 font-weight-bold mb-6">
            Get In Touch
          </h2>
          
          <p class="text-body-1 mb-8">
            Have a question or want to discuss a project? We're here to help.
            Fill out the form and our team will get back to you shortly.
          </p>
          
          <v-list>
            <v-list-item
              prepend-icon="mdi-map-marker"
              title="123 Tech Street, Silicon Valley, CA 94043"
              class="mb-4"
            />
            
            <v-list-item
              prepend-icon="mdi-phone"
              title="+1 (555) 123-4567"
              class="mb-4"
            />
            
            <v-list-item
              prepend-icon="mdi-email"
              title="info@codecraft.example.com"
              class="mb-4"
            />
          </v-list>
          
          <div class="d-flex mt-8">
            <v-btn
              icon
              class="mr-2"
              variant="text"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mr-2"
              variant="text"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              class="mr-2"
              variant="text"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </div>
        </v-col>
        
        <v-col
          cols="12"
          md="7"
          lg="8"
        >
          <v-card
            class="pa-6"
            :elevation="2"
          >
            <v-form
              ref="form"
              v-model="isFormValid"
              @submit.prevent="submitForm"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="formData.name"
                    :rules="nameRules"
                    label="Full Name"
                    required
                    variant="outlined"
                  />
                </v-col>
                
                <v-col
                  cols="12"
                  md="6"
                >
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
                  <v-text-field
                    v-model="formData.subject"
                    :rules="subjectRules"
                    label="Subject"
                    required
                    variant="outlined"
                  />
                </v-col>
                
                <v-col cols="12">
                  <v-select
                    v-model="formData.serviceType"
                    :items="serviceTypes"
                    label="Service Type"
                    variant="outlined"
                  />
                </v-col>
                
                <v-col cols="12">
                  <v-textarea
                    v-model="formData.message"
                    :rules="messageRules"
                    label="Message"
                    required
                    variant="outlined"
                    rows="5"
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
                        >privacy policy</a> and consent to having my data processed.
                      </div>
                    </template>
                  </v-checkbox>
                </v-col>
                
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    type="submit"
                    color="primary"
                    size="large"
                    :loading="isSubmitting"
                    :disabled="!isFormValid"
                  >
                    Send Message
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
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

const subjectRules = [
  (  v: string) => !!v || 'Subject is required',
  (  v: string) => (v && v.length >= 5) || 'Subject must be at least 5 characters'
]

const messageRules = [
  (  v: string) => !!v || 'Message is required',
  (  v: string) => (v && v.length >= 20) || 'Message must be at least 20 characters'
]

const consentRules = [
  (  v: string) => !!v || 'You must agree to the privacy policy'
]

// Service types
const serviceTypes = [
  'Web Development',
  'Mobile App Development',
  'Desktop Application',
  'UI/UX Design',
  'Consulting',
  'Maintenance & Support',
  'Other'
]

// Form state
const form = ref<VForm | null>(null)
const isFormValid = ref(false)
const isSubmitting = ref(false)

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  serviceType: '',
  message: '',
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
    snackbar.text = 'Your message has been sent! We will get back to you soon.'
    snackbar.show = true
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.serviceType = ''
    formData.message = ''
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

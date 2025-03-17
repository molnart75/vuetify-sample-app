<template>
  <div class="pricing-page">
    <!-- Hero section -->
    <section class="pricing-hero py-16">
      <v-container>
        <v-row class="text-center">
          <v-col cols="12" md="8" offset-md="2">
            <h1 class="text-h2 font-weight-bold mb-4">Transparent Pricing</h1>
            <p class="text-h6 mb-8">
              Choose the right plan for your business needs with our straightforward pricing options.
              No hidden fees, just clear value for your investment.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Pricing plans section -->
    <PricingPlans />
    
    <!-- FAQ section -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold mb-2">Frequently Asked Questions</h2>
            <p class="text-subtitle-1">Answers to common questions about our pricing and services</p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12" md="10" offset-md="1">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel>
                <v-expansion-panel-title>
                  What's included in each pricing plan?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Each pricing plan includes a comprehensive set of services tailored to different business needs. The Basic plan covers essential website development with responsive design and basic CMS integration. The Professional plan adds database integration, advanced functionality, and extended support. The Enterprise plan offers full-scale system development with custom integrations, advanced security features, and long-term support. All plans include quality assurance testing, SEO optimization, and responsive design.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Are there any hidden costs?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  No, we believe in complete transparency. The price you see is the price you pay. We'll discuss all requirements and potential costs upfront during our initial consultation. If your project's scope changes during development, we'll provide clear estimates for any additional work before proceeding.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Can I upgrade my plan later?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Absolutely! You can upgrade your plan at any time as your business grows or your needs change. We'll work with you to ensure a smooth transition and incorporate any additional features or services you require.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  Do you offer custom solutions outside these plans?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Yes, we understand that every business has unique needs. If our standard plans don't quite match your requirements, we're happy to create a custom solution tailored specifically to your business goals, technical requirements, and budget constraints.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  What's your payment structure?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Our typical payment structure includes a 30% deposit to begin work, with the remaining amount divided into milestone payments throughout the project. For maintenance plans, we bill monthly. We accept bank transfers, credit cards, and other standard payment methods.
                </v-expansion-panel-text>
              </v-expansion-panel>
              
              <v-expansion-panel>
                <v-expansion-panel-title>
                  What if I'm not satisfied with the results?
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  Client satisfaction is our top priority. All plans include revision rounds, and we work closely with you throughout the development process to ensure we're meeting your expectations. If you're not completely satisfied, we'll work with you to address any concerns and make necessary adjustments to deliver a product you love.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- CTA section -->
    <section class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-card color="primary" class="text-center pa-8">
              <h2 class="text-h4 font-weight-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p class="text-h6 text-white mb-6">
                Contact us today for a free consultation and let's bring your vision to life.
              </p>
              <v-btn
                size="large"
                color="white"
                to="/contact"
                class="text-primary"
              >
                Get in Touch
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import PricingPlans from '@/components/pricing/PricingPlans.vue'

// Define route meta
defineOptions({
  layout: 'default'
})
</script>

<style scoped lang="scss">
.pricing-hero {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>

<template>
  <section class="pricing-section py-12">
    <v-container>
      <v-row class="text-center mb-8">
        <v-col cols="12">
          <h2 class="text-h3 font-weight-bold mb-2">
            Our Pricing Plans
          </h2>
          <p class="text-subtitle-1">
            Choose the plan that fits your business needs
          </p>
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          v-for="plan in pricingPlans"
          :key="plan.id"
          cols="12"
          md="6"
          lg="3"
          class="d-flex"
        >
          <v-card
            :elevation="plan.popular ? 8 : 2"
            class="d-flex flex-column pricing-card"
            :class="{ 'popular-plan': plan.popular }"
            height="100%"
            width="100%"
          >
            <v-card-item>
              <v-chip
                v-if="plan.popular"
                color="primary"
                class="popular-chip mb-2"
                size="small"
              >
                Most Popular
              </v-chip>
              
              <v-card-title class="text-h4 font-weight-bold mb-2">
                {{ plan.name }}
              </v-card-title>
              
              <v-card-subtitle class="pb-0">
                {{ plan.description }}
              </v-card-subtitle>
            </v-card-item>
            
            <v-card-text class="text-center">
              <div class="text-h3 font-weight-bold mb-2">
                {{ formatCurrency(plan.price) }}
              </div>
              <div class="text-caption text-medium-emphasis mb-6">
                {{ plan.period }}
              </div>
              
              <v-divider class="mb-6" />
              
              <v-list
                density="compact"
                class="pa-0 bg-transparent"
              >
                <v-list-item
                  v-for="(feature, index) in plan.features"
                  :key="index"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon
                      color="success"
                      size="small"
                    >
                      mdi-check-circle
                    </v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">
                    {{ feature }}
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            
            <v-card-actions class="px-4 pb-4 mt-auto">
              <v-btn
                block
                :color="plan.popular ? 'primary' : 'secondary'"
                :variant="plan.popular ? 'flat' : 'outlined'"
                size="large"
                :class="{ 'text-white': plan.popular }"
              >
                Choose Plan
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      
      <v-row class="mt-12 text-center">
        <v-col cols="12">
          <p class="text-body-1 mb-4">
            Need a custom solution tailored to your specific requirements?
          </p>
          <v-btn
            to="/contact"
            color="primary"
            size="large"
            variant="outlined"
          >
            Contact Us
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePricingStore } from '@/stores/pricing'

interface PricingPlan {
        id: number;
        name: string;
        description: string;
        price: number;
        currency: string;
        period: string;
        features: string[];
        popular: boolean;
    }

const pricingStore = usePricingStore()
const pricingPlans = ref<PricingPlan[]>([])

// Load pricing plans from API
onMounted(async () => {
  await pricingStore.fetchPricingPlans()
  pricingPlans.value = pricingStore.pricingPlans
})

// Format currency for display
const formatCurrency = (amount:number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
</script>

<style scoped lang="scss">
.pricing-card {
  transition: transform 0.3s;
  
  &.popular-plan {
    transform: scale(1.05);
    position: relative;
    z-index: 2;
  }
  
  &:hover:not(.popular-plan) {
    transform: translateY(-8px);
  }
}

.popular-chip {
  position: absolute;
  top: -12px;
  right: 16px;
}
</style>

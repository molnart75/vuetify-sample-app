<template>
  <div class="about-page">
    <!-- Hero section -->
    <section class="about-hero py-16">
      <v-container>
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
            class="text-center text-md-left"
          >
            <h1 class="text-h2 font-weight-bold mb-4">
              About Our Company
            </h1>
            <p class="text-h6 mb-8">
              We're a team of passionate developers, designers, and strategists dedicated to creating cutting-edge digital solutions.
            </p>
            <v-btn
              color="primary"
              size="large"
              to="/contact"
              class="mr-4"
            >
              Contact Us
            </v-btn>
            <v-btn
              variant="outlined"
              size="large"
              to="/projects"
            >
              Our Work
            </v-btn>
          </v-col>
          
          <v-col
            cols="12"
            md="6"
            class="d-none d-md-flex"
          >
            <v-img
              src="https://picsum.photos/id/301/600/400"
              alt="Our team at work"
              class="rounded-lg"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Our story section -->
    <section class="py-12 bg-grey-lighten-4">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold mb-2">
              Our Story
            </h2>
            <p class="text-subtitle-1">
              How we became who we are today
            </p>
          </v-col>
        </v-row>
        
        <v-row align="center">
          <v-col
            cols="12"
            md="6"
            order="2"
            order-md="1"
          >
            <v-timeline
              align="start"
              direction="horizontal"
              density="comfortable"
            >
              <v-timeline-item
                dot-color="primary"
                size="small"
              >
                <template #opposite>
                  <div class="text-h6 font-weight-bold">
                    2012
                  </div>
                </template>
                <v-card>
                  <v-card-title class="text-h6">
                    Founded
                  </v-card-title>
                  <v-card-text>Company was founded with just 3 developers</v-card-text>
                </v-card>
              </v-timeline-item>
              
              <v-timeline-item
                dot-color="primary"
                size="small"
              >
                <template #opposite>
                  <div class="text-h6 font-weight-bold">
                    2015
                  </div>
                </template>
                <v-card>
                  <v-card-title class="text-h6">
                    Growth
                  </v-card-title>
                  <v-card-text>Expanded to 15 team members and opened a second office</v-card-text>
                </v-card>
              </v-timeline-item>
              
              <v-timeline-item
                dot-color="primary"
                size="small"
              >
                <template #opposite>
                  <div class="text-h6 font-weight-bold">
                    2018
                  </div>
                </template>
                <v-card>
                  <v-card-title class="text-h6">
                    Innovation
                  </v-card-title>
                  <v-card-text>Launched mobile development department and expanded services</v-card-text>
                </v-card>
              </v-timeline-item>
              
              <v-timeline-item
                dot-color="primary"
                size="small"
              >
                <template #opposite>
                  <div class="text-h6 font-weight-bold">
                    Now
                  </div>
                </template>
                <v-card>
                  <v-card-title class="text-h6">
                    Today
                  </v-card-title>
                  <v-card-text>Full-service digital agency with over 35 experts</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
          
          <v-col
            cols="12"
            md="6"
            order="1"
            order-md="2"
            class="mb-8 mb-md-0"
          >
            <p class="text-body-1 mb-4">
              Founded in 2012, CodeCraft began as a small team of passionate developers with a vision to create innovative digital solutions for businesses of all sizes. What started as a three-person operation has grown into a full-service software development company with over 35 talented professionals.
            </p>
            <p class="text-body-1 mb-4">
              Over the years, we've expanded our expertise from web development to include mobile applications, desktop software, and comprehensive digital strategies. Our growth has been fueled by our commitment to quality, innovation, and client satisfaction.
            </p>
            <p class="text-body-1">
              Today, we're proud to have delivered over 250 successful projects for clients across various industries. Our portfolio spans from small business websites to enterprise-level applications, each crafted with the same dedication to excellence that has defined our company since day one.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Mission and values section -->
    <section class="py-12">
      <v-container>
        <v-row class="text-center mb-8">
          <v-col cols="12">
            <h2 class="text-h3 font-weight-bold mb-2">
              Our Mission & Values
            </h2>
            <p class="text-subtitle-1">
              The principles that guide our work
            </p>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="mb-6"
          >
            <v-card height="100%">
              <v-card-item>
                <v-card-title class="text-h4 font-weight-bold mb-4">
                  Our Mission
                </v-card-title>
                
                <v-card-text>
                  <p class="text-body-1">
                    To empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We aim to transform complex challenges into elegant, user-focused experiences that make a meaningful impact.
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          
          <v-col
            cols="12"
            md="6"
            class="mb-6"
          >
            <v-card height="100%">
              <v-card-item>
                <v-card-title class="text-h4 font-weight-bold mb-4">
                  Our Vision
                </v-card-title>
                
                <v-card-text>
                  <p class="text-body-1">
                    To be recognized as the industry leader in creating digital solutions that bridge the gap between business needs and technological possibilities, setting new standards for innovation, quality, and customer satisfaction.
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
        
        <v-row class="mt-6">
          <v-col
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card height="100%">
              <v-card-item>
                <v-card-title class="d-flex align-center mb-4">
                  <v-icon
                    color="primary"
                    class="mr-2"
                    size="large"
                  >
                    mdi-lightbulb
                  </v-icon>
                  <span class="text-h5 font-weight-bold">Innovation</span>
                </v-card-title>
                
                <v-card-text>
                  <p class="text-body-1">
                    We embrace new technologies and creative thinking to deliver cutting-edge solutions that keep our clients ahead of the curve.
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          
          <v-col
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card height="100%">
              <v-card-item>
                <v-card-title class="d-flex align-center mb-4">
                  <v-icon
                    color="primary"
                    class="mr-2"
                    size="large"
                  >
                    mdi-check-decagram
                  </v-icon>
                  <span class="text-h5 font-weight-bold">Excellence</span>
                </v-card-title>
                
                <v-card-text>
                  <p class="text-body-1">
                    We maintain the highest standards in everything we do, from code quality to client communication, ensuring exceptional results.
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          
          <v-col
            cols="12"
            md="4"
            class="mb-6"
          >
            <v-card height="100%">
              <v-card-item>
                <v-card-title class="d-flex align-center mb-4">
                  <v-icon
                    color="primary"
                    class="mr-2"
                    size="large"
                  >
                    mdi-account-group
                  </v-icon>
                  <span class="text-h5 font-weight-bold">Collaboration</span>
                </v-card-title>
                
                <v-card-text>
                  <p class="text-body-1">
                    We believe in working closely with our clients, fostering transparent communication and treating their goals as our own.
                  </p>
                </v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    
    <!-- Team section -->
    <TeamSection />
  </div>
</template>

<script setup lang="ts">
import TeamSection from '@/components/about/TeamSection.vue'

// Define route meta
defineOptions({
  layout: 'default'
})
</script>

<style scoped lang="scss">
.about-hero {
  background-color: rgba(var(--v-theme-primary), 0.05);
}
</style>

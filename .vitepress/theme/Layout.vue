<script setup>
import DefaultTheme from 'vitepress/theme'

import Banner from './components/Banner.vue'
import Terminal from './components/Landing/Terminal/Terminal.vue'
import SpinningGradient from './components/SpinningGradient.vue'
import GithubFollowButton from './components/GithubFollowButton.vue'

import StackSection from './components/Landing/Stack/Section.vue'
import TestimonialsSection from './components/Landing/Testimonials/Section.vue'
import FAQSection from './components/Landing/FAQ/Section.vue'
import CustomDevelopmentSection from './components/Landing/CustomDevelopment.vue'
import DocAd from './components/DocAd.vue'

import Footer from './components/Landing/Footer.vue'

const { Layout } = DefaultTheme

// Banner Configuration
const isBannerEnabled = false
const bannerConfig = {
  text: '✨ NuxtAuth v0.8.0 has been released! ✨',
  button: {
    href: 'https://github.com/sidebase/nuxt-auth/releases/tag/0.8.0',
    text: 'View release notes'
  }
}
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <GithubFollowButton user="sidebase" />
    </template>

    <template #home-hero-image>
      <Terminal />
    </template>

    <template #home-hero-before>
      <Banner v-if="isBannerEnabled" v-bind="bannerConfig" />
      <SpinningGradient class="pt-4" />
    </template>

    <template #home-features-after>
      <div class="relative PageContainer">
        <img class="absolute inset-0 w-full h-full opacity-50 select-none pointer-events-none dark:opacity-100" src="/backgrounds/purple-blur.webp" alt="Background Image">
        <div class="container relative mx-auto space-y-24">
          <StackSection />
          <TestimonialsSection />
          <FAQSection />
          <CustomDevelopmentSection />
        </div>
      </div>
      <Footer class="mt-10" />
    </template>

    <template #doc-after>
      <div class="pt-6">
        <DocAd />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.PageContainer {
  position: relative;
  padding: 0 24px;
}
@media (min-width: 640px) {
  .PageContainer {
      padding: 0 48px;
  }
}
@media (min-width: 960px) {
  .PageContainer {
      padding: 0 64px;
  }
}
.container {
  margin: 0 auto;
  max-width: 1152px;
}
</style>

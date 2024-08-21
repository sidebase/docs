<script setup>
import DefaultTheme from 'vitepress/theme'

import Banner from './components/Banner.vue'
import Terminal from './components/Landing/Terminal/Terminal.vue'
import SpinningGradient from './components/SpinningGradient.vue'
import GithubFollowButton from './components/GithubFollowButton.vue'

import TestimonialsSection from './components/Landing/Testimonials/Section.vue'
import StackSection from './components/Landing/Stack/Section.vue'

const { Layout } = DefaultTheme

// Banner Configuration
const isBannerEnabled = true
const bannerConfig = {
  // Leave text empty to disable the banner
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
      <SpinningGradient />
    </template>

    <template #home-features-after>
      <div class="PageContainer mt-32">
        <div class="container mx-auto space-y-20">
          <StackSection />
          <TestimonialsSection />
        </div>
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

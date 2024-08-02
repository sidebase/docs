<script setup>
import DefaultTheme from 'vitepress/theme'

import Banner from './components/Banner.vue'
import Terminal from './components/Terminal/Terminal.vue'
import SpinningGradient from './components/SpinningGradient.vue'
// import GithubStarsButton from './components/GithubStarsButton.vue'

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
    <!--
    <template #nav-bar-content-after>
      <GithubStarsButton owner="sidebase" repo="sidebase" />
    </template>
    -->

    <template #home-hero-image>
      <Terminal />
    </template>

    <template #home-hero-before>
      <Banner v-if="isBannerEnabled" v-bind="bannerConfig" />
      <SpinningGradient />
    </template>
  </Layout>
</template>

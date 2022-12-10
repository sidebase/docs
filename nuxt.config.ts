export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-plausible'],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'sidebase.io',
      },
    },
  },
})

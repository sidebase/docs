export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-plausible'],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'sidebase.io',
      },
      algolia: {
        applicationId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        langAttribute: 'lang',
        docSearch: {
          indexName: 'sidebase'
        }
      }
    },
  },
})

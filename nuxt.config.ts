export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/plausible'],
  css: ["aos/dist/aos.css"],
  runtimeConfig: {
    public: {
      plausible: {
        domain: 'sidebase.io',
      },
      algolia: {
        applicationId: '0XMIMAT23T',
        apiKey: '49706735aa647d9c385da14759ce62d9',
        langAttribute: 'lang',
        docSearch: {
          indexName: 'sidebase'
        }
      }
    },
  },
})

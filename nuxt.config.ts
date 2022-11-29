export default defineNuxtConfig({
    extends: '@nuxt-themes/docus',
    modules: ['@nuxtjs/tailwindcss', 'nuxt-plausible'],
    css: ['@fortawesome/fontawesome-free/css/all.min.css'],
    runtimeConfig: {
        public: {
            plausible: {
                domain: 'v2.sidebase.io',
            },
        },
    },
})

export default defineAppConfig({
    docus: {
        title: 'nuxt-auth',
        description: 'The official nuxt-auth documentation.',
        url: 'https://sidebase.io',
        image: '/social-card-preview.png',
        socials: {
            twitter: '@sidebase_io',
            github: 'sidebase',
        },
        header: {
            title: 'sidebase docs',
            logo: true,
            showLinkIcon: true,
            exclude: ['/nuxt-session', '/nuxt-parse'],
        },
        aside: {
            level: 1,
            exclude: ['/guide', '/nuxt-session', '/nuxt-parse']
        },
    }
})

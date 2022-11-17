export default defineAppConfig({
    docus: {
        title: 'sidebase',
        description: 'The official sidebase documentation.',
        url: 'https://sidebase.io',
        image: '/social-card-preview.png',
        socials: {
            twitter: '@sidebase_io',
            github: 'sidebase',
        },
        header: {
            title: '🔐 nuxt-auth docs',
            logo: false,
            showLinkIcon: true
        },
        github: {
            edit: true,
            contributors: true,
            root: 'content'
        },
    }
})

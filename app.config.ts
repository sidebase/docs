export default defineAppConfig({
    docus: {
        title: 'sidebase',
        description: 'Supercharging the Nuxt3 developer experience with high quality modules and tools!',
        url: 'https://sidebase.io',
        image: '/social-card-preview.png',
        socials: {
            twitter: '@sidebase_io',
            github: 'sidebase',
        },
        header: {
            title: 'sidebase',
            logo: true,
            showLinkIcon: true,
            exclude: ['/blog']
        },
        aside: {
            level: 1,
            exclude: ['/nuxt-auth', '/nuxt-session', '/nuxt-parse', '/sidebase', '/nuxt-prisma']
        },
        footer: {
            credits: {
                icon: '',
                text: 'Imprint',
                href: 'https://www.sidestream.tech/en/imprint',
            },
            iconLinks: [
                {
                    label: 'Discord',
                    href: 'https://discord.gg/VzABbVsqAc',
                    icon: "ic:baseline-discord"
                },
            ],
        },
    }
})

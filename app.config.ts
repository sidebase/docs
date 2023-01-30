export default defineAppConfig({
  docus: {
    title: 'sidebase',
    description: 'Supercharging the Nuxt3 developer experience with high quality modules and tools!',
    image: '/social-card-preview.png',
    url: 'https://sidebase.io',
    socials: {
      twitter: '@sidebase_io',
      github: 'sidebase',
    },
    aside: {
      level: 1,
      exclude: ['/nuxt-auth', '/nuxt-session', '/nuxt-parse', '/sidebase', '/nuxt-prisma']
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      iconLinks: [
        {
          label: 'Discord',
          href: 'https://discord.gg/VzABbVsqAc',
          icon: "ic:baseline-discord"
        },
      ],
      textLinks: [
        {
          text: 'Imprint',
          href: '/',
        },
        {
          text: 'Jobs',
          href: '/',
        }
      ]
    }
  }
})

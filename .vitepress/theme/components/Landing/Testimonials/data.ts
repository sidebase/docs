export interface Testimonial {
  name: string
  avatar: string
  text: string
  githubLink?: string
  twitterLink?: string
  position?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Atinux',
    position: 'CEO of NuxtLabs',
    avatar: 'https://avatars.githubusercontent.com/Atinux',
    text: 'Beautiful work on sidebase!',
    twitterLink: 'https://twitter.com/Atinux',
    githubLink: 'https://github.com/Atinux',
  },
  {
    name: 'Daniel Roe',
    position: 'Nuxt Framework Lead',
    avatar: 'https://avatars.githubusercontent.com/danielroe',
    text: 'Really nice progress on @sidebase_io. Great job everyone 🙌',
    githubLink: 'https://github.com/danielroe',
    twitterLink: 'https://twitter.com/danielcroe/status/1602978071770025986',
  },
  {
    name: 'Vue School',
    avatar: 'https://avatars.githubusercontent.com/vueschool',
    position: 'Vue Learning platform',
    text: '@sidebase_io looks like a pretty slick starter template for working with @nuxt_js 3',
    githubLink: 'https://github.com/vueschool',
    twitterLink: 'https://twitter.com/VueSchool_io/status/1603699078151430147',
  },
  {
    name: 'ineshbose',
    avatar: 'https://avatars.githubusercontent.com/ineshbose',
    text: 'Been following this issue/project for a few weeks now - this is fantastic, and also a project extremely close to my interest!',
    githubLink: 'https://github.com/ineshbose',
  },
  {
    name: 'Fabian',
    avatar: 'https://avatars.githubusercontent.com/madebyfabian',
    text: 'Thank you so much for sharing! Trying to use nuxt 3 on a larger project currently, and struggling a lot in terms of project structure, best practices, which ecosystems & libs to use',
    githubLink: 'https://github.com/madebyfabian',
    twitterLink: 'https://twitter.com/madebyfabian/status/1566393943578787840',
  },
  {
    name: 'Criston Mascarenhas',
    avatar: 'https://avatars.githubusercontent.com/crstnmac',
    text: '@sidebase_io is a Vue alternative for create-t3-app @t3dotgg',
    githubLink: 'https://github.com/crstnmac',
    twitterLink: 'https://twitter.com/devcriston/status/1615803349332525056'
  },
  {
    name: 'Nikolas Burk',
    position: 'PrismaORM',
    avatar: 'https://avatars.githubusercontent.com/nikolasburk',
    text: '🤩 This is super exciting: Sidebase is bringing `create-t3-app` to the Vue/Nuxt community!',
    githubLink: 'https://github.com/nikolasburk',
    twitterLink: 'https://twitter.com/nikolasburk/status/1605502760052412416',
  },
  {
    name: 'anorakio',
    avatar: 'https://i.imgur.com/bh9c6In.jpeg',
    text: 'Thanks for sharing! Nice start to explore @nuxt_js 3.',
    twitterLink: 'https://twitter.com/anorakio/status/1571415138741239808',
  },
  {
    name: 'Dvir Hazout',
    avatar: 'https://i.imgur.com/ajom275.jpeg',
    text: 'You added the missing part for me in nuxt3 to start experiment real world app with the framework',
    twitterLink: 'https://twitter.com/dvir_hazout/status/1588272629500489728',
  },
]

export default testimonials

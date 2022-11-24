import type { SidebaseModule } from '~/types'

const modules: SidebaseModule[] = [
  {
    title: 'nuxt-session',
    description: 'Nuxt session middleware to get a persistent session per app user.',
    getStartedLink: '/nuxt-session',
    docsLink: 'https://github.com/sidebase/nuxt-session#quick-start',
    gitHubLink: 'https://github.com/sidebase/nuxt-session',
  },
  {
    title: 'nuxt-auth',
    description: 'Nuxt user authentication and sessions via NextAuth.js.',
    getStartedLink: '/nuxt-auth',
    docsLink: 'https://github.com/sidebase/nuxt-auth#documentation',
    gitHubLink: 'https://github.com/sidebase/nuxt-auth',
  },
  {
    title: 'nuxt-parse',
    description: 'A nuxt focused package to make data validation and parsing easy.',
    getStartedLink: '/nuxt-parse',
    docsLink: 'https://nuxt-sidebase-parse.sidebase.io/index.html',
    gitHubLink: 'https://github.com/sidebase/nuxt-parse',
  },
]

export default modules

import type { DefaultTheme } from 'vitepress'

export const routes: DefaultTheme.Config['sidebar'] = {
  '/sidebase': [
    {
      text: 'Welcome',
      base: '/sidebase/welcome',
      items: [
        {
          text: 'Introduction',
          link: '/',
        },
        {
          text: 'Stacks',
          link: '/stacks',
        },
        {
          text: 'Quick Start',
          link: '/quick-start',
        },
        {
          text: 'Getting Help',
          link: '/getting-help',
        },
        {
          text: 'FAQ',
          link: '/faq',
        },
      ],
    },
    {
      text: 'Components',
      base: '/sidebase/components',
      items: [
        {
          text: 'Overview',
          link: '/',
        },
        {
          text: 'Nuxt 3',
          link: '/nuxt-3',
        },
        {
          text: 'Typescript',
          link: '/typescript',
        },
        {
          text: 'Prisma ORM',
          link: '/prisma',
        },
        {
          text: 'tRPC',
          link: '/trpc',
        },
        {
          text: 'Nuxt Auth',
          link: '/nuxt-auth',
        },
        {
          text: 'Tailwind CSS',
          link: '/tailwindcss',
        },
      ],
    },
    {
      text: 'Resources',
      base: '/sidebase/resources',
      items: [
        {
          text: 'Overview',
          link: '/',
        },
        {
          text: 'Coding Setup',
          link: '/coding-setup',
        },
        {
          text: 'Breakpoint Debugging',
          link: '/breakpoint-debugging',
        },
        {
          text: 'Commands Cheat sheet',
          link: '/commands',
        },
      ],
    },
  ],
}

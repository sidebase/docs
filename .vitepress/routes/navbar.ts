import type { DefaultTheme } from 'vitepress'

export const routes: DefaultTheme.Config['nav'] = [
  {
    text: 'Development Kit',
    items: [
      {
        text: 'Getting started',
        link: '/sidebase/welcome',
      },
      {
        text: 'Components',
        link: '/sidebase/components',
      },
      {
        text: 'Resources',
        link: '/sidebase/resources',
      },
    ],
  },
  {
    text: 'NuxtAuth',
    link: 'https://auth.sidebase.io'
  },
]

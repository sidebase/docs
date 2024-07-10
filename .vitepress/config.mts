import { defineConfig } from 'vitepress'
import { routes as navRoutes } from './routes/navbar'
import { routes as sidebarRoutes } from './routes/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'sidebase',
  titleTemplate: ':title - by sidebase',
  description: 'The productive way to build fullstack Nuxt 3 applications.',
  srcDir: 'src',
  base: '/docs/',
  cleanUrls: true,
  lang: 'en-US',
  appearance: 'dark',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    nav: navRoutes,
    sidebar: sidebarRoutes,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sidebase' },
      { icon: 'x', link: 'https://twitter.com/sidebase_io' },
      { icon: 'discord', link: 'https://discord.gg/VzABbVsqAc' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Developed by SIDESTREAM',
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/sidebase/docs/tree/main/src/:path',
      text: 'Edit this page on GitHub'
    }
  },
})

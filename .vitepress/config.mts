import { defineConfig } from 'vitepress'
import { transformerTwoslash} from '@shikijs/vitepress-twoslash'

export default defineConfig({
  title: "NuxtAuth",
  titleTemplate: ":title - by sidebase",
  description: "The productive way to build fullstack Nuxt 3 applications.",
  lang: 'en-US',
  appearance: 'dark',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // @ts-expect-error The import types are broken?
  markdown: { codeTransformers: [ transformerTwoslash()  ]},
  themeConfig: {
    logo: '/icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/guide/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sidebase' },
      { icon: 'x', link: 'https://twitter.com/sidebase_io' },
      { icon: 'discord', link: 'https://discord.gg/VzABbVsqAc' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Developed by SIDESTREAM'
    },
    search: {
      provider: 'local'
    }
  }
})

import { defineConfig } from 'vitepress'
import { transformerTwoslash} from '@shikijs/vitepress-twoslash'

export default defineConfig({
  title: "Welcome",
  titleTemplate: ":title - sidebase",
  description: "The productive way to build fullstack Nuxt 3 applications.",
  lang: 'en-US',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  markdown: { codeTransformers: [ transformerTwoslash()  ]},
  themeConfig: {
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

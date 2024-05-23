// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'

import './style.css'
import '@shikijs/vitepress-twoslash/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.use(TwoslashFloatingVue)
  },
} satisfies Theme

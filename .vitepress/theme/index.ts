// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './style.css'

import Terminal from './components/Terminal/Terminal.vue'
import SpinningGradient from './components/SpinningGradient.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // See all available slots: https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': h(Terminal),
      'home-hero-before': h(SpinningGradient)
    })
  },
} satisfies Theme

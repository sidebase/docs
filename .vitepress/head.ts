import type { HeadConfig } from 'vitepress'

const HOST_NAME = 'https://sidebase.io'
const OG_IMAGE_URL = `${HOST_NAME}/sidebase-og.jpg`

export const sitemapConfig = {
  hostname: HOST_NAME
}

export const headConfig: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'theme-color', content: '#30A36C' }],
  ['meta', { property: 'og:title', content: 'sidebase - by SIDESTREAM' }],
  ['meta', { property: 'og:description', content: 'The web app development kit to build production fullstack Nuxt 3 apps quickly.' }],
  ['meta', { property: 'og:site_name', content: 'sidebase' }],
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en' }],
  ['meta', { property: 'og:image', content: OG_IMAGE_URL }],
  ['meta', { property: 'og:url', content: HOST_NAME }],
]

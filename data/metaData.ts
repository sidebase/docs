import type { MetaObject } from '@nuxt/schema'

const SITE_TITLE = 'sidebase ▸ by SIDESTREAM'
const PREVIEW_IMAGE = '/Social_Preview.jpg'
const SITE_DESCRIPTION = 'sidebase is a modern, best-practice, batteries-included fullstack-app starter based on Nuxt3 and TypeScript.'
const TWITTER_HANDLE = '@sidebase_io'

const metaData: MetaObject = {
  title: SITE_TITLE,
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: SITE_DESCRIPTION },
    { property: 'og:title', content: SITE_TITLE },
    { property: 'og:type', content: 'website' },
    { property: 'og:description', content: SITE_DESCRIPTION },
    { property: 'og:image', content: PREVIEW_IMAGE },
    { name: 'theme-color', content: '#5bf3c7' },
    { name: 'twitter:card', content: 'app' },
    { name: 'twitter:site', content: TWITTER_HANDLE },
    { name: 'twitter:title', content: SITE_TITLE },
    { name: 'twitter:description', content: SITE_DESCRIPTION },
    { name: 'twitter:image', content: PREVIEW_IMAGE },
  ],
  script: [
    {
      'src': 'https://plausible.io/js/plausible.js',
      'data-domain': 'sidebase.io',
      'defer': true,
    },
  ],
}

export default metaData

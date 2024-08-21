export interface StackItem {
  name: string
  description: string
  link?: string
  logoPath: string | {
    dark: string
    light: string
  }
}

export const stackItems: StackItem[] = [
  {
    name: 'Nuxt',
    description: 'Nuxt 3 wraps Vue 3 to help us productive Vue 3 quicker than ever before: Fullstack web Apps, Static Websites, PWAs and more are all possible with Nuxt 3. Nuxt also optimizes all of these modes heavily to provide the best user-experience (UX) and developer-experience (DX).',
    link: '/sidebase/components/nuxt-3',
    logoPath: '/brands/nuxt.svg',
  },
  {
    name: 'Typescript',
    description: 'TypeScript (TS) is essential because it provides guard-rails for development: TS let\'s us know what we talk about in our meeting when we discuss what the roles: Roles[] array contains, it informs our code-editor what we might be trying to do and let\'s it help us.',
    logoPath: '/brands/typescript.svg',
  },
  {
    name: 'tRPC',
    description: `tRPC rightly has the tagline "Move Fast and Break Nothing.": It allows you to define an API that is typesafe. TypeScript will start warning you on the client-side if you changed a server-side return but didn't make the necessary changes on the frontend! tRPC also adds snappy autocomplete.`,
    logoPath: '/brands/trpc.svg',
  },
  {
    name: 'Prisma',
    description: `Prisma is an ORM for your database. ORM stands for "object relational mapping" and that's also what a classical ORM does: It maps tables from the database onto JS / TS-objects in your code!`,
    logoPath: { light: '/brands/prisma_light.svg', dark: '/brands/prisma_dark.svg' },
  },
  {
    name: 'TailwindCSS',
    description: 'Tailwind is a CSS framework: It allows you to style your components using CSS. However, there is a twist with tailwind: It is utility first.',
    logoPath: '/brands/tailwindcss.svg',
  },
  {
    name: 'NaiveUI',
    description: 'Naive UI is a Vue 3 component library. There are more than 90 treeshakable components, that can all be customized to match your brand identity.',
    logoPath: '/brands/naiveui.svg',
  },
  {
    name: 'NuxtAuth',
    description: 'NuxtAuth wraps the very popular Auth.js library and brings its 23k github star power to the Nuxt 3 ecosystem. With nuxt-auth you can implement authentication via most possible OAuth providers in a few seconds.',
    logoPath: '/brands/nuxt-auth.png',
  },
  {
    name: 'NuxtI18n',
    description: 'NuxtI18n is the internationalization module for Nuxt. It easily integrates some localization features to your Nuxt Application and allows you to offer your project in multiple languages.',
    logoPath: '/brands/i18n.png',
  },
  {
    name: 'ESLint',
    description: 'ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline. ',
    logoPath: '/brands/eslint.svg',
  },
]

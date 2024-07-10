---
description: "Quick-start and first-steps of using sidebase to create production-ready fullstack Vue 3 and Nuxt 3 applications."
---
# Quick Start

To get started, run:
::: code-group
```bash [npm]
npm create sidebase@latest
```
```bash [pnpm]
pnpm create sidebase@latest
```
```bash [yarn]
# Note: Due to a known problem with `yarn`, it is not possible to force yarn to always use `@latest`: https://github.com/yarnpkg/yarn/issues/6587
yarn create sidebase
```
:::

That's it! The CLI will guide you through the process.

## First Steps

After running:

::: code-group
```bash [npm]
npm create sidebase@latest
```
```bash [pnpm]
pnpm create sidebase@latest
```
```bash [yarn]
# Note: Due to a known problem with `yarn`, it is not possible to force yarn to always use `@latest`: https://github.com/yarnpkg/yarn/issues/6587
yarn create sidebase
```
:::

your app is already ready to go! We suggest that you just try it out to get started:
::: code-group
```bash [npm]
npm run dev
```
```bash [pnpm]
pnpm run dev
```
```bash [yarn]
yarn run dev
```
:::

After making sure that everything runs by opening `localhost:3000` you can get started: Remove the minimal sidebase-starter `pages/index.vue` content and replace it with your own logic.

### With Prisma

If you've added Prisma ORM by selecting it as a module for the [Merino-stack](/sidebase/welcome/stacks) or by selecting the [Cheviot-stack](/sidebase/welcome/stacks), you should:
1. Adapt the `prisma/schema.prisma` to your liking,
2. Generate the Prisma client by running:
::: code-group
```bash [npm]
npx prisma generate
```
```bash [pnpm]
pnpx prisma generate
```
```bash [yarn]
npx prisma generate
```
:::
1. Push your prisma-schema to the database (optional for `sqlite3`):

::: code-group
```bash [npm]
npx prisma db push
```
```bash [pnpm]
pnpx prisma db push
```
```bash [yarn]
npx prisma db push
```
:::

Per default the `prisma/schema.prisma` file will only contain an Example-table:
```prisma
model Example {
  id          String @id @default(uuid())
  details     String
}
// < other content removed for brevity >
```

Per default `sqlite` is configured as the target database, so you can start with development right away. For deployment you may want to switch to another database provider. See [the Prisma ORM introduction for further information](/sidebase/components/prisma)

## CLI Options

The CLI offers some options. These are experimental at the moment and will change and expand over the coming months:
- `--quick`: Quicker flow through CLI, mostly by skipping `🐑 Diamond` the friendly sheep-helper

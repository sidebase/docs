---
description: "sidebase offers two different stacks: The heavy. fully-featured Cheviot-stack and the light pick-and-choose Merino stack. Learn the differences between the two stack on this page."
---
# Stacks

sidebase has a core comprised of [Nuxt 3](https://nuxt.com/) and [TypeScript](https://www.typescriptlang.org/). These two technologies are a must for all sidebase applications. On top of that sidebase offers different "stacks" that build on its core. A stack adds multiple additional packages, configs, ... to the core. Currently, two stacks are available:
- [Merino](/sidebase/welcome/stacks#merino): A fine-grained stack that let's you choose configuration and modules, e.g.: Want Prisma ORM or not? Want Naive UI or not? ...
- [Cheviot](/sidebase/welcome/stacks#cheviot): A batteries-included but less flexible stack where most decisions were made for you

Both stacks deliver a stellar user-experience and can be deployed to all places that [Nuxt 3 supports out of the box](https://nuxt.com/docs/getting-started/deployment#deployment). The `create-sidebase` will ask you what stack to use in its first step. The follow-up questions are then different depending on the stack you chose:
::: code-group
```bash [npm]
npm create sidebase@latest
```
```bash [pnpm]
pnpm create sidebase@latest
```
```bash [yarn]
To use Merino, select "Merino" in the first step of the sidebase CLI.
# Note: Due to a known problem with `yarn`, it is not possible to force yarn to always use `@latest`: https://github.com/yarnpkg/yarn/issues/6587
yarn create sidebase
```
:::

::: info
Below the two stacks are described in greater detail, but you do not need this information to get started. Instead, you can run the above command and let the sidebase CLI guide you. You can figure out the rest as you get into your project.
:::

## Merino

The Merino stack allows fine-grained pick and choose for a selection of modules, libraries, ... to add to the sidebase core. Merino is ideal if you want to use a version of sidebase that is tailored to your specific needs and slightly-less opinionated than the Cheviot stack. Merino is less ideal if you do not have the resources or capabilities to customize and extend your starter beyond what the CLI offers or have troubles or do not want to bother with code editor configuration. Merino allows you to:

- Configure `eslint`, `typescript` and VS Code extensions specifically for Nuxt 3
- PrismaORM: Next-generation Node.js and TypeScript ORM. [Read more here](/sidebase/components/prisma)
- tRPC: End-to-end typesafe APIs in Nuxt applications, pre-configured with [zod](https://github.com/colinhacks/zod) and [superjson](https://github.com/blitz-js/superjson) for best DX. [Read more here](/sidebase/components/trpc)
- Authentication: Authentication via OAuth, Credentials and more, wraps NextAuth.js with 12k stars. [Read more here](/nuxt-auth)
- Tailwind CSS: Uility-first CSS framework. [Read more here](/sidebase/components/tailwindcss)
- Naive UI: A Vue 3 Component Library. Fairly Complete, Theme Customizable, Uses TypeScript, Fast. Kinda Interesting. [Read more here](https://www.naiveui.com/en-US/os-theme/components/button)
- Git repository setup
- CI pipeline initialization: Github Actions
- Auto-install of configured packages and modules
- Auto-detect and configure necessary `pnpm` config

To use Merino, select "Merino" in the first step of the sidebase CLI.

## Cheviot

The Cheviot stack is a batteries-included setup with a databse ORM, testing setup, a UI component library, Dockerfiles for deployment, configuration files to improve your VS Code editing experience, a linting setup with pre-selected eslint rules and more. Cheviot is built on and maintained as ["the sidebase Nuxt 3 starter template" in this repository](https://github.com/sidebase/sidebase). Cheviot is ideal if you want to just get going with an opinionated stack that works. Cheviot is:
- **Fullstack**: Develop frontend and backend in a single TypeScript code base
- **Fast to code**: Database, example tests, example components and example pages are all there for you to fill out
- **Fewer bugs**: Strong data-validation using `zod` to validate all transferred data, fully typed API-routes and strict DB models
- **Easy to use**: Designed to follow best practices and to be ready-to-go for development, without additional dev-dependencies like `docker` that make it hard to get started
- **Ready for launch**: Github Actions CI, Dockerfile, easy switch to most popular SQL-databases are all there, out of the box ([get in touch if you're missing something](https://github.com/sidebase/sidebase/issues/new/choose))

To use Cheviot, select "Cheviot" in the first step of the sidebase CLI. In detail, Cheviot proved the following for production ready, robust, maintainable, fullstack applications:
- Fullstack [`Vue 3`](https://vuejs.org/) + [`Nuxt 3`](https://nuxt.com/),
- Database models, migrations, queries and easy DB-switching via [`Prisma`](https://www.prisma.io/),
- Deep Prisma integration: Use the client in your endpoints via [`nuxt-prisma`](/nuxt-prisma), Prisma client is auto-generated for `npm run dev` and other commands and more,
- Frontend- and Backend data-transformation via [`nuxt-parse`](https://www.npmjs.com/package/@sidebase/nuxt-parse) and [`zod`](https://github.com/colinhacks/zod),
- In-memory development SQL-database via [`sqlite3`](https://www.sqlite.org/index.html),
- Github Actions pipeline to run testing, linting and test-start your app in production- and development-modes to smoke-test their functionality,
- Linting via [`eslint`](https://eslint.org/),
- Test management, Test UI, component snapshotting via [`vitest`](https://vitest.dev/),
- Component tests via [`test-library/vue`](https://testing-library.com/),
- Nuxt 3 native API testing via [`@nuxt/test-utils`](https://nuxt.com/docs/getting-started/testing),
- Code coverage via [`c8`](https://github.com/bcoe/c8),
- CSS utilities via [`TailwindCSS`](https://tailwindcss.com/),
- CSS components via [`Naive UI`](https://www.naiveui.com),
- Type checking in script and template via [`Volar / vue-tsc`](https://github.com/johnsoncodehk/volar),
- Code editor configuration via `.editorconfig` files and a portable `.settings/` folder whith best-practice VS Code settings and extensions for Vue 3 / Nuxt 3 development

To facilitate this Cheviot bootstraps a Nuxt 3 project that permits developing a backend and a frontend using just Nuxt 3 with overarching TypeScript support. We want to show the world how enjoyable end-to-end typescript programming can be, displacing the myth that JS/TS-backends are no good. This starter solves a lot of the "real-world" problems that occur after you start using Nuxt or any other framework: How to write backend tests? How to write component tests? How to calculate test coverage? How to integrate a database? How to build a docker image? ...?

Cheviot used to be called [the Nuxt 3 sidebase template](https://github.com/sidebase/sidebase). The sidebase template is used to this day to setup Cheviot.

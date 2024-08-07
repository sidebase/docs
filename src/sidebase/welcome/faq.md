---
description: "Frequently asked questions about sidebase."
---
# FAQ

Frequently asked questions about sidebase.

## How do I build my app?

All stacks that sidebase generates are ready for development. They are also kept minimal, so that nothing get's in the way and you don't have to delete half of the files are running the CLI:
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

If you chose the ["Merino" stack](/sidebase/welcome/stacks) there will be less files and guidance, with the ["Cheviot" stack](/sidebase/welcome/stacks) there will be a bit more support.

In both cases it's best to just follow the final output of the `create sidebase` command to get the app running in development mode. The output can for example look like this:
```sh
# 🐑 Diamond:
# ✨ Project setup finished. Next steps are:
cd my-sidebase-app   // Enter your project directory
npx prisma generate  // Generate the prisma client
npm run dev          // Start the development server, use CTRL+C to stop
```

If you're not familiar with the technologies that are used here, we suggest that you [get help](/sidebase/welcome/getting-help) or read through the introductions of each technology in the usage section:
- [Quick Start](/sidebase/welcome/quick-start)
- [Nuxt 3](/sidebase/components/nuxt-3)
- [TypeScript](/sidebase/components/typescript)
- [Prisma ORM](/sidebase/components/prisma)
- [Tailwind CSS](/sidebase/components/tailwindcss)

## Help! Typescript is throwing errors / my editor does not correctly support Vue Single File Components!

This is a quite common problem and often time comes down to one of the following two problems:
1. Volar and or Volar take-over mode is not correctly setup: The most frequent step that is forgotten to correctly setup your Volar Vue Code Editor plugin is to disable the builtin TypeScript extention. This is described further [in the coding setup guide](/sidebase/resources/coding-setup)
2. The nuxt types are outdated: Nuxt generates a tsconfig and many types for us, but to do so it needs to get a chance to actually prepare them. This usually happens automatically on `postinstall` and on `npm run dev`, but can be forced by running `npm run postinstall` in sidebase projects

## What happened to the "old" sidebase template?

The sidebase template is alive and well! It's used to setup Cheviot under the hood, so if you want to use the sidebase template, just select "Cheviot" in the first sidebase CLI step. You [can still find the sidebase source-code and template here](https://github.com/sidebase/sidebase). It is basically used unaltered for Cheviot.

## Why are TypeScript and Nuxt 3 essential?

TypeScript (TS) is essential because it provides guard-rails for development: TS let's us know what we talk about in our meeting when we discuss what the `roles: Roles[]` array contains, it informs our code-editor what we might be trying to do and let's it help us (think of GitHub Co-Pilot, but less AI), it guarantees certain kinds of correctness that we could only discover as a "bug" when our application was already deployed. The numerous benefits of TS are well known, if you want to read on, how about checking out [the official Why TypeScript page](https://www.typescriptlang.org/why-create-typescript).

[Vue 3](https://vuejs.org/) is great - it has kept its promise of progressiveness and simplicity for web app development. It also has a rich ecosystem of libraries, modules and a sprawling developer community. [Nuxt 3](https://nuxt.com/) wraps Vue 3 to help us productive Vue 3 quicker than ever before: Fullstack web Apps, Statis Websites, PWAs and more are all possible with Nuxt 3. Nuxt also optimizes all of these modes heavily to provide the best user-experience (UX) and developer-experience (DX).

## Where can I get help?

See the [getting help page](/sidebase/welcome/getting-help) for info on this. There you will find links to get help via our Discord or repo

## What coding setup can you recommend?

We recommend that you:
- Editor: [Use VS Code](https://code.visualstudio.com/) as the mainstream, widely used code editor
- Plugins:
    - use [`Volar`](https://github.com/johnsoncodehk/volar) for proper `.vue` and `.ts` highlighting,
    - use [editorconfig](https://editorconfig.org/) to enforce some basic rules for all files,
    - use [eslint](https://eslint.org/) for formatting AND style
    - use [prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma) for formatting, highlighting and intellisense for your `schema.prisma`
    - use [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for tailwind intellisense, formatting and help
- Node / npm version: Use Node 18 if you can, but at least Node 18, install it via `nvm`, as described in [the node setup guide](/sidebase/resources/coding-setup). See [this repo for Node release schedules](https://github.com/nodejs/Release)
- OS: Use any operating system you like

[Follow the coding setup guide](/sidebase/resources/coding-setup) to configure your VS Code setup.

## What are inspirations for sidebase?

Some inspirations are:
- [create-t3-app](https://create.t3.gg/): We love their simplicity & focus on TypeScript
- [remix](https://remix.run/): We love their aspiration and believe in the Web being able to deliver good, fast and reliable user-experiences
- [TanStack](https://tanstack.com/): We love their modular approach that enhances every JS-ecosystem or app, independent of what stack one wants to use
- [RedwoodJS](https://redwoodjs.com/): We love their focus on building something productive and helpful, rather than something that solves all theoretical problems

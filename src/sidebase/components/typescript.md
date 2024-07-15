---
description: "TypeScript is a core-component of sidebase: It's always there and ensures that production-ready apps can be developed smoothly by avoiding unexpected runtime typing problems, auto-completing during development and more. Learn how to use TypeScript with sidebase here."
---
# TypeScript

TypeScript (TS) is essential because it provides guard-rails for development: TS let's us know what we talk about in our meeting when we discuss what the `roles: Roles[]` array contains, it informs our code-editor what we might be trying to do and let's it help us (think of GitHub Co-Pilot, but less AI), it guarantees certain kinds of correctness that we could only discover as a "bug" when our application was already deployed. The numerous benefits of TS are well known, if you want to read on, how about checking out [the official Why TypeScript page](https://www.typescriptlang.org/why-create-typescript).

TS is configured via the `tsconfig.json` file in your project root. This is also what let's typescript know that it is "enabled". Writing a good `tsconfig.json` can be hard. Nuxt takes over a lot of the heavy lifting for us, so the default sidebase-`tsconfig` looks like this:
::: code-group
``` [tsconfig.ts]
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json"
}
```
:::

The only thing it does is to reference the more comples `tsconfig.json` that is created by Nuxt. Sometimes this setup causes confusion: When the `./.nuxt/tsconfig.json` is missing, the sidebase-root-`./tsconfig.json` will appear broken and many code-editors and TypeScript setups show errors. To resolve this, it should be enought to run `npm run dev`. If that does not fix the problem you can force Nuxt to manually generate its `tsconfig.json` by running:
::: code-group
```bash [npm]
npm run postinstall
```
```bash [pnpm]
pnpm run postinstall
```
```bash [yarn]
yarn run postinstall
```
:::

If the TypeScript setup still does not work now, it may be related to your editor setup. Checkout [the VS Code setup guide](/sidebase/resources/coding-setup) to ensure a proper setup.

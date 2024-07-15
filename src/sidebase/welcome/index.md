---
description: "sidebase is a web development kit and CLI to build production ready fullstack apps quickly. This page offers a broad introduction of the CLI."
---
# Introduction

sidebase is a web development kit to build production ready fullstack apps quickly. sidebase relies on modern, fully-typed and best-practice technology to achieve this goal. sidebase embraces the fullstack TypeScript approach to app development: Code sharing between client and server, reduced learning curve for engineers and code-reuse across apps are things we love about this approach. That said, you can also use sidebase to build client-side only apps.

The core of sidebase are [Nuxt 3](https://nuxt.com/) and [TypeScript](https://www.typescriptlang.org/). On top of that sidebase provides different stacks that come ready with common components you need for a production application, including:
- Database
- API setup and typesafety
- CI pipelines
- Authentication
- Testing
- Linting and Formatting

This approach is inspired by [remix.run](https://remix.run). With the provided stacks everything is configured and setup for you. You can focus on building a great app instead of spending time on setup. Currently, the following stacks are available:
- [Merino](/sidebase/welcome/stacks#merino): A modular stack that let's you choose configuration and modules, e.g.: Want Prisma ORM or not? Want Authentication or not? ... Merino is ideal if you want fine-grained control
- [Cheviot](/sidebase/welcome/stacks#cheviot): A batteries-included but less flexible stack where most decisions were made for you. Cheviot is ideal if you want to just get going with an opinionated stack that works

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

For first-steps after running the above command, [read the Quick Start section](/sidebase/welcome/quick-start#first-steps). Checkout the [component pages](/sidebase/components/index) to get familiar with the different components that sidebase uses.

## Why does sidebase exist?

We are a [fullstack software agency](https://github.com/sidestream-tech) that builds dozens of applications every year with a focus on end-to-end development: conceptualization, project-planning, implementation, hosting and maintanence of software projects are our bread and butter. We're also a diverse, relatively young team with varying levels of experience. We also tend to rotate teams to share experience and use everybodys strengths optimally.

Over the years we've learned that the main overhead in building software is often not the development itself but rather the learning curves of different technologies, the friction that arises between different teams (think: backend python dev talks to frontend JS dev talks to non-technical project manager), the overhead of setting up something for the first time (think: Setting up auth for an app vs maintaining / working with an app where auth is already in place).

::: tip Other overhead

There are several other sources of overhead that impact an app-development process, e.g., team composition, culture and various processes. These are mostly out of scope here - sidebase attempts to resolve what it can using technology and best-practices, so that you have more time to focus on the essentials.

:::

We want to reduce overhead where possible with reproducible processes, decisions and standardizations: We switched from Python backends + TypeScript frontends to fullstack TypeScript apps that allow better communication between all types of developers, modules like [`nuxt-auth`](https://auth.sidebase.io) allow the integration of auth in minutes vs. hours, a module like `nuxt-swagger` makes the backend testable by the project manager and inexperienced devs, project setup via the sidebase CLI allows an efficient, reproducible and working project-setup for everyone from solo-developer to software team at big corp Y. sidebase is inspired by:
- [create-t3-app](https://create.t3.gg/): We love their simplicity & focus on TypeScript
- [remix](https://remix.run/): We love their aspiration and believe in the Web being able to deliver good, fast and reliable user-experiences
- [TanStack](https://tanstack.com/): We love their modular approach that enhances every JS-ecosystem or app, independent of what stack one wants to use

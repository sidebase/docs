---
description: "Nuxt 3 and tRPC make a great team. It's super easy to setup tRPC with Nuxt 3 by using sidebase - use this page to learn how to use tRPC after setting it up via sidebase."
---
# tRPC

tRPC rightly has the tagline "Move Fast and Break Nothing.": It allows you to define an API that is typesafe. TypeScript will start warning you on the client-side if you changed a server-side return but didn't make the necessary changes on the frontend! tRPC also adds snappy autocomplete.

In addition tRPC allows automatic de-/serialization of complex data-types (think: `Date`, `Map`, `Set`, `Array`, ...) using `superjson`. So when you send a `Date`-object from the backend to your frontend, you can use it as a `Date` in your frontend, no need to manually call `new Date(...)` and add additional verification code for proper deserialization, amazing! Adding `zod` on top can give you automatic input validation of data that comes into your endpoints (see below).

Under the hood sidebase uses the [`nuxt-trpc` module](https://trpc-nuxt.vercel.app/) to integrate tRPC. This module sets up a `tRPC` router in the Nuxt 3 backend. This router serves as the API you can then call. The "hello world" route that comes with sidebase looks as follows:
::: code-group
```ts [server/trpc/routers/index.ts]
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
        time: new Date()
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
```
:::

To use this in your application, call it:

::: code-group
```vue [pages/trpc.vue]
<script setup lang="ts">
const { $client } = useNuxtApp()

const hello = await $client.hello.useQuery({ text: 'client' })
</script>

<template>
  <div>
    <!-- As `superjson` is already pre-configured, we can use `time` as a `Date` object without further deserialization 🎉 -->
    <p>tRPC Data: "{{ hello.data.value?.greeting }}" send at "{{ hello.data.value?.time.toLocaleDateString() }}".</p>
  </div>
</template>
```
:::

Alter the endpoint to get a different output.

## Context

There's also a so-called `context` that you can use to automatically pass data into your endpoints: Authentication status, prisma client, ... Initially, the file looks like this:
::: code-group
```ts [server/trpc/context.ts]
import { inferAsyncReturnType } from '@trpc/server'
import type { H3Event } from 'h3'

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(event: H3Event) {
  /**
   * Add any trpc-request context here. E.g., you could add \`prisma\` like this if you've set it up:
   * \`\`\`
   * const prisma = usePrisma(event)
   * return { prisma }
   * \`\`\`
   *
   * You can import \`usePrisma\` like this: \`import { usePrisma } from '@sidebase/nuxt-prisma'\`
   */
  return {}
}

export type Context = inferAsyncReturnType<typeof createContext>
```
:::

This method behaves like a middleware: It runs before your route-logic and receives the current request as the `event` parameter. Anything you `return` from this method can be used in the subsequent route-logic.

Read the [trpc docs here](https://trpc.io/) to go further.

---
description: "Nuxt 3 and Prisma make a great team. It's super easy to setup Prisma ORM with Nuxt 3 by using sidebase - use this page to learn how to use Prisma after setting it up via sidebase."
---
# Prisma ORM

Prisma is an ORM for your database. ORM stands for "object relational mapping" and that's also what a classical ORM does: It maps tables from the database onto JS / TS-objects in your code!

This pattern is helpful for many reasons: It abstracts away your specific database, so you can switch from PostgreSQL to MySQL to sqlite3 without re-writing all your queries, it allows you to write queries in TypeScript so you don't have to learn an SQL dialect, it allows you to track the git-history of queries and your database schema clearly across versions. Another big advantage of Prisma specifically is that it applied runtime checks to all data you put into the database (as long as you do not drop down into raw SQL).

To get from prisma-schema to interacting with the database from your code you need to follow the following steps:
1. Define the database schema inside you `prisma/schema.prisma` file
2. Push the schema into the database that you use for development and generate the "Prisma client"
3. Use the generated client to interact with your database (aka: "Profit!")

What follows are these steps in more detail.

1. For example, you can define a database table with the name `Example` with an `id`-attribute as the primary key of type `uuid` and a `details`-attribute of type `string` like this:
    ::: code-group
    ```prisma [prisma/schema.prisma]
    // This is your Prisma schema file,
    // learn more about it in the docs: https://pris.ly/d/prisma-schema
    generator client {
    provider = "prisma-client-js"
    }

    datasource db {
    // NOTE: You probably want to change this to another database later on
    provider = "sqlite"

    // This value is read from the .env file.
    url      = env("DATABASE_URL")
    }

    model Example {
    id          String @id @default(uuid())
    details     String
    }
    ```
    :::
2. To get this schema loaded into the database, we need to "push" it to the database. This will also generate the Prisma client:
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
3. Use the client in your code:
    ::: code-group
    ```ts [server/api/example.get.ts]
    // This endpoint returns all existing example records
    import { usePrisma } from '@sidebase/nuxt-prisma'

    export default eventHandler((event) => {
      // `prisma` is typed and will help you to interact with the database. In addition all parameters you put into your database will be validated at runtime to ensure maximum safety.
      const prisma = usePrisma(event)

      return prisma.example.findMany()
    })
    ```
    :::

Read the [`nuxt-prisma` module docs](/nuxt-prisma) for further information on the `nuxt-prisma` module or read prismas' own [Why Prisma? docs](https://www.prisma.io/docs/concepts/overview/why-prisma).

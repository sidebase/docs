---
description: "Cheat sheet of available sidebase commands."
---
# Commands Cheat sheet

This is a cheat-sheet with commands that are supported by the available sidebase stacks. Note that not all commands are available for all [stacks](/sidebase/welcome/stacks).

## Develop & Debug the app

```sh
npm install # Install required dependencies
npm run dev # Start the fullstack app, including database
```

Availble in all [stacks](/sidebase/welcome/stacks).

## Linting, Formatting and Typechecking

```sh
npm run lint      # eslint for style and formating
npm run typecheck # run typescript to check types
```

Availble in the [Cheviot stack](/sidebase/welcome/stacks).

## Testing & Code Coverage & Component Snapshots

```sh
npm run test # Run tests once, report results and coverage
npm run test:watch # Run tests and watch file changes, run tests for changed files
npm run test -- -u # Update component snapshots after components changed
npm run test -- -t "some test-text" # Run all tests with `some test-text` in their `test(...)` description
npm run test:ui # Run the vitest testing web UI for easier test interaction
```

Availble in the [Cheviot stack](/sidebase/welcome/stacks).

## Prisma

```sh
npx prisma generate
npx prisma studio
npx prisma db push
npx prisma db pull
```

... and all other commands that Prisma natively supports: https://www.prisma.io/docs/reference/api-reference/command-reference

Availble in [Cheviot and in Merino if you selected the Prisma ORM option](/sidebase/welcome/stacks).

## Building & Deploying

```sh
npm run generate # Generate a static app for production
npm run build    # Build the app for production
npm run preview  # Start the app in production (requires `npm run build` beforehand)
```

Availble in all [stacks](/sidebase/welcome/stacks).

## Docker

```sh
docker build -t nuxt3-app .
docker run -p 3000:3000 --init --rm nuxt3-app
```
::: info
Note: Docker is not required for development or deployment or deployment. You can also run on a bare-metal server
:::

Availble in the [Cheviot stack](/sidebase/welcome/stacks).

## Miscellaneous

```sh
nvm use # If you use `nvm`, use this command to make sure that your local environment uses the correct, required node version
```

See the [node setup guide to learn what `nvm` is](/sidebase/resources/coding-setup).

Works out-of-the box with the [Cheviot stack](/sidebase/welcome/stacks) as long as you have `nvm` installed.

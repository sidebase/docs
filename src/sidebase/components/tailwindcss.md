---
description: "TailwindCSS and Nuxt 3 are a match made in heaven! Use this page to learn how to use Tailwind CSS after setting it up via sidebase."
---
# Tailwind CSS

Tailwind is a CSS framework: It allows you to style your components using CSS. However, there is a twist with tailwind: It is [utility first](https://tailwindcss.com/docs/utility-first). This basically means that instead of writing:
```css
h1 {
  background-color: #000;
}
```

To give all heading a black background color, you either define it inline using a `class`:
```html
<h1 class="bg-black">I have a black background</h1>
```

Or globally:
```css
h1 {
    @apply bg-black
}
```

This approach is very easy to learn and get used to. In addition there's great editor and eslint support for Tailwind, checkout [the setup section of the FAQ for more](/sidebase/welcome/faq).

Read the tailwind docs to go further, starting [with the fundamentals](https://tailwindcss.com/docs/utility-first).

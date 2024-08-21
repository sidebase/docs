<script setup>
import Item from './Item.vue'

const faqs = [
  {
    question: 'What is the difference between sidebase and NuxtAuth?',
    answer: 'sidebase is both the name for the starter and the open source community behind it. In addition to developing the sidebase starter, we also develop Nuxt modules to fill holes inside our starter!',
  },
  {
    question: 'How do I build my app? ',
    answer: `All stacks that sidebase generates are ready for development. They are also kept minimal, so that nothing get's in the way and you don't have to delete half of the files.`,
  },
  {
    question: 'Why is TypeScript required?',
    answer: `TypeScript (TS) is essential because it provides guard-rails for development: TS let's us know what we talk about in our meeting when we discuss what the roles array contains, it informs our code-editor what we might be trying to do and let's it help us (think of GitHub Co-Pilot, but less AI), it guarantees certain kinds of correctness that we could only discover as a "bug" when our application was already deployed.`,
  },
  {
    question: 'What coding setup can you recommend? ',
    answer: 'We recommend using VSCode with the following plugins: Volar, eslint, prisma, TailwindCSS IntelliSense. However, you can add or remove plugins to fit your coding setup!'
  },
  {
    question: 'Can I contribute to sidebase?',
    answer: 'Of course! we appreciate all the help the community gives us. Every repository under the sidebase github organization, contains a contributing guide (.github/CONTRIBUTING.md). This is a great place to start as it outlines our development process and where you can find issues to work on!'
  }
]
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold">
      Do you still have questions?
    </h1>
    <p class="text-lg">
      Here are some frequently asked questions about sidebase
    </p>

    <dl class="mt-8 space-y-6 divide-y divide-gray-900/10 dark:divide-white/10">
      <Item v-for="faq in faqs" :key="faq.question" :item="faq" />
    </dl>
  </div>
</template>

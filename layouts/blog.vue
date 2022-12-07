<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

const contentQuery = await queryContent('blog/posts').sort(
    { timestamp: -1, }
).find()
</script>

<template>
  <div class="relative min-h-[89vh]">
    <div class="absolute top-0 left-0 select-none">
      <img class="w-[100vw] opacity-20 dark:opacity-50 rotate-180" src="/glow-bottom.webp" />
    </div>
    <section class="BlogContainer relative">
      <div class="pt-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-20 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-7xl dark:text-white">
              Blog
            </h2>
            <p class="lg:mx-auto lg:w-7/12 text-gray-600 dark:text-gray-300 text-2xl">
              The newest updates, tutorials and insights into the development of sidebase and its modules!
            </p>
          </div>
        </div>
        <div class="grid md:gap-8 md:grid-cols-2 xl:grid-cols-3 mx-4 pb-12">
          <BlogCard v-for="post in contentQuery" :post="post" :key="post._id"/>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.BlogContainer {
  max-width: 77rem;
  margin: auto auto 5rem;

  @apply mx-4 xl:mx-auto;
}
</style>

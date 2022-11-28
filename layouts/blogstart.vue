<script setup>
import BlogCard from "~/components/blog/BlogCard.vue";

const contentQuery = await queryContent('blog/posts').find()
</script>

<template>
  <div class="relative">
    <section class="BlogContainer">

      <div class="py-12">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="mb-12 space-y-2 text-center">
            <h2 class="text-3xl font-bold text-gray-800 md:text-5xl dark:text-white">
              Blog
            </h2>
            <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
              TODO: Add a description
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">


           <BlogCard v-for="post in contentQuery" :post="post" :key="post._id"/>


          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.BlogContainer {
  max-width: 80rem;
  margin: auto auto 5rem;

  @apply mx-10 lg:mx-auto;
}
</style>

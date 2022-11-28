<script setup>
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
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            <div v-for="content in contentQuery" :key="content._id"
                 class="group p-6 sm:p-8 rounded-3xl bg-white dark:shadow-none dark:bg-black bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="relative overflow-hidden rounded-xl">
                <img
                    :src="content.image"
                    alt="art cover" loading="lazy" width="1000" height="667"
                    class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"/>
              </div>
              <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                  {{ content.title }}
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                  {{content.description}}
                </p>
                <a class="inline-block" href="#">
                  <span class="text-primary">Read more</span>
                </a>
              </div>
            </div>


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

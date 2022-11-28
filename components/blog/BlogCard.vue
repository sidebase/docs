<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  },
})
</script>

<template>
  <NuxtLink href="/nuxt-session">
    <div class="BlogCard overflow-hidden">
      <img :src="post.image" class="h-[180px] w-full" alt="Blog Post Preview" />
      <div class="p-4 dark:text-gray-300">
        <h3 class="text-2xl font-bold">
          {{post.title}}
        </h3>
        <p class="mt-2">
          {{post.description}}
        </p>

        <div class="flex w-full items-center space-x-3">
          <img
              :src="post.avatar"
              class="ring-sidebase-green-800 h-14 w-14 rounded-full p-1 ring-2"
              alt="Bordered avatar"
          >
          <div>
            <h1 class="text-lg text-gray-700 dark:text-gray-100">
              {{ post.author }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.BlogCard {
  position: relative;
  min-width: 366px;
  height: 320px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin-right: 50px;
  transition: 0.5s;
  cursor: pointer;

  @apply my-5 min-w-[310px] lg:min-w-[366px] lg:my-0;
}

.BlogCard:hover {
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0),
  inset -5px -5px 15px rgba(255, 255, 255, 0.3),
  5px 5px 15px rgba(0, 0, 0, 0.8), -5px -5px 15px rgba(255, 255, 255, 0.4);
}

@media (prefers-color-scheme: dark) {
  .BlogCard .box .content h3 {
    color: #fff;
  }

  .BlogCard .box .content p {
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>

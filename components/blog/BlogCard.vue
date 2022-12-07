<script setup lang="ts">
import type { PropType } from 'vue'
import {ParsedContent} from "@nuxt/content/dist/runtime/types";
import FormatDate from "~/components/common/FormatDate.vue";

defineProps({
  post: {
    type: Object as PropType<ParsedContent>,
    required: true
  },
})
</script>

<template>
  <NuxtLink :href="post._path" v-if="post.published">
    <div class="BlogCard overflow-hidden">
      <div class="h-[180px] overflow-hidden">
        <img :src="post.image" class="relative min-h-[180px] w-full" alt="Blog Post Preview" />
      </div>
      <div class="py-5 px-6 dark:text-gray-300">
        <h3 class="text-2xl font-bold h-[70px]">
          {{post.title}}
        </h3>
        <p class="mt-2 h-[68px] overflow-elipse">
          {{post.description}}
        </p>

        <div class="flex w-full items-center space-x-3 mt-10">
          <img
              :src="post.avatar"
              class="ring-sidebase-green-800 h-8 w-8 rounded-full p-1 ring-2"
              alt="Bordered avatar"
          >
          <h1 class="w-full">
            {{ post.author }}
          </h1>
          <div>
            <FormatDate :date="new Date(post.timestamp * 1000)" />
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
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
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

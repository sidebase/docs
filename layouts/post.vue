<script setup lang="ts">
import FormatDate from "~/components/common/FormatDate.vue";

const { page } = useContent()
</script>

<template>
  <div class="relative min-h-[91vh] overflow-hidden">
    <div class="absolute -top-[30vh] left-0 select-none">
      <img class="w-[100vw]" src="/purple-blur.webp" />
    </div>
    <div class="Post relative">
      <header class="flex items-center justify-between mb-4 lg:mb-6 not-format">
        <div class="w-full">
          <div class="mb-4">
            <h1 class="text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-gray-900 dark:text-white">
              {{page.title}}
            </h1>
          </div>
          <address class="flex items-center not-italic w-full">
            <div class="flex items-center mr-3 text-sm text-gray-900 dark:text-white w-full">
              <NuxtLink :href="page.avatarLink" target="_blank">
                <img class="mr-4 w-16 h-16 rounded-full" :src="page.avatar" :alt="page.author">
              </NuxtLink>
              <div class="flex items-end justify-between w-full ml-2">
                <NuxtLink :href="page.avatarLink" target="_blank">
                  <span rel="author" class="text-xl font-bold text-gray-900 dark:text-white">
                    {{page.author}}
                  </span>
                  <p class="text-base font-light text-gray-500 dark:text-gray-400">
                    {{page.position}}
                  </p>
                </NuxtLink>
                <p class="hidden lg:block text-sm font-light text-gray-500 dark:text-gray-400 text-md">
                  Published on <FormatDate :date="new Date(page.timestamp * 1000)" />
                </p>
              </div>
            </div>
          </address>
        </div>
      </header>
      <hr class="dark:border-gray-800 mb-4" />
      <div class="flex items-center justify-between">
        <div>
          <AnnouncementButton label="Back to overview" icon="heroicons-solid:arrow-left" to="/blog" />
        </div>
        <div class="flex items-center space-x-3">
          <!--
          <AnnouncementButton label="Share on Twitter" icon="mdi:twitter" to="/blog" />
          -->
        </div>
      </div>
      <hr class="dark:border-gray-800 mb-4" />

      <article class="pb-[70px] mt-[-20px]">
        <slot />
      </article>
    </div>
  </div>
</template>

<style scoped>
.Post {
  max-width: 80rem;
  margin: auto auto 5rem;

  @apply mx-10 lg:mx-auto mt-10;
}
</style>

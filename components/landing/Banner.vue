<script setup lang="ts">
defineProps({
  badgeText: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: undefined,
  },
  linkText: {
    type: String,
    default: 'Check it out!',
  },
})
</script>

<template>
  <div class="relative bg-gray-200/70 dark:bg-pickled-bluewood-800 hidden items-center justify-center pt-3 pb-4 text-[1rem] lg:flex">
    <span v-if="badgeText" class="mr-3 rounded-lg bg-blue-600 px-4 py-1 text-sm text-white">
      {{ badgeText }}
    </span>
    <span class="dark:text-gray-200">
      {{ text }}
    </span>
    <NuxtLink v-if="link" :href="link" target="_blank" class="text-blue ml-2 underline">
      {{ linkText }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { StackItem } from './data'

defineProps<{ item: StackItem }>()
</script>

<template>
  <div class="bg-gray-50 rounded-lg overflow-hidden transition-all ring-green-400 hover:scale-[103%] hover:ring-2 dark:bg-zinc-900 dark:ring-green-800">
    <div class="flex justify-between items-center gap-2 p-4 bg-green-400/20 dark:bg-green-800/30">
      <div class="flex items-center gap-2">
        <img v-if="typeof item.logoPath === 'string'" :src="item.logoPath" class="size-8">
        <template v-else>
          <img :src="item.logoPath.light" class="size-8 dark:hidden">
          <img :src="item.logoPath.dark" class="size-8 hidden dark:block">
        </template>
        <h1 class="text-xl font-semibold">
          {{ item.name }}
        </h1>
      </div>
    </div>

    <div class="p-4 text-sm">
      {{ item.description }}
    </div>
  </div>
</template>

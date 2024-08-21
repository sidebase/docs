<script lang="ts" setup>
import { ref } from 'vue'

defineProps<{ item: { question: string, answer: string } }>()

const isOpen = ref(false)
</script>

<template>
  <div class="pt-6">
    <dt>
      <button
        class="flex w-full items-start justify-between text-left"
        :class="{
          'text-gray-500 dark:text-gray-400': !isOpen,
          'text-gray-900 dark:text-white': isOpen,
        }"
        @click="isOpen = !isOpen"
      >
        <span class="text-base font-semibold leading-7">
          {{ item.question }}
        </span>
        <span class="ml-6 flex h-7 items-center">
          <span v-if="!isOpen" class="h-6 w-6"> + </span>
          <span v-else class="h-6 w-6"> - </span>
        </span>
      </button>
    </dt>
    <p
      v-if="isOpen"
      class="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300"
    >
      {{ item.answer }}
    </p>
  </div>
</template>

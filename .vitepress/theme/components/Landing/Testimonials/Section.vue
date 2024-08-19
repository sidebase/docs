<script lang="ts" setup>
import { testimonials } from './data'
</script>

<template>
  <h1 class="text-3xl font-semibold">
    What do others think of sidebase?
  </h1>
  <p class="text-base">
    The opinions of the community matter a lot to us! Have a look at what other developers have said about sidebase.
  </p>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    <div
      v-for="testimonial in testimonials"
      :key="testimonial.name"
      class="flex flex-col justify-between bg-zinc-50 p-4 rounded-lg border hover:border-zinc-400 transition-colors dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-500"
    >
      <p class="font-semibold">
        "{{ testimonial.text }}"
      </p>
      <div>
        <hr class="my-3 border-zinc-200 dark:border-zinc-700">
        <div class="flex items-center gap-2">
          <img :src="testimonial.avatar" class="ring-green-500 h-12 w-12 rounded-full p-1 ring-2 dark:ring-green-700" alt="Avatar">
          <div class="leading-3">
            <h1 class="text-lg text-gray-700 dark:text-gray-100">
              {{ testimonial.name }}
            </h1>
            <p v-if="testimonial.position" class="text-xs font-semibold text-gray-400">
              {{ testimonial.position }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

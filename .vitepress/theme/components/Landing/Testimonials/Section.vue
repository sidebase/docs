<script lang="ts" setup>
import XIcon from '../Icons/X.vue'
import GithubIcon from '../Icons/Github.vue'

import { testimonials } from './data'
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold">
      What do others think of <span class="GradientText">sidebase</span>?
    </h1>

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
            <div class="grow leading-3">
              <h1 class="text-lg text-gray-700 dark:text-gray-100">
                {{ testimonial.name }}
              </h1>
              <p v-if="testimonial.position" class="text-xs font-semibold text-gray-400">
                {{ testimonial.position }}
              </p>
            </div>
            <div class="flex items-center gap-1 self-end">
              <a
                v-if="testimonial.twitterLink"
                :href="testimonial.twitterLink"
                target="_blank"
                rel="noreferrer noopener"
                class="p-1 bg-green-300 rounded cursor-pointer hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-700"
              >
                <XIcon />
              </a>
              <a
                v-if="testimonial.githubLink"
                :href="testimonial.githubLink"
                target="_blank"
                rel="noreferrer noopener"
                class="p-1 bg-green-300 rounded cursor-pointer hover:bg-green-400 dark:bg-green-800 dark:hover:bg-green-700"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

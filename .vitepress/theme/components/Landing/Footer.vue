<script lang="ts" setup>
import GithubIcon from './Icons/Github.vue'
import XIcon from './Icons/X.vue'
</script>

<template>
  <footer class="border-t border-zinc-100 dark:border-zinc-800">
    <div class="mx-auto max-w-7xl py-6 md:flex md:items-center md:justify-between">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://github.com/sidebase" target="_blank">
          <span class="sr-only">Github</span>
          <GithubIcon />
        </a>
        <a href="https://x.com/sidebase_io" target="_blank">
          <span class="sr-only">X or Twitter</span>
          <XIcon />
        </a>
      </div>
      <div class="mt-8 text-zinc-600 dark:text-zinc-400 text-sm md:order-1 md:mt-0">
        <p>
          Developed by <a href="https://sidestream.tech" class="underline hover:text-zinc-500 dark:hover:text-zinc-300" target="_blank">SIDESTREAM</a>. Released under the MIT License.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import { Testimonial } from '../../types';
defineProps({
  testimonial: {
    type: Object as PropType<Testimonial>,
    required: true,
  },
})
</script>

<template>
  <div data-aos="fade-up">
    <div class="card group relative my-7 overflow-hidden rounded transition-all hover:scale-105">
      <div class="w-full pt-4 p-8 text-white">
        <p class="text-sidebase-green-900 dark:text-sidebase-green-400 py-3">
          "{{ testimonial.text }}"
        </p>
        <div class="flex w-full items-center space-x-3">
          <img
              :src="testimonial.avatar"
              class="ring-sidebase-green-800 h-14 w-14 rounded-full p-1 ring-2"
              alt="Bordered avatar"
          >
          <div>
            <h1 class="text-lg text-gray-700 dark:text-gray-100">
              {{ testimonial.name }}
              <span v-if="testimonial.position" class="text-xs text-gray-400">
                {{ testimonial.position }}
              </span>
            </h1>
            <div class="flex items-center space-x-2 text-gray-700 hover:text-sidebase-green-900 dark:text-white dark:hover:text-sidebase-green">
              <a v-if="testimonial.githubLink" :href="testimonial.githubLink" target="_blank">
                <Icon name="uil:github" size="18" />
              </a>
              <a v-if="testimonial.twitterLink" :href="testimonial.twitterLink" target="_blank">
                <Icon name="uil:twitter" size="18" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: 15px;
  transition: 0.5s;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
  inset -5px -5px 15px rgba(255, 255, 255, 0.05),
  5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.05);
}

@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }
  .card:hover {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.3),
    5px 5px 15px rgba(0, 0, 0, 0.8), -5px -5px 15px rgba(255, 255, 255, 0.4);
  }
}
</style>

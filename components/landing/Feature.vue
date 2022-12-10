<script setup lang="ts">
import type { PropType } from 'vue'
import type { Feature } from '~/types'
defineProps({
  feature: {
    type: Object as PropType<Feature>,
    required: true,
  },
})
</script>

<template>
  <div class="card px-5 py-6 h-full flex items-center">
    <div class="flex items-center space-x-3">
      <div class="iconShadow flex h-14 w-14 flex-none items-center justify-center rounded-full">
        <Icon :name="feature.icon" size="20" />
      </div>
      <p class="text-sidebase-green-900 dark:text-sidebase-green-400 text-lg">
        {{ feature.description }}
      </p>
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

.iconShadow {
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
  inset -5px -5px 15px rgba(255, 255, 255, 0.1),
  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.06);
  border-radius: 15px;
  transition: 0.5s;
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

<script setup lang="ts">
defineProps({
  name: String,
  icon: String,
  description: String,
  link: String,
})
</script>

<template>
  <NuxtLink :href="link">
    <div class="card flow-root rounded-lg px-8 pb-8 xl:h-[250px]">
      <div class="-mt-6">
        <div>
          <span class="inline-flex items-center justify-center rounded-xl bg-purple-400 dark:bg-purple-900 p-4 shadow-lg text-white">
            <Icon :name="icon" size="25" />
          </span>
        </div>
        <h3 class="mt-8 text-xl font-semibold leading-8 tracking-tight dark:text-gray-100">{{ name }}</h3>
        <p class="mt-2 text-base leading-7 dark:text-gray-400">
          {{ description }}
        </p>
      </div>
    </div>
  </NuxtLink>
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

.card:hover {
  @apply bg-purple-400/10 dark:bg-purple-700/10;
}

@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    transition: 0.5s;
  }

  .card:hover {
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.3),
    5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px rgba(255, 255, 255, 0.4);
  }
}
</style>

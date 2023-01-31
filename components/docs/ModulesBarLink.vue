<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: String,
  href: {
    type: String,
    required: true,
  },
  currentPageId: {
    type: String,
    required: true,
  },
})

const active = ref(props.currentPageId.includes(props.title))
</script>

<template>
  <NuxtLink
      :to="href"
      class="pt-1 pb-1.5 px-3 rounded-md cursor-pointer"
      :class="active ? 'bg-pickled-bluewood-700/60': 'hover:bg-pickled-bluewood-700/60'"
  >
    <div class="flex items-center gap-1 text-center">
      <div class="hidden md:block">
        <Icon :name="icon" />
      </div>
      <span>
        {{title}}
      </span>
    </div>
  </NuxtLink>
</template>

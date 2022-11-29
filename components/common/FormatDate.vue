<script setup lang="ts">
defineProps({
  date: {
    type: Date,
    required: true
  },
})
</script>

<template>
  <time :title="date.toDateString()">
    {{ date.getDate() }}.{{ date.getMonth() + 1 }}.{{ date.getFullYear() }}
  </time>
</template>

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
    {{ date.getMonth() + 1 }}.{{ date.getDate() }}.{{ date.getFullYear() }}
  </time>
</template>

<script lang="ts" setup>
import Card from './Card.vue'

import { stackItems } from './data'
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold">
      The sidebase stack
    </h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Card
        v-for="item in stackItems"
        :key="item.name"
        :item="item"
      />
    </div>
  </div>
</template>

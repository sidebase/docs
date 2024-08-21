<script lang="ts" setup>
import Card from './Card.vue'

import { stackItems } from './data'
</script>

<template>
  <div>
    <div class="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Card
        v-for="item in stackItems"
        :key="item.name"
        :item="item"
      />
    </div>
  </div>
</template>

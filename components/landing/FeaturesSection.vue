<script lang="ts" setup>
import features from '~/data/features'
import Feature from '~/components/landing/Feature.vue'
</script>

<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 place-content-stretch">
      <Feature v-for="feature in features" :feature="feature" :key="feature.description" />
    </div>
  </section>
</template>

<style scoped>
.AnimatedText {
  text-align: center;

  background: linear-gradient(to right, #eae9e9 20%, #FF0 40%, #FF0 60%, #eae9e9 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>

<script lang="ts" setup>
import features from '~/data/features'
import Feature from '~/components/landing/Feature.vue'
</script>

<template>
  <section>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 place-content-stretch">
      <Feature
          :feature="features[0]"
      />
      <Feature
          :feature="features[7]"
      />
      <Feature
          :feature="features[10]"
      />
      <Feature
          :feature="features[9]"
      />
      <Feature
          :feature="features[3]"
      />
      <Feature
          :feature="features[4]"
      />
      <Feature
          :feature="features[1]"
      />
      <Feature
          :feature="features[2]"
      />
      <Feature
          :feature="features[8]"
      />
      <Feature
          :feature="features[6]"
      />
      <Feature
          :feature="features[11]"
      />
      <Feature
          :feature="features[5]"
      />
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

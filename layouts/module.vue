<script setup lang="ts">
import ModulesBar from "~/components/docs/ModulesBar.vue";
</script>

<template>
  <div>
    <ModulesBar />
    <DocsPageContent>
      <slot />
    </DocsPageContent>
  </div>
</template>

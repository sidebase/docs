<script setup lang="ts">
import ModulesBar from "~/components/docs/ModulesBar.vue";
const { page } = useContent()
</script>

<template>
  <div>
    <div class="hidden md:flex">
      <ModulesBar :current-page-id="page._id" />
    </div>
    <div class="lg:h-[60px]" />
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>
  </div>
</template>

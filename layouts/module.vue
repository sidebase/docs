<script setup lang="ts">
import ModulesBar from "~/components/docs/ModulesBar.vue";
const { page } = useContent()
</script>

<template>
  <div>
    <ModulesBar :current-page-id="page._id" />
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>
  </div>
</template>

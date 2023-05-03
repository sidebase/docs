<script setup lang="ts">
import { ref } from 'vue'
import ModulesBar from "~/components/docs/ModulesBar.vue";
const { page } = useContent()

const versionDropdown = ref<boolean>(false)
const toggleVersionDropdown = () => {
    console.log(!versionDropdown.value)
    versionDropdown.value === true
}
</script>

<template>
  <div>
    <ModulesBar :current-page-id="page._id" />
    <DocsPageLayout>
      <slot />
    </DocsPageLayout>
  </div>
</template>
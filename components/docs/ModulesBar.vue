<script setup lang="ts">
import ModulesBarLink from "~/components/docs/ModulesBarLink.vue";

const props = defineProps({
  currentPageId: {
    type: String,
    required: true,
  },
})

const selectedVersionName = props.currentPageId.split(":")[2]
</script>

<template>
  <div class="sticky top-[64px] z-10">
    <div
      class="hidden md:grid bg-gray-100/50 dark:bg-pickled-bluewood-800/80 w-full pt-2 pb-2.5 place-items-center"
      style="backdrop-filter: var(--elements-backdrop-filter)"
  >
    <div class="flex items-center gap-2">
      <ModulesBarLink
          title="nuxt-auth"
          icon="heroicons-outline:lock-closed"
          href="/nuxt-auth"
          :current-page-id="currentPageId"
      />
      <ModulesBarLink
          title="nuxt-session"
          icon="heroicons-outline:clock"
          href="https://github.com/sidebase/nuxt-session/"
          :current-page-id="currentPageId"
      />
      <ModulesBarLink
          title="nuxt-parse"
          icon="heroicons-outline:funnel"
          href="/nuxt-parse"
          :current-page-id="currentPageId"
      />
      <ModulesBarLink
          title="nuxt-pdf"
          icon="heroicons-outline:document"
          href="/nuxt-pdf"
          :current-page-id="currentPageId"
      />
      </div>
  </div>

  <div v-if="currentPageId.includes(':v')" class="flex justify-center bg-orange-200 dark:bg-orange-700 py-2 text-xs font-bold">
    You are viewing the docs for {{ selectedVersionName }}. This is not the latest version.
  </div>
  <div v-else class="flex justify-center bg-700-200 dark:bg-green-700 py-2 text-xs font-bold">
    <p>
      You are viewing the docs for the newest version. You can view the docs for 0.5
      <NuxtLink to="/nuxt-auth/v0.5/getting-started" class="underline">
        here
      </NuxtLink>
    </p>
  </div>
  </div>
</template>

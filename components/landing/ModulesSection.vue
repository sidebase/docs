<script setup lang="ts">
import Module from "./Module.vue";
</script>

<template>
  <div class="grid xl:grid-cols-4 gap-10">
    <Module
      name="nuxt-auth"
      icon="heroicons-solid:lock-closed"
      link="/nuxt-auth"
      description="Nuxt user authentication and sessions via NextAuth.js."
    />
    <Module
        name="nuxt-session"
        icon="heroicons-solid:squares-plus"
        link="/nuxt-session"
        description="Nuxt session middleware to get a persistent session per app user, e.g., to store data across multiple requests."
    />
    <Module
        name="nuxt-parse"
        icon="heroicons-solid:funnel"
        link="/nuxt-parse"
        description="A nuxt focused package to make data validation and parsing easy."
    />
    <Module
        name="nuxt-pdf"
        icon="heroicons-solid:document"
        link="/nuxt-pdf"
        description="A nuxt focused package to quickly export html pages as a pdf."
    />
  </div>
</template>

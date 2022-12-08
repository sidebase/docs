<script setup lang="ts">
import Module from "./Module.vue";
</script>

<template>
  <div class="grid xl:grid-cols-3 gap-10">
    <Module
      name="nuxt-auth"
      icon="fa-lock"
      link="/nuxt-auth"
      description="Nuxt user authentication and sessions via NextAuth.js."
    />
    <Module
        name="nuxt-session"
        icon="fa-file"
        link="/nuxt-session"
        description="Nuxt session middleware to get a persistent session per app user, e.g., to store data across multiple requests."
    />
    <Module
        name="nuxt-parse"
        icon="fa-bolt"
        link="/nuxt-parse"
        description="A nuxt focused package to make data validation and parsing easy."
    />
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { frontmatter } = useData()
</script>

<template>
    <div v-if="frontmatter.layout === 'landing'">
        <h1>
            Test Landing Page
        </h1>
    </div>
    <DefaultTheme.Layout v-else />
</template>
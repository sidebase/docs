<script lang="ts">
import {VtText} from "@lehoczky/vue-termynal";

export default defineComponent({
  components: {VtText },
  props: {
    nextId: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      userInputModulesStep: 0
    }
  },
  watch: {
    nextId(nextId) {
      if (nextId === 'userInputModules') {
          this.userInputModulesStep = this.userInputModulesStep + 1
      }
    }
  }
})
</script>

<template>
  <div>
    <template :class="userInputModulesStep !== 4 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">Which modules would you like to use?</vt-text>
      <vt-text :lineDelay="0">Instructions:</vt-text>
      <vt-text :lineDelay="0"><span class="leftMarginLarge">↑/↓: Highlight option</span></vt-text>
      <vt-text :lineDelay="0"><span class="leftMarginLarge">←/→/[space]: Toggle selection</span></vt-text>
      <vt-text :lineDelay="0"><span class="leftMarginLarge">a: Toggle all</span></vt-text>
      <vt-text :lineDelay="0"><span class="leftMarginLarge">enter/return: Complete answer</span></vt-text>
    </template>

    <template :class="userInputModulesStep === 0 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">◯<span class="leftMargin"><span class="text-blue-300 underline">Prisma ORM</span><span class="font-bold text-gray-500 ml-2">- Next-generation Node.js and TypeScript ORM. See more: https://www.prisma.io/</span></span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">nuxt-auth</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">tRPC 10</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">Tailwind CSS</span></vt-text>
      <vt-text :lineDelay="750">◯<span class="leftMargin">Naive UI</span></vt-text>
      <vt-text id="userInputModules" :lineDelay="0" />
    </template>

    <template :class="userInputModulesStep === 1 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">◉<span class="leftMargin"><span class="text-blue-300 underline">Prisma ORM</span><span class="font-bold text-gray-500 ml-2">- Next-generation Node.js and TypeScript ORM. See more: https://www.prisma.io/</span></span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">nuxt-auth</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">tRPC 10</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">Tailwind CSS</span></vt-text>
      <vt-text :lineDelay="750">◯<span class="leftMargin">Naive UI</span></vt-text>
      <vt-text id="userInputModules" :lineDelay="0" />
    </template>

    <template :class="userInputModulesStep === 2 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">◉<span class="leftMargin">Prisma ORM</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin"><span class="text-blue-300 underline">nuxt-auth</span><span class="font-bold text-gray-500 ml-2">- Authentication via OAuth, Credentials and magic email flows. Wraps the popular NextAuth.js with 12k stars. See more: https://sidebase.io/nuxt-auth</span></span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">tRPC 10</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">Tailwind CSS</span></vt-text>
      <vt-text :lineDelay="750">◯<span class="leftMargin">Naive UI</span></vt-text>
      <vt-text id="userInputModules" :lineDelay="0" />
    </template>

    <template :class="userInputModulesStep === 3 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">◉<span class="leftMargin">Prisma ORM</span></vt-text>
      <vt-text :lineDelay="0">◉<span class="leftMargin"><span class="text-blue-300 underline">nuxt-auth</span><span class="font-bold text-gray-500 ml-2">- Authentication via OAuth, Credentials and magic email flows. Wraps the popular NextAuth.js with 12k stars. See more: https://sidebase.io/nuxt-auth</span></span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">tRPC 10</span></vt-text>
      <vt-text :lineDelay="0">◯<span class="leftMargin">Tailwind CSS</span></vt-text>
      <vt-text :lineDelay="750">◯<span class="leftMargin">Naive UI</span></vt-text>
      <vt-text id="userInputModules" :lineDelay="0" />
    </template>

    <template :class="userInputModulesStep === 4 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">✔ Which modules would you like to use? › Prisma ORM, nuxt-auth</vt-text>
    </template>
  </div>
</template>

<style>
.leftMargin {
  margin-left: 30px;
}

.leftMarginLarge {
  margin-left: 40px;
}
</style>

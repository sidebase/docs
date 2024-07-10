<script lang="ts">
import { defineComponent } from 'vue'
import { VtText } from '@lehoczky/vue-termynal'

export default defineComponent({
  components: { VtText },
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
    <template v-if="userInputModulesStep !== 4">
      <VtText :line-delay="0">
        Which modules would you like to use?
      </VtText>
      <VtText :line-delay="0">
        Instructions:
      </VtText>
      <VtText :line-delay="0">
        <span class="leftMarginLarge">↑/↓: Highlight option</span>
      </VtText>
      <VtText :line-delay="0">
        <span class="leftMarginLarge">←/→/[space]: Toggle selection</span>
      </VtText>
      <VtText :line-delay="0">
        <span class="leftMarginLarge">a: Toggle all</span>
      </VtText>
      <VtText :line-delay="0">
        <span class="leftMarginLarge">enter/return: Complete answer</span>
      </VtText>
    </template>

    <template v-if="userInputModulesStep === 0">
      <VtText :line-delay="0">
        ◯<span class="leftMargin"><span class="text-blue-300 underline">Prisma ORM</span><span class="font-bold text-gray-500 ml-2">- Next-generation Node.js and TypeScript ORM. See more: https://www.prisma.io/</span></span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">nuxt-auth</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">tRPC 10</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">Tailwind CSS</span>
      </VtText>
      <VtText :line-delay="750">
        ◯<span class="leftMargin">Naive UI</span>
      </VtText>
      <VtText id="userInputModules" :line-delay="0" />
    </template>

    <template v-if="userInputModulesStep === 1">
      <VtText :line-delay="0">
        ◉<span class="leftMargin"><span class="text-blue-300 underline">Prisma ORM</span><span class="font-bold text-gray-500 ml-2">- Next-generation Node.js and TypeScript ORM. See more: https://www.prisma.io/</span></span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">nuxt-auth</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">tRPC 10</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">Tailwind CSS</span>
      </VtText>
      <VtText :line-delay="750">
        ◯<span class="leftMargin">Naive UI</span>
      </VtText>
      <VtText id="userInputModules" :line-delay="0" />
    </template>

    <template v-if="userInputModulesStep === 2">
      <VtText :line-delay="0">
        ◉<span class="leftMargin">Prisma ORM</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin"><span class="text-blue-300 underline">nuxt-auth</span><span class="font-bold text-gray-500 ml-2">- Authentication via OAuth, Credentials and magic email flows. Wraps the popular NextAuth.js with 12k stars. See more: https://sidebase.io/nuxt-auth</span></span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">tRPC 10</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">Tailwind CSS</span>
      </VtText>
      <VtText :line-delay="750">
        ◯<span class="leftMargin">Naive UI</span>
      </VtText>
      <VtText id="userInputModules" :line-delay="0" />
    </template>

    <template v-if="userInputModulesStep === 3">
      <VtText :line-delay="0">
        ◉<span class="leftMargin">Prisma ORM</span>
      </VtText>
      <VtText :line-delay="0">
        ◉<span class="leftMargin"><span class="text-blue-300 underline">nuxt-auth</span><span class="font-bold text-gray-500 ml-2">- Authentication via OAuth, Credentials and magic email flows. Wraps the popular NextAuth.js with 12k stars. See more: https://sidebase.io/nuxt-auth</span></span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">tRPC 10</span>
      </VtText>
      <VtText :line-delay="0">
        ◯<span class="leftMargin">Tailwind CSS</span>
      </VtText>
      <VtText :line-delay="750">
        ◯<span class="leftMargin">Naive UI</span>
      </VtText>
      <VtText id="userInputModules" :line-delay="0" />
    </template>

    <template v-if="userInputModulesStep === 4">
      <VtText :line-delay="0">
        ✔ Which modules would you like to use? › Prisma ORM, nuxt-auth
      </VtText>
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

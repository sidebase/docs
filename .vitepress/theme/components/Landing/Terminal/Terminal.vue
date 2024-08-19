<script>
import { defineComponent } from 'vue'

import { VTermynal, VtInput, VtText } from '@lehoczky/vue-termynal'
import SheepIcon from './SheepIcon.vue'
import StackInputSelect from './StackInputSelect.vue'
import CiInputSelect from './CiInputSelect.vue'
import GitInputSelect from './GitInputSelect.vue'
import NPMInputSelect from './NPMInputSelect.vue'
import ModulesInputSelect from './ModulesInputSelect.vue'

export default defineComponent({
  components: {
    NPMInputSelect,
    GitInputSelect,
    CiInputSelect,
    StackInputSelect,
    ModulesInputSelect,
    VTermynal,
    VtInput,
    VtText,
    SheepIcon,
  },
  data() {
    return {
      nextId: undefined,
    }
  },
  mounted() {
    this.nextId = undefined
  },
  methods: {
    scrollToNewLine(line) {
      if (line.id === 'reset') {
        this.scrollToTop()
        return
      }
      if (line.id === 'no-scroll') {
        return
      }
      this.nextId = line.id

      const containerElement = this.$refs.container

      if (line.offsetTop - line.offsetHeight > containerElement.offsetHeight) {
        containerElement.scrollTo({
          top:
              line.offsetTop - line.offsetHeight - containerElement.offsetHeight + 100,
          behavior: 'smooth',
        })
      }
    },
    scrollToTop() {
      this.$refs.container.scrollTo({ top: 0 })
    },
  },
})
</script>

<template>
  <div class="group mt-10 lg:ml-12 lg:mt-8 relative h-[250px] lg:max-w-[600px] lg:h-[350px] overflow-hidden rounded-xl">
    <VTermynal
      class="AnimatedTerminal"
      :lazy="true"
      @before-new-line="scrollToNewLine($event)"
      @restart="scrollToTop()"
    >
      <div ref="container" class="line-container">
        <VtInput id="reset">
          npm create sidebase@latest
        </VtInput>
        <VtText :line-delay="0">
          <SheepIcon />
        </VtText>
        <VtText :line-delay="0">
          <DiamondSeparator />
        </VtText>
        <VtText :line-delay="0">
          Welcome to <span class="text-green-500 font-bold">sidebase v0.6.1!</span>
        </VtText>
        <VtText :line-delay="0">
          <DiamondSeparator />
        </VtText>
        <VtText :line-delay="0">
          sidebase helps you to create fully typesafe Nuxt 3 app in seconds!
        </VtText>
        <br>
        <VtText :line-delay="1000">
          What will your project be called? <span class="font-bold text-gray-500">my-first-sidebase-project</span>
        </VtText>
        <StackInputSelect :next-id="nextId" />
        <ModulesInputSelect :next-id="nextId" />
        <GitInputSelect :next-id="nextId" />
        <CiInputSelect :next-id="nextId" />
        <NPMInputSelect :next-id="nextId" />
        <br>
        <VtText :line-delay="0">
          <DiamondSeparator />
        </VtText>
        <VtText :line-delay="0">
          Now setting up <span class="text-green-500">my-first-sidebase-project</span>:
        </VtText>
        <VtText>✔ Adding Nuxt 3 merino-template</VtText>
        <VtText>✔ Adding Nuxt modules</VtText>
        <VtText>✔ Adding README</VtText>
        <br>
        <VtText :line-delay="0">
          <DiamondSeparator />
        </VtText>
        <VtText :line-delay="0">
          ✨ Project setup finished. Next steps are:
        </VtText>
        <VtText :line-delay="0">
          <span class="text-blue-500">> cd my-first-sidebase-project</span>
        </VtText>
        <VtText :line-delay="0">
          <span class="text-blue-500">> npm install</span>
        </VtText>
        <VtText :line-delay="0">
          <span class="text-blue-500">> npx prisma db push</span>
        </VtText>
        <VtText :line-delay="0">
          <span class="text-blue-500">> npx prisma generate</span>
        </VtText>
        <VtText :line-delay="0">
          <span class="text-blue-500">> npm run dev</span>
        </VtText>
        <br>
        <VtText :line-delay="0">
          Stuck? Join us at <span class="text-blue-500">https://discord.gg/auc8eCeGzx</span>
        </VtText>
        <br>
        <VtText :line-delay="0">
          🐑 So Long, and Thanks for ... using <span class="text-green-500">sidebase</span> to setup your application
        </VtText>
      </div>
    </VTermynal>

    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition grid place-items-center">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-white">
          Get started in one line!
        </h1>
        <h3 class="text-gray-50">
          Use our sidebase CLI to boostrap your project in minutes!
        </h3>
        <div class="flex items-center mt-4 space-x-2 mx-auto justify-center">
          <input
            value="npm create sidebase@latest"
            readonly
            class="bg-gray-800 rounded-lg px-4 py-1 text-white"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AnimatedTerminal {
  width: 100%;
  padding: 40px 10px 10px 10px;

  @apply text-xs;
}

.line-container {
  height: 300px;
  overflow: hidden;
}

@keyframes hideAnimation {
  to {
    visibility: hidden;
    width: 0;
    height: 0;
  }
}
</style>

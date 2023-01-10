<script>
import SheepIcon from "~/components/landing/terminal/SheepIcon.vue";
import DiamondSeparator from "~/components/landing/terminal/DiamondSeparator.vue";
import {VTermynal, VtInput, VtProgress, VtSpinner, VtText} from "@lehoczky/vue-termynal"
import ModulesInputSelect from "~/components/landing/terminal/lines/ModulesInputSelect.vue";
import StackInputSelect from "~/components/landing/terminal/lines/StackInputSelect.vue";
import CiInputSelect from "~/components/landing/terminal/lines/CiInputSelect.vue";
import GitInputSelect from "~/components/landing/terminal/lines/GitInputSelect.vue";
import NPMInputSelect from "~/components/landing/terminal/lines/NPMInputSelect.vue";

export default defineComponent({
  components: {
    NPMInputSelect,
    GitInputSelect,
    VtSpinner,
    CiInputSelect,
    StackInputSelect, ModulesInputSelect, VTermynal, VtInput, VtProgress, VtText, SheepIcon, DiamondSeparator },
  data() {
    return {
      nextId: undefined
    }
  },
  methods: {
    scrollToNewLine(line) {
      if (line.id === 'no-scroll') {
        return;
      }
      this.nextId = line.id

      const containerElement = this.$refs.container

      if (line.offsetTop - line.offsetHeight > containerElement.offsetHeight) {
        containerElement.scrollTo({
          top:
              line.offsetTop - line.offsetHeight - containerElement.offsetHeight + 100,
          behavior: "smooth",
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
  <div data-aos="fade-up" data-aos-delay="100" class="relative w-full">
    <v-termynal
        @before-new-line="scrollToNewLine($event)"
        @restart="scrollToTop()"
        class="AnimatedTerminal"
    >
      <div ref="container" class="line-container">
        <vt-input>npm create sidebase@latest</vt-input>
        <vt-text :lineDelay="0">
          <SheepIcon />
        </vt-text>
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">Welcome to <span class="text-green-500 font-bold">sidebase v0.3.0!</span></vt-text>
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">sidebase helps you to create fully typesafe Nuxt 3 app in seconds!</vt-text>
        <br />
        <vt-text :lineDelay="1000">What will your project be called? <span class="font-bold text-gray-500">my-first-sidebase-project</span></vt-text>
        <StackInputSelect :next-id="nextId" />
        <ModulesInputSelect :next-id="nextId" />
        <GitInputSelect :next-id="nextId" />
        <CiInputSelect :next-id="nextId" />
        <NPMInputSelect :next-id="nextId" />
        <br />
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">Now setting up <span class="text-green-500">my-first-sidebase-project</span>:</vt-text>
        <vt-text>✔ Adding Nuxt 3 merino-template</vt-text>
        <vt-text>✔ Adding Nuxt modules</vt-text>
        <br />
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">✨ Project setup finished. Next steps are:</vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> cd my-first-sidebase-project</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npm install</span></vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-500">> npm run dev</span></vt-text>
        <br />
        <vt-text :lineDelay="0">Stuck? Join us at <span class="text-blue-500">https://discord.gg/auc8eCeGzx</span></vt-text>
        <br />
        <vt-text :lineDelay="0">🐑 So Long, and Thanks for ... using <span class="text-green-500">sidebase</span> to setup your application</vt-text>
      </div>
    </v-termynal>
  </div>
</template>

<style scoped>
.AnimatedTerminal {
  width: 100%;
  padding: 40px 20px 20px 20px;
  font-size: 16px;
}

.line-container {
  height: 600px;
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

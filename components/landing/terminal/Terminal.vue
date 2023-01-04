<script>
import SheepIcon from "~/components/landing/terminal/SheepIcon.vue";
import DiamondSeparator from "~/components/landing/terminal/DiamondSeparator.vue";
import { VTermynal, VtInput, VtProgress, VtText } from "@lehoczky/vue-termynal"

export default defineComponent({
  components: { VTermynal, VtInput, VtProgress, VtText, SheepIcon, DiamondSeparator },
  methods: {
    scrollToNewLine(line) {
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
        restart-button
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
        <vt-text :lineDelay="0">What will your project be called?</vt-text>
        <vt-input>my-first-sidebase-project</vt-input>
        <br />
        <vt-text :lineDelay="0">What stack would you like to use for your new project?</vt-text>
        <vt-text :lineDelay="0"><span class="text-blue-300">❯&nbsp;&nbsp;<span class="underline">Merino</span></span></vt-text>
        <vt-text>&nbsp;&nbsp;&nbsp;Cheviot</vt-text>
        <br />
        <vt-text :lineDelay="0">Which modules would you like to use?</vt-text>
        <vt-text :lineDelay="0">◯&nbsp;&nbsp;Prisma ORM</vt-text>
        <vt-text :lineDelay="0">◯&nbsp;&nbsp;nuxt-auth</vt-text>
        <vt-text :lineDelay="0">◯&nbsp;&nbsp;tRPC 10</vt-text>
        <vt-text :lineDelay="0">◯&nbsp;&nbsp;Tailwind CSS</vt-text>
        <vt-text>◯&nbsp;&nbsp;Naive UI</vt-text>
        <br />
        <vt-text :lineDelay="0">Initialize a new git repository? <span class="text-gray-500">› (Y/n)</span></vt-text>
        <vt-input>Yes</vt-input>
        <br />
        <vt-text :lineDelay="0">Initialize a default CI pipeline?</vt-text>
        <vt-text :lineDelay="0">◯&nbsp;&nbsp;No CI</vt-text>
        <vt-text>◯&nbsp;&nbsp;GitHub Actions</vt-text>
        <br />
        <vt-text :lineDelay="0">Would you like to run `npm install` after finishing up? <span class="text-gray-500">› (Y/n)</span></vt-text>
        <vt-input>Yes</vt-input>
        <br />
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">Now setting up <span class="text-green-500">my-first-sidebase-project</span>:</vt-text>
        <vt-text>✔ Adding Nuxt 3 merino-template</vt-text>
        <vt-text>✔ Adding Nuxt modules</vt-text>
        <vt-text>✔ Adding README</vt-text>
        <br />
        <vt-text :lineDelay="0"><DiamondSeparator /></vt-text>
        <vt-text :lineDelay="0">Running <span class="text-blue-300">npm install</span>:</vt-text>
        <vt-progress />
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
  border-radius: 8px;
  font-size: 16px;
}

.line-container {
  height: 600px;
  overflow: hidden;
}
</style>

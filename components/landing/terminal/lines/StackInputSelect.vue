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
      modulesInputSelect: 0
    }
  },
  watch: {
    nextId(nextId) {
      if (nextId === 'userInputStack') {
          this.modulesInputSelect = this.modulesInputSelect + 1
      }
    }
  }
})
</script>

<template>
  <div>
    <template :class="modulesInputSelect === 0 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">? What stack would you like to use for your new project? More information: https://sidebase.io/sidebase/welcome/stacks › - Use arrow-keys. Return to submit.</vt-text>
      <vt-text :lineDelay="0"><span class="text-blue-300">❯<span class="underline leftMargin">Merino</span></span><span class="font-bold text-gray-500 ml-2">- A modular stack that let's you choose configuration and modules</span></vt-text>
      <vt-text><span class="leftMarginLarge">Cheviot</span></vt-text>
      <vt-text id="userInputStack" :lineDelay="0" />
    </template>

    <template :class="modulesInputSelect === 1 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">✔ What stack would you like to use for your new project? More information: https://sidebase.io/sidebase/welcome/stacks › Merino</vt-text>
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

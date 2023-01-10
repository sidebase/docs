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
      userInputCI: 0
    }
  },
  watch: {
    nextId(nextId) {
      if (nextId === 'userInputCI') {
          this.userInputCI = this.userInputCI + 1
      }
    }
  }
})
</script>

<template>
  <div>
    <template :class="userInputCI === 0 ? 'block': 'hidden'">
      <vt-text id="no-scroll" :lineDelay="0">? Initialize a default CI pipeline? › - Use arrow-keys. Return to submit.</vt-text>
      <vt-text id="no-scroll" :lineDelay="0"><span class="text-blue-300">❯<span class="underline leftMargin">No CI</span></span><span class="font-bold text-gray-500 ml-2">- Scaffold a project without any CI pipeline</span></vt-text>
      <vt-text id="no-scroll"><span class="leftMarginLarge">GitHub Actions</span></vt-text>
      <vt-text id="userInputCI" :lineDelay="0" />
    </template>

    <template :class="userInputCI === 1 ? 'block': 'hidden'">
      <vt-text :lineDelay="0">✔ Initialize a default CI pipeline? › No CI</vt-text>
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

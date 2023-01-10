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
      userInputGit: 0
    }
  },
  watch: {
    nextId(nextId) {
      if (nextId === 'userInputGit') {
          this.userInputGit = this.userInputGit + 1
      }
    }
  }
})
</script>

<template>
  <div>
    <template :class="userInputGit === 0 ? 'block': 'hidden'">
      <vt-text id="no-scroll">? Initialize a new git repository? <span class="text-gray-500">› (Y/n)</span></vt-text>
      <vt-text id="userInputGit" :lineDelay="0" />
    </template>

    <template :class="userInputGit === 1 ? 'block': 'hidden'">
      <vt-text id="no-scroll" :lineDelay="0">✔ Initialize a new git repository? … yes</vt-text>
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

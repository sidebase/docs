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
    <template :class="userInputCI === 0 ? 'block' : 'hidden'">
      <VtText id="no-scroll" :line-delay="0">
        ? Initialize a default CI pipeline? › - Use arrow-keys. Return to submit.
      </VtText>
      <VtText id="no-scroll" :line-delay="0">
        <span class="text-blue-300">❯<span class="underline leftMargin">No CI</span></span><span class="font-bold text-gray-500 ml-2">- Scaffold a project without any CI pipeline</span>
      </VtText>
      <VtText id="no-scroll">
        <span class="leftMarginLarge">GitHub Actions</span>
      </VtText>
      <VtText id="userInputCI" :line-delay="0" />
    </template>

    <template :class="userInputCI === 1 ? 'block' : 'hidden'">
      <VtText :line-delay="0">
        ✔ Initialize a default CI pipeline? › No CI
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

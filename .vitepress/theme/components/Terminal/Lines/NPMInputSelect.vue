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
      userInputNPM: 0
    }
  },
  watch: {
    nextId(nextId) {
      if (nextId === 'userInputNPM') {
        this.userInputNPM = this.userInputNPM + 1
      }
    }
  }
})
</script>

<template>
  <div>
    <template :class="userInputNPM === 0 ? 'block' : 'hidden'">
      <VtText>? Would you like to run `npm install` after finishing up? <span class="text-gray-500">› (Y/n)</span></VtText>
      <VtText id="userInputNPM" :line-delay="0" />
    </template>

    <template :class="userInputNPM === 1 ? 'block' : 'hidden'">
      <VtText :line-delay="0">
        ✔ Would you like to run `npm install` after finishing up? … no
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

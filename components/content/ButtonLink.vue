<script setup lang="ts">
defineProps({
  blank: {
    type: Boolean,
    required: false,
    default: false
  },
  href: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <NuxtLink class="ButtonLink" :to="href" :target="blank ? '_blank' : undefined">
    <Icon v-if="icon" :name="icon" />
    <ContentSlot :use="$slots.default" unwrap="p ul li" />
  </NuxtLink>
</template>

<style scoped>
.ButtonLink {
  position: relative;
  padding: 0.1rem 1.5rem;
  line-height: 3rem;
  font-weight: bold;
  color: white;
  background-image: linear-gradient(160deg, #059669, #059669);
  border-radius: 0.75rem;
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.6s;
}
.ButtonLink:hover {
  box-shadow: 0 0 60px 2px #059669, 0.5rem 0.5rem 30px #059669;
}
.ButtonLink:after {
  content: '';
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  left: 2px;
  border-radius: 0.75rem;
  pointer-events: none;
}

@media (prefers-color-scheme: dark) {
  .ButtonLink {
    box-shadow: 0 0 0 0 #064e3b, 0.5rem 0.5rem 30px #13092d;
  }
  .ButtonLink:hover {
    box-shadow: 0 0 60px 2px #059669, 0.5rem 0.5rem 30px #059669;
  }
  .ButtonLink:after {
    background-image: linear-gradient(170deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
  }
}
</style>

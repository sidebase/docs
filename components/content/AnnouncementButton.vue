<script setup>
defineProps({
  to: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'heroicons-solid:bolt'
  }
})
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="AnnouncementButton">
    <Icon :name="icon" />
    <span class="font-medium text-sm">{{ label }}</span>
  </NuxtLink>
  <div v-else class="AnnouncementButton cursor-default">
    <Icon :name="icon" />
    <span class="font-medium text-sm">{{ label }}</span>
  </div>
</template>

<style scoped>
.AnnouncementButton {
  display: flex;
  font-size: 15px;
  border: solid #0B9A71 2px;
  padding: 10px 14px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;
  max-width: fit-content;
  color: #1e5042;
  transition: all 300ms ease-in-out;

  @apply mx-auto lg:mx-0;
}

.AnnouncementButton:hover {
  background-color: rgba(11, 154, 113);
  color: white;
  box-shadow: 0 0 20px 2px rgba(5, 150, 105, 0.74), 0.2rem 0.2rem 10px rgba(5, 150, 105, 0.64);
}

@media (prefers-color-scheme: dark) {
  .AnnouncementButton {
    box-shadow: 0 0 0 0 #064e3b, 0.5rem 0.5rem 30px #13092d;
    border: solid #0B9A71 2px;
    color: #5BF3C7;
  }

  .AnnouncementButton:hover {
    background-color: rgba(11, 154, 113, 0.6);
    color: white;
    box-shadow: 0 0 20px 2px rgba(5, 150, 105, 0.74), 0.2rem 0.2rem 10px rgba(5, 150, 105, 0.64);
  }
}

.AnnouncementButton span {
  margin-left: 5px;
  font-weight: 500;
  letter-spacing: 0.01rem;
}
</style>

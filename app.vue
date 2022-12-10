<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<style>
nav {
  @apply hidden lg:block
}

.container {
  @apply max-w-[90rem] !important;
}

.aside-nav {
  @apply xl:pr-[20px] !important;
}

.SidebaseContainer {
  max-width: 90rem;
  margin: auto auto 5rem;

  @apply px-12 xl:px-0;
}
</style>

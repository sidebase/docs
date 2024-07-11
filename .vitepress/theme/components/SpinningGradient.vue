<template>
  <div class="relative overflow-x-clip">
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="max-w-5xl mx-auto">
      <div
        class="SpinAnimation absolute w-[400px] h-[400px] left-[15%] top-[170px] bg-green-300 dark:bg-green-700 rounded-full"
      />
      <div
        class="SpinAnimation absolute w-[400px] h-[400px] left-[50%] top-[150px] bg-blue-300 dark:bg-blue-700 rounded-full"
        style="animation-duration: 10000ms"
      />
      <div
        class="SpinAnimation absolute w-[400px] h-[400px] right-[50%] top-[150px] bg-pink-400 dark:bg-pink-700 rounded-full"
        style="animation-direction: reverse; animation-duration: 8000ms"
      />
      <div
        class="SpinAnimation absolute w-[400px] h-[400px] right-[15%] top-[170px] bg-yellow-400 dark:bg-yellow-700 rounded-full"
        style="animation-direction: reverse; animation-duration: 10000ms"
      />
    </div>
  </div>
</template>

<style scoped>
.SpinAnimation {
  animation: linear 7000ms spin infinite;
  transform-origin: center 35% 0;
  filter: blur(80px);
  opacity: 60%;
}

@keyframes spin {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
</style>

<script setup>
import ModulesSection from "../components/landing/ModulesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
</script>

<template>
  <div class="relative">
    <div class="absolute top-0 right-0 select-none">
      <img src="/green-blur.png" />
    </div>
    <div class="absolute top-[80vh] left-0 select-none">
      <img class="w-[100vw]" src="/purple-blur.webp" />
    </div>
    <div class="Landing relative">
      <article id="top-section">
        <slot />
      </article>
      <section class="pb-6">
        <div class="Heading">
          <h1>
            What is <span class="GradientText">sidebase</span>?
          </h1>
          <p>
            sidebase is a production ready Nuxt 3 starter template. Through the integration with our own modules, we ensure you can start developing quickly and efficiently.
          </p>
        </div>
        <FeaturesSection />
      </section>
      <section class="py-6">
        <div class="Heading">
          <h1>
            Our amazing <span class="GradientText">modules</span>!
          </h1>
          <p>
            Together with our main starter, we focus on developing high quality, developer experienced oriented Nuxt 3 modules.
          </p>
        </div>
        <ModulesSection />
      </section>
      <section class="py-6">
        <div class="Heading">
          <h1>
            What do others think of <span class="GradientText">sidebase</span>?
          </h1>
          <p>
            The opinions of the community matter a lot to us! Have a look at what other developers have said about sidebase.
          </p>
        </div>
        <TestimonialsSection />
      </section>
    </div>
  </div>
</template>

<style scoped>
.Landing {
  max-width: 80rem;
  margin: auto auto 5rem;

  @apply mx-10 lg:mx-auto;
}

.Heading {
  margin: 100px 0 50px 0;
}

.Heading h1 {
  font-size: 3rem;
  font-weight: bold;
}

.Heading p {
  max-width: 50rem;
  font-size: 1.3rem;
}

.GradientText {
  background: linear-gradient(to right, #81F6D4 10%, #12a87b 40%, #0FCF97 60%, #81F6D4 90%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>
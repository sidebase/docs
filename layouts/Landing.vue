<script setup>
import ModulesSection from "../components/landing/ModulesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Banner from "~/components/landing/Banner.vue";
</script>

<template>
  <div class="relative">
    <div class="absolute top-0 right-0 select-none">
      <NuxtImg src="/green-blur.png" />
    </div>
    <div class="absolute top-[80vh] left-0 select-none">
      <NuxtImg class="w-[100vw] hidden dark:block" src="/purple-blur.webp" />
    </div>
    <div class="absolute bottom-[-6.9vh] left-0 select-none">
      <NuxtImg class="w-[100vw] opacity-20 dark:opacity-50" src="/glow-bottom.webp" />
    </div>

    <Banner
        badge-text="We are hiring!"
        text="Are you interested in working on sidebase?"
        link="https://sidestream.jobs.personio.de/"
        link-text="See our open positions!"
    />

    <div class="SidebaseContainer relative">
      <article id="top-section">
        <slot />
      </article>
      <section class="pb-6">
        <div class="Heading">
          <h1>
            What is <span class="GradientText">sidebase</span>?
          </h1>
          <p>
            sidebase is a production ready Nuxt 3 starter template. By hand picking battle tested modules and packages we provide a full-stack application base with amazing developer experience!
          </p>
        </div>
        <FeaturesSection />
      </section>
      <section class="py-6">
        <div class="Heading">
          <h1>
            Our amazing <span class="GradientTextPurple">modules</span>!
          </h1>
          <p>
            Together with our main starter, we focus on developing high quality, developer experienced oriented Nuxt 3 modules.
          </p>
        </div>
        <ModulesSection />
      </section>
      <section class="pt-6">
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
  background: linear-gradient(to right, #7bceb6 10%, #12a87b 40%, #0FCF97 60%, #7bceb6 90%);
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

.GradientTextPurple {
  background: linear-gradient(to right, #95b4ab 10%, #8136d4 40%, #9881e6 60%, #95b4ab 90%);
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

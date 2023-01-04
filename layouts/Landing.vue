<script setup>
import ModulesSection from "../components/landing/ModulesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Banner from "~/components/landing/Banner.vue";
import AOS from "aos";
import Terminal from "~/components/landing/terminal/Terminal.vue";

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div class="relative">
    <Banner
        badge-text="We are hiring!"
        text="Are you interested in working on sidebase?"
        link="https://sidestream.jobs.personio.de/"
        link-text="See our open positions!"
    />

    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-28">

        <div class="max-w-6xl mx-auto text-center">
          <h1 class="StaticGradientText text-8xl font-bold">
            sidebase
          </h1>
          <h2 class="text-6xl font-semibold text-white">
            The productive way to start building fullstack Nuxt 3 applications.
          </h2>
          <h3 class="text-xl mt-8">
            sidebase is a web app development kit to build production ready fullstack apps quickly. We build sidebase to provide a modular, modern, fully-typed and best-practice approach to make your ideas a reality. Around a core of TypeScript and Nuxt 3 sidebase adds components like Prisma ORM, tRPC, Authentication, CI, testing and more.
          </h3>
        </div>

        <div class="max-w-5xl mx-auto relative mt-24">
          <div data-aos="fade-up" data-aos-duration="1000" >
            <div
                class="SpinAnimation absolute w-[300px] h-[300px] left-[-100px] top-[70px] bg-green-700 rounded-full"
            />
            <div
                class="SpinAnimation absolute w-[300px] h-[300px] left-[50%] bg-blue-700 rounded-full"
                style="animation-duration: 10000ms"
            />
            <div
                class="SpinAnimation absolute w-[300px] h-[300px] right-[50%] bg-pink-700 rounded-full"
                style="animation-direction: reverse; animation-duration: 8000ms"
            />
            <div
                class="SpinAnimation absolute w-[300px] h-[300px] right-[-100px] top-[150px] bg-yellow-700 rounded-full"
                style="animation-direction: reverse; animation-duration: 10000ms"
            />
          </div>

          <Terminal />
        </div>
      </section>
      <section class="pb-6">
        <div class="SidebaseContainer">
          <div class="Heading">
            <h1>
              What is <span class="GradientText">sidebase</span>?
            </h1>
            <p>
              sidebase is a web development kit to build production ready fullstack Nuxt 3 apps quickly. By hand picking battle tested modules and packages we provide a full-stack application base with amazing developer- and user-experience!
            </p>
          </div>
          <FeaturesSection />
        </div>
      </section>
      <section class="relative py-6" data-aos="fade-up">
        <div class="absolute xl:top-[-300px] 2xl:top-[-500px] left-0 select-none">
          <NuxtImg class="w-[100vw] hidden dark:block" src="/purple-blur.webp" alt="Background Image" />
        </div>
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              Our amazing <span class="GradientTextPurple">modules</span>!
            </h1>
            <p>
              Together with our main starter, we focus on developing high quality, developer experienced oriented Nuxt 3 modules.
            </p>
          </div>
          <ModulesSection />
        </div>
      </section>
      <section class="relative pt-6" data-aos="zoom-up">
        <div class="absolute bottom-[-8vh] left-0 select-none">
          <NuxtImg class="w-[100vw] opacity-20 dark:opacity-50" src="/glow-bottom.webp" alt="Background Image" />
        </div>
        <div class="relative SidebaseContainer">
          <div class="Heading">
            <h1>
              What do others think of <span class="GradientText">sidebase</span>?
            </h1>
            <p>
              The opinions of the community matter a lot to us! Have a look at what other developers have said about sidebase.
            </p>
          </div>
          <TestimonialsSection />
        </div>
      </section>
      <Banner
          text="Are you interested in enterprise solutions?"
          link="https://www.sidestream.tech/en/contact"
          link-text="Contact us here!"
      />
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

.StaticGradientText {
  background: linear-gradient(to right, #81F6D4 10%, #12a87b 40%, #0FCF97 60%, #81F6D4 90%);
  background-size: 200% auto;
  background-position: 60% center;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

.SpinAnimation {
  animation: linear 7000ms spin infinite;
  transform-origin: center 35% 0;
  filter: blur(80px);
  opacity: 75%;
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

<script setup>
import ModulesSection from "../components/landing/ModulesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import AOS from "aos";
import Terminal from "~/components/landing/terminal/Terminal.vue";

onMounted(() => {
  AOS.init()
})
</script>

<template>
  <div class="relative">
    <div class="relative">
      <section class="relative w-full min-h-[96vh] mt-20">

        <div class="max-w-5xl mx-auto text-center px-5 lg:px-0">
          <h1 class="StaticGradientText text-6xl lg:text-7xl font-bold">
            sidebase
          </h1>
          <h2 class="text-3xl  lg:text-5xl font-bold dark:text-white px-4">
            The productive way to build fullstack Nuxt 3 applications.
          </h2>
          <h3 class="text-lg mt-8 text-gray-800 dark:text-gray-400">
            sidebase is a web app development kit to build production ready fullstack apps quickly. We build sidebase to provide a modular, modern, fully-typed and best-practice approach to make your ideas a reality. Around a core of TypeScript and Nuxt 3 sidebase adds components like Prisma ORM, tRPC, Authentication, CI, testing and more!
          </h3>
        </div>

        <div class="relative mx-auto flex items-center space-x-5 w-full justify-center mt-5 px-5 lg:px-0">
          <ButtonLink href="/sidebase/welcome">
            Get started →
          </ButtonLink>
          <NuxtLink href="https://github.com/sidebase/sidebase" target="_blank" class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-bold">
            Star us on Github
          </NuxtLink>
        </div>

        <div class="relative mt-10 lg:mt-24 overflow-x-clip">
          <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" class="max-w-5xl mx-auto">
            <div
                class="SpinAnimation absolute w-[400px] h-[400px] left-[-100px] top-[70px] bg-green-700 rounded-full"
            />
            <div
                class="SpinAnimation absolute w-[400px] h-[400px] left-[50%] bg-blue-700 rounded-full"
                style="animation-duration: 10000ms"
            />
            <div
                class="SpinAnimation absolute w-[400px] h-[400px] right-[50%] bg-pink-700 rounded-full"
                style="animation-direction: reverse; animation-duration: 8000ms"
            />
            <div
                class="SpinAnimation absolute w-[400px] h-[400px] right-[-100px] top-[150px] bg-yellow-700 rounded-full"
                style="animation-direction: reverse; animation-duration: 10000ms"
            />
          </div>

          <div class="max-w-5xl px-5 lg:px-0 mx-auto ">
            <div class="relative group rounded-lg overflow-hidden">
              <Terminal />
              <div class="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-100 group-hover:bg-black/50 transition grid place-items-center">
                <div class="text-center">
                  <h1 class="text-4xl font-bold text-white">
                    Get started in one line!
                  </h1>
                  <h3>
                    Use our sidebase CLI to boostrap your project in minutes!
                  </h3>
                  <div class="flex items-center mt-4 space-x-2 mx-auto justify-center">
                    <span class="bg-black rounded-lg px-4 py-1 text-white">
                      npm create sidebase@latest
                    </span>
                    <CopyButton content="npm create sidebase@latest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div class="absolute bottom-[-8.2vh] left-0 select-none">
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
      <div class="dark:bg-pickled-bluewood-900">
        <div class="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            In need of a consultant?<br />Reach out and we can arrange a call! 
          </h2>
          <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a href="mailto:nils@sidestream.tech" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Send us an email!
            </a>
            <a href="https://www.sidestream.tech/" target="_blank" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Visit website <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
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

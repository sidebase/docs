<script setup lang="ts">
import TerminalLine from "~/components/landing/terminal/TerminalLine.vue";
import SheepIcon from "~/components/landing/terminal/SheepIcon.vue";
import DiamondSeparator from "~/components/landing/terminal/DiamondSeparator.vue";
</script>

<template>
  <div data-aos="fade-up" class="relative h-[550px] bg-gray-900 w-full rounded-lg shadow px-4 py-5 font-mono leading-tight overflow-y-auto">
    <TerminalLine>
      $ npm create sidebase@latest
    </TerminalLine>
    <SheepIcon />
    <DiamondSeparator />
    <TerminalLine>
      Welcome to <span class="text-green-500">sidebase v0.3.0!</span>
    </TerminalLine>
    <br />
    <DiamondSeparator />
    <TerminalLine>
      sidebase helps you to create fully typesafe Nuxt 3 app in seconds: <span class="text-blue-400">https://sidebase.io/sidebase</span>
    </TerminalLine>
    <br />
    <DiamondSeparator />
    <TerminalLine>
      Let's get started:
    </TerminalLine>
    <TerminalLine>
      ? What will your project be called? › my-sidebase-affair
    </TerminalLine>
  </div>
</template>


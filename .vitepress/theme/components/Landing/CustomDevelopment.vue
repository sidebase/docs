<template>
  <div class="relative isolate overflow-hidden border border-gray-300 dark:border-gray-800 bg-blue-50 dark:bg-gray-900 rounded-3xl px-6 py-10 sm:px-10">
    <img class="absolute top-0 right-0 opacity-15 dark:opacity-30 h-full py-12 px-10 pointer-events-none" src="/sidestream.svg">

    <h2 class="relative max-w-2xl text-2xl font-bold tracking-tight md:text-4xl">
      In need of a consultant?
    </h2>
    <p class="relative max-w-xl md:text-lg leading-8">
      Reach out and we can arrange a call!
    </p>
    <div class="relative mt-5 flex items-center gap-x-6">
      <a href="mailto:nils@sidestream.tech" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Send us an email!
      </a>
      <a href="https://www.sidestream.tech/" target="_blank" class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Visit website <span aria-hidden="true">→</span></a>
    </div>
    <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
      <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
      <defs>
        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
          <stop stop-color="#7775D6" />
          <stop offset="1" stop-color="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>

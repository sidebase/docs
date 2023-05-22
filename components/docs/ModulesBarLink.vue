<script setup lang="ts">
import VERSIONS, { getLatestVersion } from '~/data/versions'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  currentPageId: {
    type: String,
    required: true,
  },
})

const active = ref(props.currentPageId.includes(props.title))
const versions = VERSIONS[props.title] || {}
const selectedVersionName = props.currentPageId.split(":")[2].includes('v') ? props.currentPageId.split(":")[2] : undefined
</script>

<template>
  <div>
    <div class="dropdown">
      <NuxtLink :to="href" >
        <button 
          class="px-3 rounded-md cursor-pointer py-1.5"
          :class="active ? 'bg-gray-200 dark:bg-pickled-bluewood-700/60': 'hover:bg-gray-200 dark:hover:bg-pickled-bluewood-700/60'"
        >
          <div class="flex items-center space-x-0.5 text-center">
            <div class="hidden md:block mr-1">
              <Icon :name="icon" />
            </div>
            <span class="pt-[1px]">
              {{title}}
              <span v-if="active">
                ({{ selectedVersionName || 'Latest' }})
              </span>
            </span>
            <div v-if="Object.values(versions).length > 0">
              <Icon name="ic:outline-keyboard-arrow-down" />
            </div>
          </div>
        </button>
      </NuxtLink>
      <nav v-if="Object.values(versions).length > 0" tabindex="2" class="bg-gray-200 dark:bg-pickled-bluewood-700 w-[225px] rounded-md">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li v-for="versionName in Object.keys(versions)" :key="versionName">
            <NuxtLink :to="versions[versionName].link" class="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white flex items-center justify-between">
              v.{{ versionName }}
              <span v-if="versions[versionName].latest" class="bg-green-200 text-green-900 text-xs font-medium px-1.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Latest
              </span>
              <span v-if="versions[versionName].preRelease" class="bg-blue-200 text-blue-900 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Pre-release
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
	 position: relative;
}
 .dropdown nav {
   display: block !important;
	 position: absolute;
	 top: 100%;
	 left: 0;
	 opacity: 0;
	 visibility: hidden;
	 transition: 300ms all;
   z-index: 99999;
}
 .dropdown:hover nav {
	 opacity: 1;
	 visibility: visible;
	 transform: translateY(0.25rem);
}
</style>

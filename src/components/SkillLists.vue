<script setup lang="ts">
import {
  mdiAws,
  mdiDatabase,
  mdiDocker,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiNuxt,
  mdiStar,
  mdiTailwind,
  mdiVuejs,
  mdiVuetify,
} from '@mdi/js';

const skills = [
  { icon: mdiVuejs, title: 'Vue.js', rating: 4, color: '#41b883' },
  { icon: mdiNuxt, title: 'NuxtJS', rating: 5, color: '#00DC82' },
  { icon: mdiVuetify, title: 'Vuetify', rating: 5, color: '#7BC6FF' },
  { icon: mdiTailwind, title: 'TailwindCSS', rating: 3, color: '#38bdf8' },
  { icon: mdiLanguageHtml5, title: 'HTML/CSS', rating: 4, color: '#e44d26' },
  {
    icon: mdiLanguageJavascript,
    title: 'JavaScript',
    rating: 3,
    color: '#f0db4f',
  },
  {
    icon: mdiLanguageTypescript,
    title: 'TypeScript',
    rating: 3,
    color: '#007acc',
  },
  {
    icon: mdiLanguagePython,
    title: 'Python',
    rating: 3,
    color: '#306998',
  },
  {
    icon: mdiLanguageJava,
    title: 'Java/Spring',
    rating: 5,
    color: '#f89820',
  },
  {
    icon: mdiDatabase,
    title: 'SQL',
    rating: 2,
    color: '#bae6fd',
  },
  {
    icon: mdiDocker,
    title: 'Docker',
    rating: 3,
    color: '#0db7ed',
  },
  {
    icon: mdiAws,
    title: 'AWS',
    rating: 3,
    color: '#ff9900',
  },
];
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
    <li
      v-for="{ title, color, icon, rating } in skills"
      :key="title"
      class="flex flex-col rounded-xl border border-slate-200/20 bg-slate-700/30 p-4 text-center shadow-lg shadow-gray-500/10"
    >
      <MdiIcon :icon :color size="36" class="mx-auto" />

      <h3 class="mt-3 text-slate-100">
        {{ title }}
      </h3>
      <div class="mt-1 flex justify-center text-yellow-200/90">
        <MdiIcon v-for="n in rating" :key="n" :icon="mdiStar" size="14" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const skills = [
  { icon: 'i-mdi-vuejs', title: 'Vue.js', rating: 4, color: '#41b883' },
  { icon: 'i-mdi-nuxt', title: 'Nuxt', rating: 5, color: '#00DC82' },
  { icon: 'i-mdi-vuetify', title: 'Vuetify', rating: 5, color: '#7BC6FF' },
  { icon: 'i-mdi-language-javascript', title: 'JavaScript', rating: 4, color: '#f0db4f' },
  { icon: 'i-mdi-language-typescript', title: 'TypeScript', rating: 4, color: '#007acc' },
  { icon: 'i-mdi-tailwind', title: 'TailwindCSS', rating: 4, color: '#38bdf8' },
  { icon: 'i-mdi-language-html5', title: 'HTML/CSS', rating: 4, color: '#e44d26' },
  { icon: 'i-mdi-language-python', title: 'Python', rating: 3, color: '#306998' },
  { icon: 'i-mdi-language-java', title: 'Java/Spring', rating: 4, color: '#f89820' },
  { icon: 'i-mdi-aws', title: 'AWS', rating: 4, color: '#ff9900' },
];
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <li
      v-for="{ title, color, icon, rating } in skills"
      :key="title"
      class="flex flex-col rounded-xl border border-slate-200/20 bg-slate-700/30 p-4 text-center shadow-lg shadow-gray-500/10"
    >
      <Icon :name="icon" size="36" class="mx-auto" :style="{ color }" />

      <h3 class="mt-3 text-slate-100">
        {{ title }}
      </h3>
      <div class="mt-1 flex justify-center text-yellow-200/90">
        <Icon v-for="n in rating" :key="n" name="i-mdi-star" size="14" />
      </div>
    </li>
  </ul>
</template>

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

const MAX_RATING = 5;
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    <li
      v-for="{ title, color, icon, rating } in skills"
      :key="title"
      class="flex flex-col rounded-2xl border border-muted/80 bg-slate-700/30 p-4 text-center"
    >
      <UIcon :name="icon" class="mx-auto size-9" :style="{ color }" />

      <h3 class="mt-3 font-medium">{{ title }}</h3>
      <div
        class="mt-1 text-sm text-yellow-200"
        :aria-label="`Skill level: ${rating} out of 5 stars`"
      >
        <UIcon
          v-for="n in MAX_RATING"
          :key="n"
          :name="n <= rating ? 'i-mdi-star' : 'i-mdi-star-outline'"
        />
      </div>
    </li>
  </ul>
</template>

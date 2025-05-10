<script setup lang="ts">
const likes = [
  {
    icon: '💻',
    title: 'Programming',
    text: 'Both work and hobby. Never gets old.',
  },
  {
    icon: '🗺️',
    title: 'Travel',
    text: 'Taking photos of mountains and seas.',
  },
  {
    icon: '♨',
    title: 'Onsen',
    text: 'Best way to relax in Japan.',
  },
  {
    icon: '🎮',
    title: 'Games',
    text: 'RPGs with good stories keep me hooked.',
  },
];
</script>

<template>
  <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <li
      v-for="{ title, text, icon } in likes"
      :key="title"
      class="flex flex-col rounded-2xl border border-muted/80 bg-slate-700/30 p-4 text-center"
    >
      <span class="text-4xl">{{ icon }}</span>
      <h3 class="mt-3 font-bold text-highlighted">{{ title }}</h3>
      <p class="mt-1 text-sm text-balance">{{ text }}</p>
    </li>
  </ul>
</template>

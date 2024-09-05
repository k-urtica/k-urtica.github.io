<script setup lang="ts">
const likes = [
  {
    icon: '💻',
    title: 'Programming',
    text: 'I code almost every day.',
  },
  {
    icon: '🗺️',
    title: 'Travel',
    text: 'Seeking beautiful landscapes.',
  },
  {
    icon: '♨',
    title: 'Onsen',
    text: 'Pride of Japan.',
  },
  {
    icon: '🎮',
    title: 'Games',
    text: 'Especially RPG.',
  },
];
</script>

<template>
  <div>
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="like in likes"
        :key="like.title"
        class="flex flex-col rounded-2xl border border-slate-200/20 bg-slate-700/30 p-4 text-center shadow-lg shadow-gray-900/20"
      >
        <span class="text-5xl">{{ like.icon }}</span>
        <h3 class="mt-3 font-bold text-zinc-50">
          {{ like.title }}
        </h3>
        <p class="mt-1 text-sm text-zinc-300/95">
          {{ like.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

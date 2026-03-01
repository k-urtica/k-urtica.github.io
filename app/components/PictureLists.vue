<script setup lang="ts">
const pics = [
  {
    image: 't1.webp',
    title: 'airplane',
  },
  {
    image: 't2.webp',
    title: 'pyramid',
  },
  {
    image: 't3.webp',
    title: 'cookie',
  },
  {
    image: 't4.webp',
    title: 'castle',
  },
  {
    image: 't5.webp',
    title: 'angkor thom',
  },
  {
    image: 't6.webp',
    title: 'monk',
  },
  {
    image: 't7.webp',
    title: 'stonehenge',
  },
  {
    image: 't8.webp',
    title: 'sphinx',
  },
  {
    image: 't9.webp',
    title: 'christmas market',
  },
  {
    image: 't10.webp',
    title: 'pub street',
  },
  {
    image: 't11.webp',
    title: 'autumn leaves',
  },
  {
    image: 't12.webp',
    title: 'dogs and cats',
  },
];
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <li v-for="{ image, title } in pics" :key="title">
      <div
        class="aspect-square overflow-hidden rounded-lg bg-zinc-900 ring-1 ring-zinc-800/50"
      >
        <img
          :alt="title"
          :src="`/images/${image}`"
          class="size-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
        >
      </div>
    </li>
  </ul>
</template>

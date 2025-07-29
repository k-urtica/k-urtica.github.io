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
  <ul class="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
    <li v-for="{ image, title } in pics" :key="title">
      <div
        class="aspect-video overflow-hidden rounded-xl transition-[scale,filter] duration-200 hover:scale-105 hover:brightness-105"
      >
        <img :alt="title" :src="`/images/${image}`">
      </div>
    </li>
  </ul>
</template>

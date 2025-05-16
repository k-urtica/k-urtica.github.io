<script setup lang="ts">
const pics = [
  {
    image: 't1.jpg',
    title: 'airplane',
  },
  {
    image: 't2.jpg',
    title: 'pyramid',
  },
  {
    image: 't3.jpg',
    title: 'cookie',
  },
  {
    image: 't4.jpg',
    title: 'castle',
  },
  {
    image: 't5.jpg',
    title: 'angkor thom',
  },
  {
    image: 't6.jpg',
    title: 'monk',
  },
  {
    image: 't7.jpg',
    title: 'stonehenge',
  },
  {
    image: 't8.jpg',
    title: 'sphinx',
  },
  {
    image: 't9.jpg',
    title: 'christmas market',
  },
  {
    image: 't10.jpg',
    title: 'pub street',
  },
  {
    image: 't11.jpg',
    title: 'autumn leaves',
  },
  {
    image: 't12.jpg',
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

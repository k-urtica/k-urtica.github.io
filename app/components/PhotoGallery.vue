<script setup lang="ts">
const galleryItems = [
  { src: 't1.webp', caption: 'airplane' },
  { src: 't2.webp', caption: 'pyramid' },
  { src: 't3.webp', caption: 'cookie' },
  { src: 't4.webp', caption: 'castle' },
  { src: 't5.webp', caption: 'angkor thom' },
  { src: 't6.webp', caption: 'monk' },
  { src: 't7.webp', caption: 'stonehenge' },
  { src: 't8.webp', caption: 'sphinx' },
  { src: 't9.webp', caption: 'christmas market' },
  { src: 't10.webp', caption: 'pub street' },
  { src: 't11.webp', caption: 'autumn leaves' },
  { src: 't12.webp', caption: 'dogs and cats' },
];
</script>

<template>
  <ul class="grid grid-cols-2 gap-4 md:grid-cols-3">
    <li v-for="{ src, caption } in galleryItems" :key="caption">
      <div
        class="aspect-square overflow-hidden rounded-lg bg-muted ring-1 ring-default"
      >
        <img
          :title="caption"
          :alt="caption"
          :src="`/images/${src}`"
          class="size-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
        >
      </div>
    </li>
  </ul>
</template>

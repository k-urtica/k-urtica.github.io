<script setup lang="ts">
const galleryItems = [
  { src: 'airplane.webp', caption: 'airplane' },
  { src: 'pyramid.webp', caption: 'pyramid' },
  { src: 'cookie.webp', caption: 'cookie' },
  { src: 'castle.webp', caption: 'castle' },
  { src: 'angkor-thom.webp', caption: 'angkor thom' },
  { src: 'monk.webp', caption: 'monk' },
  { src: 'stonehenge.webp', caption: 'stonehenge' },
  { src: 'sphinx.webp', caption: 'sphinx' },
  { src: 'christmas-market.webp', caption: 'christmas market' },
  { src: 'pub-street.webp', caption: 'pub street' },
  { src: 'autumn-leaves.webp', caption: 'autumn leaves' },
  { src: 'dogs-and-cats.webp', caption: 'dogs and cats' },
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
          :src="`/images/gallery/${src}`"
          class="size-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
        >
      </div>
    </li>
  </ul>
</template>

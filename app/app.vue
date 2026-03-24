<script setup lang="ts">
useSeoMeta({
  description: 'Front-end engineer based in Tokyo, crafting high-performance web experiences with Nuxt and modern web technologies.',
  ogImage: '/og-image.png',
});
</script>

<template>
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
    <div class="noise-layer pointer-events-none fixed inset-[-50%] z-50" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style scoped>
.noise-layer {
  opacity: 0.04;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: grain 0.5s steps(2) infinite;
}

@keyframes grain {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-2%, -2%);
  }
}
</style>

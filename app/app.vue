<template>
  <div class="cover min-h-svh">
    <img
      src="/bg_dark.webp"
      aria-hidden="true"
      fetchPriority="high"
      class="fixed inset-0 size-full object-cover"
    />

    <div
      class="pointer-events-none fixed bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/45 to-transparent"
    />
    <div
      class="pointer-events-none fixed top-0 left-0 h-full w-1/6 bg-gradient-to-r from-black/30 to-transparent"
    />
    <div
      class="pointer-events-none fixed top-0 right-0 h-full w-1/6 bg-gradient-to-l from-black/30 to-transparent"
    />

    <UApp>
      <NuxtPage />
    </UApp>
  </div>
</template>

<style scoped>
.cover::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  background-image: url('/noise.webp');
  animation: noise-anim 1s steps(7) infinite;
}

@keyframes noise-anim {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 140px 140px;
  }
}
</style>

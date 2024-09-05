<template>
  <main class="cover min-h-dvh">
    <img src="@/assets/bg.webp" class="fixed inset-0 size-full object-cover">
    <div class="fixed inset-0 size-full bg-gradient-to-b from-[rgb(0_0_0/0.08)] to-[rgb(0_0_0/0.35)]" />
    <NuxtPage />
  </main>
</template>

<style scoped>
.cover::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.04;
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

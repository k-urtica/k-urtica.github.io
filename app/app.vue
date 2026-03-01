<script setup lang="ts">

</script>

<template>
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }" class="cover">
    <NuxtPage />
  </UApp>
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

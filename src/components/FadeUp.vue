<template>
  <div
    class="fade-up"
    :style="{ 'animation-duration': duration, 'animation-delay': delay }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    duration?: string;
    delay?: string;
  }>(),
  {
    duration: '0.5s',
    delay: '0.25s',
  },
);
</script>

<style scoped>
.fade-up {
  animation-name: fadeUpAnime;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <div
    class="fade-up"
    :style="{ 'animation-duration': duration, 'animation-delay': delay }"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    duration: {
      type: String,
      default: '0.5s',
    },
    delay: {
      type: String,
      default: '0.25s',
    },
  },
});
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

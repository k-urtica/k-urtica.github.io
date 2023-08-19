<template>
  <component
    :is="tag"
    class="bg-blur rounded-2xl border border-slate-300/20 bg-gray-900/25 shadow-2xl shadow-cyan-600/20"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: 'div',
  },
);
</script>

<style scoped>
/* TODO: Temporary fix: https://github.com/tailwindlabs/tailwindcss/discussions/7835 */
.bg-blur {
  backdrop-filter: blur(8px);
}
</style>

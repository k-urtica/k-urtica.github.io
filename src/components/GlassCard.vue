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

<template>
  <component
    :is="tag"
    class="bg-blur rounded-2xl border border-zinc-300/20 bg-zinc-900/25 shadow-xl shadow-zinc-600/10"
  >
    <slot />
  </component>
</template>

<style scoped>
/* TODO: Temporary fix: https://github.com/tailwindlabs/tailwindcss/discussions/7835 */
.bg-blur {
  backdrop-filter: blur(8px);
}
</style>

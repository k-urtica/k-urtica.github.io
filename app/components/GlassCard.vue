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
    class="rounded-2xl border border-zinc-300/20 bg-zinc-950/35 shadow-xl shadow-zinc-600/10 backdrop-blur-[6px]"
  >
    <slot />
  </component>
</template>

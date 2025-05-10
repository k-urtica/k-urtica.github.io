<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: keyof HTMLElementTagNameMap;
  }>(),
  {
    tag: 'article',
  }
);
</script>

<template>
  <component
    :is="tag"
    class="rounded-3xl border-2 border-neutral-300/20 bg-neutral-950/40 p-5 shadow-xl shadow-neutral-500/10 backdrop-blur-sm md:p-8"
  >
    <slot />
  </component>
</template>

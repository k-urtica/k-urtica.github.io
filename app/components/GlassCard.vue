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
    class="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-neutral-900/40 to-white/5 p-5 shadow-xl ring-1 shadow-neutral-900/10 ring-white/20 backdrop-blur-md backdrop-saturate-[120%] md:p-8"
  >
    <slot />
  </component>
</template>

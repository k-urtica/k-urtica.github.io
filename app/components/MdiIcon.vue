<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    color?: string;
    size?: string;
  }>(),
  {
    color: 'currentColor',
    size: '1.2em',
  },
);
</script>

<template>
  <svg viewBox="0 0 24 24" :height="size" :width="size" :fill="color" role="img">
    <path :d="icon" />
  </svg>
</template>

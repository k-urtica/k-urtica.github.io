<template>
  <svg
    viewBox="0 0 24 24"
    :height="size"
    :width="size"
    :fill="color"
    role="img"
  >
    <path :d="icon"></path>
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    icon: string;
    color?: string;
    size?: string;
  }>(),
  {
    color: '#e2e8f0',
    size: '24',
  },
);
</script>

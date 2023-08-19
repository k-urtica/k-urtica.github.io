<template>
  <NuxtLink :to="to" :target="isExternal ? '_blank' : undefined">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();

const isExternal = computed(() => /^https?:\/\//.test(props.to));
</script>

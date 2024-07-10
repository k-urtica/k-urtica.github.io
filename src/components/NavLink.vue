<script setup lang="ts">
import { mdiHomeCircleOutline } from '@mdi/js';
</script>

<template>
  <nav class="border-slate-300/20 bg-gray-700/30">
    <NuxtLink to="/" class="flex items-center p-2">
      <MdiIcon :icon="mdiHomeCircleOutline" class="text-amber-200" size="24" aria-label="Home" />
    </NuxtLink>
  </nav>
</template>

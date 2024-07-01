<template>
  <nav class="border-slate-300/20 bg-gray-700/50">
    <ul>
      <li>
        <app-link to="/" class="inline-block px-4 py-1">
          <mdi-icon :icon="mdiHomeCircleOutline" class="inline" color="#5eead4" aria-label="Home" />
        </app-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { mdiHomeCircleOutline } from '@mdi/js';
</script>

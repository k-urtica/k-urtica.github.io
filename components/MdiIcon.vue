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

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#e2e8f0',
    },
    size: {
      type: String,
      default: '24',
    },
  },
});
</script>

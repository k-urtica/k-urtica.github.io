<template>
  <v-sheet class="glass-card" :height="height">
    <slot />
  </v-sheet>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    height: {
      type: String,
      default: undefined,
    },
  },
});
</script>

<style lang="scss" scoped>
.glass-card {
  background-color: rgba(255, 255, 255, 0.12);
  box-shadow: 0 8px 26px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  overflow: hidden;
}
</style>

<template>
  <div class="page-wrapper">
    <Particles id="tsparticles" :options="require('@/assets/particles.json')" />

    <div class="container mx-auto max-w-5xl">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Default',
});
</script>

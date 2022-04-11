<template>
  <div>
    <Particles id="tsparticles" :options="require('@/assets/particles.json')" />

    <main class="container mx-auto max-w-5xl">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Default',
});
</script>

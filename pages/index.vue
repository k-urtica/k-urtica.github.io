<template>
  <div>
    <header-hero />

    <about class="py-12 mb-12" />
    <skills class="py-12 mb-12" />
    <portfolio class="py-12 mb-12" />
    <links class="py-12 mb-12" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderHero from "~/components/HeaderHero.vue";

export default Vue.extend({
  components: {
    HeaderHero,
  },
});
</script>

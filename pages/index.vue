<template>
  <div>
    <div class="wrapper pb-8">
      <header-hero />

      <about class="py-12 mb-12" />
      <skills class="py-12 mb-12" />
      <portfolio class="py-12 mb-12" />
      <links class="py-12" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderHero from '~/components/HeaderHero.vue';

export default Vue.extend({
  components: {
    HeaderHero,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(
      135deg,
      rgba(61, 61, 61, 0.08) 0%,
      rgba(61, 61, 61, 0.08) 16%,
      rgba(209, 209, 209, 0.08) 16%,
      rgba(209, 209, 209, 0.08) 53%,
      rgba(180, 180, 180, 0.08) 53%,
      rgba(180, 180, 180, 0.08) 75%,
      rgba(247, 247, 247, 0.08) 75%,
      rgba(247, 247, 247, 0.08) 81%,
      rgba(161, 161, 161, 0.08) 81%,
      rgba(161, 161, 161, 0.08) 83%,
      rgba(17, 17, 17, 0.08) 83%,
      rgba(17, 17, 17, 0.08) 100%
    ),
    linear-gradient(
      90deg,
      rgba(105, 105, 105, 0.1) 0%,
      rgba(105, 105, 105, 0.1) 11%,
      rgba(103, 103, 103, 0.1) 11%,
      rgba(103, 103, 103, 0.1) 50%,
      rgba(7, 7, 7, 0.1) 50%,
      rgba(7, 7, 7, 0.1) 69%,
      rgba(166, 166, 166, 0.1) 69%,
      rgba(166, 166, 166, 0.1) 100%
    ),
    linear-gradient(
      135deg,
      rgba(40, 40, 40, 0.1) 0%,
      rgba(40, 40, 40, 0.1) 31%,
      rgba(216, 216, 216, 0.1) 31%,
      rgba(216, 216, 216, 0.1) 34%,
      rgba(24, 24, 24, 0.1) 34%,
      rgba(24, 24, 24, 0.1) 36%,
      rgba(107, 107, 107, 0.1) 36%,
      rgba(107, 107, 107, 0.1) 53%,
      rgba(228, 228, 228, 0.1) 53%,
      rgba(228, 228, 228, 0.1) 60%,
      rgba(136, 136, 136, 0.1) 60%,
      rgba(136, 136, 136, 0.1) 92%,
      rgba(88, 88, 88, 0.1) 92%,
      rgba(88, 88, 88, 0.1) 100%
    ),
    linear-gradient(
      90deg,
      rgba(180, 180, 180, 0.01) 0%,
      rgba(180, 180, 180, 0.01) 8%,
      rgba(250, 250, 250, 0.01) 8%,
      rgba(250, 250, 250, 0.01) 62%,
      rgba(101, 101, 101, 0.01) 62%,
      rgba(101, 101, 101, 0.01) 82%,
      rgba(243, 243, 243, 0.01) 82%,
      rgba(243, 243, 243, 0.01) 89%,
      rgba(22, 22, 22, 0.01) 89%,
      rgba(22, 22, 22, 0.01) 90%,
      rgba(73, 73, 73, 0.01) 90%,
      rgba(73, 73, 73, 0.01) 96%,
      rgba(61, 61, 61, 0.01) 96%,
      rgba(61, 61, 61, 0.01) 100%
    ),
    linear-gradient(90deg, rgb(11, 170, 156), rgb(60, 8, 248));
}
</style>

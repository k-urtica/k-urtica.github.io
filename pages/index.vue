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
  background-color: #e8f1ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23edeefd'/%3E%3Cstop offset='1' stop-color='%23edeefd' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f7d6d0'/%3E%3Cstop offset='1' stop-color='%23f7d6d0' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fbd2cf'/%3E%3Cstop offset='1' stop-color='%23fbd2cf' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23e8f1ff'/%3E%3Cstop offset='1' stop-color='%23e8f1ff' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f1eafc'/%3E%3Cstop offset='1' stop-color='%23f1eafc' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffbaa3'/%3E%3Cstop offset='1' stop-color='%23ffbaa3' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
</style>

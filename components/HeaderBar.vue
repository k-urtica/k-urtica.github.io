<template>
  <v-app-bar app flat color="rgba(30, 30, 30, 0.1)">
    <v-toolbar-title>
      <app-link to="index">
        <h1 class="text-h5 font-weight-bold">K</h1>
      </app-link>
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn text nuxt>About</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

//
<style lang="scss" scoped>
// .header-bar {
//   background-color: rgba(250, 0, 0, 0.9);
// }
//
</style>

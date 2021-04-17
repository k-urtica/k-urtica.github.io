<template>
  <v-app>
    <the-drawer />

    <v-main>
      <nuxt />
    </v-main>

    <the-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TheFooter from "~/components/common/TheFooter.vue";
import TheDrawer from "~/components/common/TheDrawer.vue";

export default Vue.extend({
  name: "Default",
  components: {
    TheFooter,
    TheDrawer,
  },
});
</script>

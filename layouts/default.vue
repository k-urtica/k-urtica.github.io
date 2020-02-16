<template>
  <v-app>
    <the-drawer />

    <v-content>
      <nuxt />
    </v-content>

    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from "~/components/common/TheFooter.vue";
import TheDrawer from "~/components/common/TheDrawer.vue";

export default {
  components: {
    TheFooter,
    TheDrawer
  }
};
</script>

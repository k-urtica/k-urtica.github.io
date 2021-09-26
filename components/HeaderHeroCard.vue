<template>
  <v-card elevation="0" class="glass-container">
    <v-list-item class="py-4">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          class="text-center"
          order="last"
          order-sm="first"
        >
          <v-list-item-content class="mt-1">
            <v-list-item-subtitle class="mb-2">
              Software Engineer
            </v-list-item-subtitle>
            <v-list-item-title class="text-h5 font-weight-bold mb-2">
              K
            </v-list-item-title>
          </v-list-item-content>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="text-center text-sm-right"
          order="first"
          order-sm="last"
        >
          <v-list-item-avatar class="mx-3" size="80">
            <v-img :src="require('@/assets/img/prof-icon.png')" />
          </v-list-item-avatar>
        </v-col>
      </v-row>
    </v-list-item>

    <v-card-actions>
      <v-btn
        v-for="item in btnItems"
        :key="item.text"
        text
        @click="goToAnchor(item.anchor)"
      >
        {{ item.text }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mdiTwitter, mdiGithub } from '@mdi/js';

export default Vue.extend({
  data() {
    return {
      icon: {
        mdiTwitter,
        mdiGithub,
      },
      btnItems: [
        { text: 'About', anchor: '#about' },
        { text: 'Skills', anchor: '#skills' },
        { text: 'Product', anchor: '#portfolio' },
        { text: 'Links', anchor: '#links' },
      ],
      options: {
        duration: 720,
      },
    };
  },
  methods: {
    goToAnchor(anchor: string) {
      this.$vuetify.goTo(anchor, this.options);
    },
  },
});
</script>

<style lang="scss" scoped>
.glass-container {
  gap: 20px;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  background-color: rgba(234, 118, 203, 0.063);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 1px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 1px rgba(40, 40, 40, 0.35) solid;
  border-right: 1px rgba(40, 40, 40, 0.35) solid;
}
</style>

<template>
  <v-card outlined tile class="hero-card">
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
.hero-card {
  -webkit-transition: all 0.35s ease-in-out;
  -moz-transition: all 0.35s ease-in-out;
  -o-transition: all 0.35s ease-in-out;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: #f3e5f5;
  }
}
</style>

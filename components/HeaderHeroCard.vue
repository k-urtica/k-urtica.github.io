<template>
  <glass-card class="pt-4 px-sm-3">
    <v-row no-gutters>
      <v-col cols="12" sm="6" class="text-center" order="last" order-sm="first">
        <v-list-item-content>
          <v-list-item-subtitle class="mb-2 grey--text text--lighten-4">
            Software Engineer
          </v-list-item-subtitle>
          <v-list-item-title
            class="text-h4 font-weight-bold mb-2 grey--text text--lighten-4"
          >
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
        <v-avatar class="ma-3 elevation-10" size="95">
          <img :src="require('@/assets/img/prof-icon.png')" />
        </v-avatar>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-btn
        v-for="item in btnItems"
        :key="item.text"
        color="grey lighten-4"
        text
        @click="goToAnchor(item.anchor)"
      >
        {{ item.text }}
      </v-btn>
    </v-card-actions>
  </glass-card>
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

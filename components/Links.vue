<template>
  <v-container>
    <h2 id="links" class="text-h2 font-weight-bold mb-11">Links</h2>

    <v-row justify="center">
      <v-col v-for="item in linkItems" :key="item.name" cols="12" sm="3">
        <v-card
          outlined
          tile
          max-width="275px"
          class="mx-auto"
          :href="item.link"
          target="_blank"
          rel="noopener"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h5 py-1">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.account }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar>
              <template v-if="item.name !== 'Qiita'">
                <v-icon :color="item.color">{{ item.icon }}</v-icon>
              </template>
              <template v-else>
                <v-img :src="item.icon" />
              </template>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mdiTwitter, mdiGithub } from "@mdi/js";

export default Vue.extend({
  data() {
    return {
      icon: { mdiTwitter },
      linkItems: [
        {
          name: "Twitter",
          account: "@k_urtica",
          icon: mdiTwitter,
          color: "#1DA1F2",
          link: "https://twitter.com/k_urtica",
        },
        {
          name: "GitHub",
          account: "k-urtica",
          icon: mdiGithub,
          color: "#333",
          link: "https://github.com/k-urtica",
        },
        {
          name: "Qiita",
          account: "KIYS",
          icon: require("@/assets/img/qiita-icon.png"),
          link: "https://qiita.com/KIYS",
        },
      ],
    };
  },
});
</script>

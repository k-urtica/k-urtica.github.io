<template>
  <v-container
    id="product"
    class="mt-5 mb-10 px-4"
    fluid
    style="over-flow-y: hidden"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold blue--text">Product</h2>
    <v-divider class="mb-9" />

    <v-row justify="space-around">
      <v-col
        v-for="item in productDetail"
        :key="item.title"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto"
            max-width="400"
            color="grey lighten-4"
            elevation="10"
            tile
            :href="item.url"
            target="_blank"
            rel="noopener"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            data-aos-anchor-placement="center-bottom"
          >
            <v-img
              :src="require('@/assets/img/product/' + item.image)"
              :aspect-ratio="16 / 9"
            >
              <v-expand-transition>
                <v-card
                  v-if="hover"
                  height="100%"
                  width="100%"
                  class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                >
                  Learn More
                  <v-icon small right color="white">mdi-open-in-new</v-icon>
                </v-card>
              </v-expand-transition>
            </v-img>

            <v-card-title class="py-2 product-title">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="caption" style="height: 100%">
              {{ item.description }}
            </v-card-text>

            <v-divider class="mx-3" color="#BDBDBD" />
            <v-tooltip top color="#66BB6A">
              <template #activator="{ on }">
                <v-card-actions class="justify-center" v-on="on">
                  <v-icon
                    v-for="icon in item.stackIcons"
                    :key="icon.name"
                    :color="icon.color"
                    small
                    class="mx-2"
                    >{{ icon.icon }}</v-icon
                  >
                </v-card-actions>
              </template>
              <div v-for="stack in item.stackDetail" :key="stack.title">
                <p class="mb-0 font-weight-bold">{{ stack.title }}</p>
                <p class="mb-0 mx-2">{{ stack.stacks }}</p>
              </div>
            </v-tooltip>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    productDetail: [
      {
        title: "QT Visualizer",
        url: "https://qtvisualizer.com/",
        image: "product-qtv.jpg",
        description:
          "Qiitaの人気の記事・ユーザー・書籍を見つけられるWebサービスです。" +
          "Pythonでデータ集計を行い、フロントエンドはVue.jsによるSPAで構築しています 😄",
        stackIcons: [
          { icon: "mdi-vuejs", color: "#41B883" },
          { icon: "mdi-vuetify", color: "#42A5F5" },
          { icon: "mdi-language-python", color: "#306998" },
          { icon: "mdi-flask-empty-outline", color: "#616161" },
          { icon: "mdi-database", color: "#3FA037" },
          { icon: "mdi-database", color: "#A41E11" },
        ],
        stackDetail: [
          {
            title: "Front-end",
            stacks: "Vue.js / Vuetify",
          },
          {
            title: "Back-end",
            stacks: "Python / Flask / MongoDB / Redis",
          },
          {
            title: "Others",
            stacks: "Heroku / AmazonS3 / CloudFlare",
          },
        ],
      },
      {
        title: "ポートフォリオページ",
        url: "https://k-urtica.github.io/",
        image: "product-portfolio.jpg",
        description:
          "現在閲覧されている、私のポートフォリオサイトです🤔 " +
          "Nuxt.js・Vuetifyで構築し、静的生成した資産をGitHub Pagesでホスティングして公開しています。",
        stackIcons: [
          { icon: "mdi-nuxt", color: "#41B883" },
          { icon: "mdi-vuetify", color: "#42A5F5" },
          { icon: "mdi-github-circle", color: "#222" },
        ],
        stackDetail: [
          {
            title: "Front-end",
            stacks: "Nuxt.js / Vuetify / AOS",
          },
          {
            title: "Others",
            stacks: "GitHub Pages",
          },
        ],
      },
      {
        title: "NUXT-NEWS-APP",
        url: "https://nuxt-news-app.now.sh/",
        image: "product-nuxt-news-app.jpg",
        description:
          "NuxtとNews APIを利用した国内・海外の様々なニュースソースからホットなニュースを集めたニュースサイトです。" +
          "Zeit NowにSPAでホスティングしています。",
        stackIcons: [
          { icon: "mdi-nuxt", color: "#41B883" },
          { icon: "mdi-vuetify", color: "#42A5F5" },
          { icon: "mdi-nodejs", color: "#6cc24a" },
        ],
        stackDetail: [
          {
            title: "Front-end",
            stacks: "Nuxt.js / Vuetify",
          },
          {
            title: "Serverless-Functions",
            stacks: "Node.js",
          },
          {
            title: "Others",
            stacks: "Zeit Now",
          },
        ],
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  background-color: rgba(32, 32, 32, 0.4);
  position: absolute;
  width: 100%;
}
.product-title {
  font-size: 20px;
  color: #5c6bc0;
  font-weight: bold;
}
</style>

<template>
  <v-container>
    <section-header
      id="portfolio"
      title="Portfolio"
      text="Some of my latest works"
      class="mb-8"
    />

    <v-row>
      <v-col
        v-for="item in products"
        :key="item.text"
        cols="12"
        sm="6"
        lg="4"
        class="py-4"
        data-aos="fade-up"
      >
        <app-link :to="item.link">
          <glass-card height="100%">
            <v-img :src="require('@/assets/img/' + item.image)" />
            <v-card-title class="font-weight-bold white--text">
              {{ item.title }}
            </v-card-title>
            <v-card-text class="blue--text text--lighten-5">
              {{ item.text }}
            </v-card-text>
          </glass-card>
        </app-link>
      </v-col>

      <v-col
        v-show="$vuetify.breakpoint.lgAndUp"
        lg="6"
        offset-lg="2"
        align-self="center"
        class="py-4"
      >
        <v-img
          :src="require('@/assets/img/undraw_nuxt_js_0fq9.svg')"
          max-height="270px"
          contain
          class="mt-4"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SectionHeader from './SectionHeader.vue';

export default Vue.extend({
  components: { SectionHeader },
  data() {
    return {
      products: [
        {
          title: 'ポートフォリオサイト👋',
          text:
            '私のポートフォリオサイトです。Nuxt.js/Vuetifyでシンプルに作成しました😉 Nuxtで静的に生成したサイトをGitHub Pagesでホスティングしています。',
          image: 'portfolio-site.png',
          link: 'https://k-urtica.github.io/',
        },
        {
          title: 'Web ToolBox | 無料で気軽に使えるWebツールサイト',
          text:
            'プログラミングやWeb制作などに役に立つ自作ツールを公開しているサイトです🔧 ツールは随時追加していっています。インフラはAWSを利用😄',
          image: 'web-toolbox.png',
          link: 'https://web-toolbox.dev/',
        },
        {
          title: 'QT Visualizer | 【Qiita技術記事のランキング】',
          text:
            'Qiitaの人気の記事/ユーザー/技術書籍を検索できるWebサービスです。Pythonでデータ集計を行い、Vue.jsによるSPAで構築しています😌',
          image: 'qtvisualizer.png',
          link: 'https://qtvisualizer.com/',
        },
        {
          title: 'K note',
          text:
            'Vueの静的サイトジェネレーター「Gridsome」で構築したマークダウンブログです。Netlifyホスティングで完全無料で運営🤭',
          image: 'knote.png',
          link: 'https://knote.dev/',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.product-card {
  gap: 20px;
  border-radius: 14px;
  backdrop-filter: blur(6px);
  background-color: rgba(32, 32, 32, 0.06);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 1px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 1px rgba(40, 40, 40, 0.35) solid;
  border-right: 1px rgba(40, 40, 40, 0.35) solid;
}
</style>

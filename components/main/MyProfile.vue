<template>
  <v-container
    id="profile"
    class="mt-5 mb-10 px-4"
    fluid
    style="overflow-x: hidden"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold blue--text">About Me</h2>
    <v-divider class="mb-9" />

    <v-row class="px-4" align="center">
      <v-col
        cols="12"
        md="7"
        class="mb-5"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <h4 class="mb-1 section-title">バックエンドエンジニア (仕事)</h4>
        <p>
          😉 主にJava(Spring FW / Spring
          boot)を使用して企業向けWebシステムの構築を仕事としています。
        </p>
        <h4 class="mb-1 section-title">個人開発エンジニア (趣味)</h4>
        <p>
          💻
          主にVue、Nuxt、Vuetify、Pythonを使ってWebサービスの開発を行っています。
        </p>
        <h4 class="mb-1 section-title">旅行好き</h4>
        <p>✈ 国内・海外問わず、様々な場所へ旅行するのが好き。</p>
        <h4 class="mb-1 section-title">お酒好き</h4>
        <p>🥃 ビール、ウイスキー、日本酒等々、個人開発はお酒を嗜みつつ...</p>
      </v-col>

      <v-col
        cols="12"
        md="5"
        align="center"
        class="mb-5"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <profile-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ProfileCard from "~/components/main/parts/ProfileCard.vue";

export default Vue.extend({
  components: {
    ProfileCard,
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  color: #777;
}
</style>

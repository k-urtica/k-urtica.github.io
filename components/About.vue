<template>
  <v-container>
    <section-header
      id="about"
      title="About"
      text="Hi there 👋👋"
      class="mb-8"
    />

    <v-row>
      <v-col cols="12" md="6" align-self="center" order="last" order-sm="first">
        <v-simple-table dark class="glass-container blue--text text--lighten-5">
          <template #default>
            <tbody>
              <tr>
                <td>名前</td>
                <td>K</td>
              </tr>
              <tr>
                <td>居住地</td>
                <td>東京都</td>
              </tr>
              <tr>
                <td>仕事</td>
                <td>エンジニア (バックエンド＆フロントエンド)</td>
              </tr>
              <tr>
                <td>仕事で使う主な言語</td>
                <td>Java (Spring FW🍃)</td>
              </tr>
              <tr>
                <td>趣味で使う主な言語</td>
                <td>Vue.js / Nuxt.js / Python🐍</td>
              </tr>
              <tr>
                <td>趣味</td>
                <td>旅行🛫 / お酒🥃 / プラグラミング💻</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col cols="12" md="5" offset-md="1" class="text-center">
        <v-avatar size="250" class="elevation-8" data-aos="zoom-in">
          <v-img :src="require('@/assets/img/prof-icon.png')" />
        </v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.glass-container {
  overflow: hidden;
  background-color: rgba(90, 90, 90, 0.06) !important;
  box-shadow: 0 8px 26px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
}
</style>

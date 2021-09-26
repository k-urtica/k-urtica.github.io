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
        <v-simple-table dark class="prof-table glass-container">
          <template #default>
            <tbody class="green--text text--accent-2">
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
.prof-table {
  /* background-color: #20232c;
  border-radius: 14px; */
  overflow: hidden;
}

.glass-container {
  gap: 20px;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  background-color: rgba(16, 16, 16, 0.6);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 1px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 1px rgba(40, 40, 40, 0.35) solid;
  border-right: 1px rgba(40, 40, 40, 0.35) solid;
}
</style>

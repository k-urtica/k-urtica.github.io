<template>
  <v-card outlined max-width="390" class="prof-card">
    <v-card-actions class="justify-center">
      <v-avatar
        size="150"
        class="elevation-8 mt-n7"
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="bottom-bottom"
      >
        <v-img :src="require('@/assets/img/prof-icon.png')" width="150" />
      </v-avatar>
    </v-card-actions>
    <v-card-text class="caption pb-0">
      Back-end Developer / Traveler / Liquor lover
    </v-card-text>
    <v-card-text class="pb-1">
      <v-row
        v-for="item in profilList"
        :key="item.caption"
        justify="space-between"
      >
        <v-col cols="auto" class="py-0">
          <v-icon small class="pr-2" color="blue-grey darken-1">{{
            item.icon
          }}</v-icon>
          <span class="font-weight-bold" style="color: #7986cb">
            {{ item.caption }}
          </span>
        </v-col>
        <v-col cols="6" class="text-left py-0">{{ item.value }}</v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-3" />
    <v-card-actions class="py-1 justify-center">
      <v-btn
        v-for="item in snsLinkList"
        :key="item.title"
        icon
        :href="item.link"
        target="_blank"
        rel="noopener"
      >
        <v-icon>{{ item.icon }}</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    profilList: [
      { caption: "Name", value: "K", icon: "mdi-account-badge" },
      { caption: "Location", value: "Tokyo, Japan", icon: "mdi-map-marker" },
    ],
    snsLinkList: [
      {
        title: "Twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/k_urtica",
      },
      {
        title: "GitHub",
        icon: "mdi-github-circle",
        link: "https://github.com/k-urtica",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.my-icon {
  transition: all 1.2s linear 0s;
}
.my-icon:hover {
  transform: rotateY(360deg);
}
.prof-card {
  animation: prof-card 2.5s ease-in-out infinite;
  transform-origin: 50% 50%;
}
@keyframes prof-card {
  0% {
    transform: translate(0, -4px);
  }
  50% {
    transform: translate(0, 4px);
  }
  100% {
    transform: translate(0, -4px);
  }
}
</style>

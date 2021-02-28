<template>
  <div id="header-hero" style="overflow-x: hidden">
    <v-img :src="require('@/assets/img/header-hero.jpg')" class="hero-image">
      <v-container fill-height fluid align="center" class="custom-gradient">
        <v-row class="mt-auto px-2" no-gutters>
          <v-col cols="12" class="text-right">
            <h1
              class="portfolio-title"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              K
            </h1>
            <h1
              class="portfolio-title"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
            >
              Back-end Developer
              <v-divider />
            </h1>
          </v-col>
        </v-row>
        <v-btn
          class="btn-scroll mt-auto mx-auto mb-11"
          icon
          large
          @click="$vuetify.goTo('#profile', options)"
          ><v-icon large color="white">mdi-chevron-double-down</v-icon></v-btn
        >
      </v-container>
    </v-img>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: {
      duration: 1000,
      easing: "easeInOutQuad",
    },
  }),
};
</script>

<style lang="scss" scoped>
.hero-image {
  height: 100vh;
  .custom-gradient {
    background: rgba(255, 238, 88, 0.12);
  }
}
.portfolio-title {
  color: #fff;
  font-weight: bold;
  font-size: 82px;
  text-shadow: 1px 1px 2px black;
  @media screen and (max-width: 840px) {
    font-size: 52px;
  }
  @media screen and (max-width: 580px) {
    font-size: 34px;
  }
}
.btn-scroll {
  animation: btn-scroll 2s ease-in-out infinite;
  transform-origin: 50% 50%;
}
@keyframes btn-scroll {
  0% {
    transform: translate(0, -5px);
  }
  50% {
    transform: translate(0, 5px);
  }
  100% {
    transform: translate(0, -5px);
  }
}
</style>

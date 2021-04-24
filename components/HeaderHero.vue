<template>
  <div class="hero-wrapper">
    <div
      id="tsparticles"
      class="d-flex align-center justify-center"
      style="height: 100%; position: relative"
    >
      <header-hero-card style="position: absolute" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { tsParticles } from "tsparticles";

export default Vue.extend({
  mounted() {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
          value: 40,
        },
        color: {
          value: "#CFD8DC",
          animation: {
            enable: true,
            speed: 30,
            sync: false,
          },
        },
        shape: {
          type: "polygon",
          polygon: {
            nb_sides: 6,
          },
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true, // シェイプの透明度をアニメーションさせるか否か
            speed: 0.2, // アニメーションのスピード
            opacity_min: 0.1, // 透明度の最小値
            sync: false, // 全てのシェイプを同時にアニメーションさせるか否か
          },
        },
        size: {
          value: 75,
          random: true,
          animation: {
            enable: true,
            speed: 16,
            minimumValue: 10,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 1.2,
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 1,
            opacity: 0.2,
            size: 10,
            color: {
              value: "#00E676",
            },
          },
        },
      },
    });
  },
});
</script>

<style lang="scss" scoped>
.hero-wrapper {
  height: 100vh;
  background-color: #fefefe;
}
</style>

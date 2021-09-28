<template>
  <div class="hero-wrapper">
    <div
      id="tsparticles"
      class="d-flex align-center justify-center"
      style="height: 100%; position: relative"
    >
      <div
        style="position: absolute"
        data-aos="zoom-out-down"
        data-aos-duration="500"
      >
        <header-hero-card />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { tsParticles } from 'tsparticles';

export default Vue.extend({
  mounted() {
    this.$nextTick(() => {
      tsParticles.load('tsparticles', {
        particles: {
          number: {
            value: this.$vuetify.breakpoint.xsOnly ? 15 : 30,
          },
          color: {
            value: '#B2EBF2',
            animation: {
              enable: true,
              speed: 30,
              sync: false,
            },
          },
          shape: {
            type: 'edge',
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
            value: 70,
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
            outModes: 'bounce',
          },
        },
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              distance: 100,
              duration: 1,
              opacity: 0.2,
              size: 10,
              color: {
                value: '#00E676',
              },
            },
          },
        },
      });
    });
  },
});
</script>

<style lang="scss" scoped>
.hero-wrapper {
  height: 100vh;
  // background-color: #fefefe;
}
</style>

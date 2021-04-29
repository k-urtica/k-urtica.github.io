<template>
  <div>
    <h2 class="text-h2 font-weight-bold mb-11" data-aos="fade-right">
      {{ title }}
    </h2>
    <p class="text-h5" data-aos="fade-right" data-aos-delay="200">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
});
</script>

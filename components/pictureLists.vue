<template>
  <div>
    <ul class="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
      <li v-for="pic in pics" :key="pic.title">
        <div class="aspect-video overflow-hidden rounded-xl">
          <nuxt-picture
            format="webp"
            quality="80"
            loading="lazy"
            preload
            alt=""
            :src="`/images/${pic.image}`"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      pics: [
        {
          image: 't1.jpg',
          title: 'airplane',
        },
        {
          image: 't2.jpg',
          title: 'pyramid',
        },
        {
          image: 't3.jpg',
          title: 'cookie',
        },
        {
          image: 't4.jpg',
          title: 'castle',
        },
        {
          image: 't5.jpg',
          title: 'angkor thom',
        },
        {
          image: 't6.jpg',
          title: 'monk',
        },
        {
          image: 't7.jpg',
          title: 'stonehenge',
        },
        {
          image: 't8.jpg',
          title: 'sphinx',
        },
        {
          image: 't9.jpg',
          title: 'christmas market',
        },
        {
          image: 't10.jpg',
          title: 'pub street',
        },
        {
          image: 't11.jpg',
          title: 'autumn leaves',
        },
        {
          image: 't12.jpg',
          title: 'dogs and cats',
        },
      ],
    };
  },
});
</script>

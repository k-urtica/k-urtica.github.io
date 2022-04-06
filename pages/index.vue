<template>
  <div class="flex h-screen px-5">
    <glass-card class="m-auto w-full py-9 px-7 sm:w-112">
      <div>
        <h1 class="mb-3 text-4xl font-bold text-slate-100">K</h1>
        <p class="text-sm text-slate-300">Web developer working in Japan.</p>
        <p class="text-sm text-slate-300">I love traveling and whiskey!</p>
      </div>

      <div class="mt-7 border-t border-slate-600">
        <div v-for="menu in menus" :key="menu.title" class="mt-5">
          <app-link :to="menu.to" class="text-emerald-300">
            <h2 class="relative text-xl font-bold">
              {{ menu.title }}
              <span
                class="absolute right-0"
                :class="{ '-rotate-45': menu.isExternal }"
              >
                →
              </span>
            </h2>
          </app-link>
          <div class="mt-1 text-sm text-slate-300/80">{{ menu.caption }}</div>
        </div>
      </div>
    </glass-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      menus: [
        {
          title: 'About',
          to: '/about',
          caption: 'About me.',
        },
        {
          title: 'Portfolio',
          to: '/portfolio',
          caption: 'Personal projects.',
        },
        // {
        //   title: 'Picture',
        //   to: '/picture',
        //   caption: 'A scene from the trip.',
        // },
        {
          title: 'Blog',
          to: 'https://knote.dev',
          caption: 'My personal Blog.',
          isExternal: true,
        },
        {
          title: 'Twitter',
          to: 'https://twitter.com/k_urtica',
          caption: 'Follow me.',
          isExternal: true,
        },
      ],
    };
  },
});
</script>

<script setup lang="ts">
const portfolios = [
  {
    image: 'p1.png',
    title: 'Web ToolBox',
    text: 'Web tools for developers that can be used in the browser. This is what I\'m most focused on right now😆',
    tools: 'Made with: NuxtJS, Vuetify, Python etc',
    url: 'https://web-toolbox.dev',
  },
  {
    image: 'p2.png',
    title: '日本踏破図🗾',
    text: 'This service allows you to share the prefectures you have visited on a map of Japan!',
    tools: 'Made with: NuxtJS, Vuetify',
    url: 'https://traverse-japan.dev',
  },
  {
    image: 'p3.png',
    title: 'Portfolio site',
    text: 'This is my personal website. It has been refined through several renewals🤭',
    tools: 'Made with: NuxtJS, Tailwind CSS',
    url: 'https://k-urtica.github.io',
  },
  {
    image: 'p4.png',
    title: 'My Blog',
    text: 'Markdown blog made by Gatsby. I have no experience with react, but I built it from scratch.',
    tools: 'Made with: Gatsby, Tailwind CSS',
    url: 'https://knote.dev',
  },
  {
    image: 'p5.png',
    title: 'QT Visualizer',
    text: 'Web service to visualize trends on the technology sharing platform Qiita. This is my first personal project🚀',
    tools: 'Made with: Vue.js, Vuetify, Python etc',
    url: 'https://qtvisualizer.com',
  },
];
</script>

<template>
  <div>
    <ul class="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <li v-for="p in portfolios" :key="p.title">
        <NuxtLink :to="p.url" target="_blank">
          <article
            class="flex flex-col overflow-hidden rounded-2xl border border-slate-200/10 bg-gray-600/25 shadow-lg shadow-slate-700/20 transition duration-300 hover:bg-slate-500/20 hover:shadow-slate-200/20"
          >
            <div class="aspect-video">
              <img :alt="p.title" :src="`/images/${p.image}`">
            </div>

            <section class="p-4">
              <h3 v-twemoji class="text-center text-lg font-bold text-orange-200">
                {{ p.title }}
              </h3>
              <p v-twemoji class="mt-2 text-sm text-zinc-200/90">
                {{ p.text }}
              </p>
              <p class="mt-2 text-xs font-bold text-zinc-50">
                {{ p.tools }}
              </p>
            </section>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

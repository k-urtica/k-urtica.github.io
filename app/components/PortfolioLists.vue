<script setup lang="ts">
import { NuxtLink } from '#components';

const portfolios = [
  {
    image: 'p_webtoolbox.webp',
    title: 'Web ToolBox',
    text: "Web tools for developers that can be used in the browser. This is what I'm most focused on right now😆",
    stack: 'Made with: Nuxt, NuxtUI, Python etc',
    to: 'https://web-toolbox.dev',
  },
  {
    image: 'p_diffiy.webp',
    title: 'Diffiy',
    text: 'Diffiy is a powerful, secure text comparison tool🔍',
    stack: 'Made with: Nuxt, shadcn/ui',
    to: 'https://Diffiy.dev',
  },
  {
    image: 'p_tintsshades.webp',
    title: 'Tints and Shades Generator',
    text: 'Intuitive generator to generate tints and shade colors.',
    stack: 'Made with: Gatsby, Mantine',
    to: 'https://tintsshades.web-toolbox.dev',
  },
  {
    image: 'p_traversjapan.png',
    title: '日本踏破図🗾 (🌇 Sunset)',
    text: 'This service allows you to share the prefectures you have visited on a map of Japan!',
    stack: 'Made with: Nuxt, Vuetify',
  },
  {
    image: 'p_portfolio.png',
    title: 'Portfolio site',
    text: 'This is my personal website. It has been refined through several renewals🤭',
    stack: 'Made with: Nuxt, TailwindCSS',
    to: 'https://k-urtica.github.io',
  },
  {
    image: 'p_blog.png',
    title: 'My Blog',
    text: 'Markdown blog made by Gatsby. I have no experience with react, but I built it from scratch.',
    stack: 'Made with: Gatsby, TailwindCSS',
    to: 'https://knote.dev',
  },
  {
    image: 'p_qt.png',
    title: 'QT Visualizer (🌇 Sunset)',
    text: 'Web service to visualize trends on the technology sharing platform Qiita. This is my first personal project🚀',
    stack: 'Made with: Vue.js, Vuetify, Python etc',
  },
];
</script>

<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li v-for="{ image, title, text, stack, to } in portfolios" :key="title">
      <component :is="to ? NuxtLink : 'div'" :to :target="to && '_blank'">
        <article
          class="flex h-full flex-col overflow-hidden rounded-xl border border-muted/20 bg-default/40 transition-[background-color,filter] duration-200 hover:bg-default/60 hover:brightness-110"
        >
          <img :alt="title" :src="`/images/${image}`" class="aspect-video" />
          <section class="flex h-full flex-col p-4 pt-2">
            <h3 class="text-center text-lg font-bold text-primary-200">
              {{ title }}
            </h3>
            <p class="my-1.5 text-sm text-zinc-200/90">{{ text }}</p>
            <p class="mt-auto text-xs font-semibold">{{ stack }}</p>
          </section>
        </article>
      </component>
    </li>
  </ul>
</template>

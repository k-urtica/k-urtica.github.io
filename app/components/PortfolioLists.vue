<script setup lang="ts">
import { NuxtLink } from '#components';

const portfolios = [
  {
    image: 'p_webtoolbox.webp',
    title: 'Web ToolBox',
    text: 'A comprehensive suite of browser-based utilities for developers. Currently my primary focus and flagship project.',
    stack: 'Made with: Nuxt, NuxtUI, Cloudflare Workers',
    to: 'https://web-toolbox.dev',
  },
  {
    image: 'p_tintsshades.webp',
    title: 'Tints and Shades Generator',
    text: 'An intuitive tool for generating monochromatic color variations, including precise tints and shades.',
    stack: 'Made with: Nuxt, NuxtUI',
    to: 'https://tintsshades.web-toolbox.dev',
  },
  {
    image: 'p_release-viewer.webp',
    title: 'Release Viewer',
    text: 'A streamlined dashboard for monitoring GitHub releases across multiple repositories simultaneously.',
    stack: 'Made with: Nuxt, NuxtUI, Cloudflare Workers',
    to: 'https://release-viewer.web-toolbox.dev',
  },
  {
    image: 'p_traversjapan.png',
    title: 'Japan Travel Map (Sunset)',
    text: 'A social mapping service that enabled users to visualize and share their travels across Japan\'s 47 prefectures.',
    stack: 'Made with: Nuxt, Vuetify',
  },
  {
    image: 'p_portfolio.png',
    title: 'Portfolio site',
    text: 'My personal portfolio site, iteratively refined through multiple design cycles to showcase my latest work.',
    stack: 'Made with: Nuxt, TailwindCSS',
    to: 'https://k-urtica.github.io',
  },
  {
    image: 'p_blog.png',
    title: 'My Blog',
    text: 'A high-performance Markdown-based blog built from scratch with Gatsby to master modern web development.',
    stack: 'Made with: Gatsby, TailwindCSS',
    to: 'https://knote.dev',
  },
  {
    image: 'p_qt.png',
    title: 'QT Visualizer (Sunset)',
    text: 'A data visualization tool for analyzing technology trends on Qiita. My foundational personal project in web development.',
    stack: 'Made with: Vue.js, Vuetify, Python etc',
  },
];
</script>

<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li v-for="{ image, title, text, stack, to } in portfolios" :key="title">
      <component :is="to ? NuxtLink : 'div'" :to :target="to && '_blank'">
        <article
          class="flex h-full flex-col overflow-hidden rounded-lg border bg-muted/50 transition-all duration-300 hover:border-accented hover:bg-muted"
        >
          <img :alt="title" :src="`/images/${image}`" class="aspect-video object-cover grayscale transition-all duration-500 hover:grayscale-0">
          <section class="flex h-full flex-col p-5">
            <h3 class="text-base font-semibold text-highlighted">
              {{ title }}
            </h3>
            <p class="text-description my-2 text-sm leading-relaxed">{{ text }}</p>
            <p class="mt-auto font-mono text-[11px] tracking-wider text-dimmed">{{ stack }}</p>
          </section>
        </article>
      </component>
    </li>
  </ul>
</template>

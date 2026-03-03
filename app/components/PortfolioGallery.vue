<script setup lang="ts">
import { NuxtLink } from '#components';

const projects = [
  {
    image: 'p_webtoolbox.webp',
    title: 'Web ToolBox',
    description: 'A comprehensive suite of browser-based utilities for developers. Currently my primary focus and flagship project.',
    stack: 'Made with: Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://web-toolbox.dev',
  },
  {
    image: 'p_tintsshades.webp',
    title: 'Tints and Shades Generator',
    description: 'An intuitive tool for generating monochromatic color variations, including precise tints and shades.',
    stack: 'Made with: Nuxt, NuxtUI',
    url: 'https://tintsshades.web-toolbox.dev',
  },
  {
    image: 'p_release-viewer.webp',
    title: 'Release Viewer',
    description: 'A streamlined dashboard for monitoring GitHub releases across multiple repositories simultaneously.',
    stack: 'Made with: Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://release-viewer.web-toolbox.dev',
  },
  {
    image: 'p_traversjapan.png',
    title: 'Japan Travel Map (Sunset)',
    description: 'A social mapping service that enabled users to visualize and share their travels across Japan\'s 47 prefectures.',
    stack: 'Made with: Nuxt, Vuetify',
  },
  {
    image: 'p_portfolio.png',
    title: 'Portfolio site',
    description: 'My personal portfolio site, iteratively refined through multiple design cycles to showcase my latest work.',
    stack: 'Made with: Nuxt, TailwindCSS',
    url: 'https://k-urtica.github.io',
  },
  {
    image: 'p_blog.png',
    title: 'My Blog',
    description: 'A high-performance Markdown-based blog built from scratch with Gatsby to master modern web development.',
    stack: 'Made with: Gatsby, TailwindCSS',
    url: 'https://knote.dev',
  },
  {
    image: 'p_qt.png',
    title: 'QT Visualizer (Sunset)',
    description: 'A data visualization tool for analyzing technology trends on Qiita. My foundational personal project in web development.',
    stack: 'Made with: Vue.js, Vuetify, Python etc',
  },
];
</script>

<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li v-for="{ image, title, description, stack, url } in projects" :key="title">
      <component :is="url ? NuxtLink : 'div'" :to="url" :target="url && '_blank'">
        <article
          class="flex h-full flex-col overflow-hidden rounded-lg border bg-muted/50 transition-all duration-300 hover:border-accented hover:bg-muted"
        >
          <img :alt="title" :src="`/images/${image}`" class="aspect-video object-cover grayscale transition-all duration-500 hover:grayscale-0">
          <section class="flex h-full flex-col p-5">
            <h3 class="text-base font-semibold text-highlighted">
              {{ title }}
            </h3>
            <p class="text-description my-2 text-sm leading-relaxed">{{ description }}</p>
            <span class="mt-auto font-mono text-[10px] tracking-wider text-muted">{{ stack }}</span>
          </section>
        </article>
      </component>
    </li>
  </ul>
</template>

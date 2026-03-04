<script setup lang="ts">
import { NuxtLink } from '#components';

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string;
  url?: string;
  sunset?: boolean;
}

const projects: Project[] = [
  {
    image: 'p_webtoolbox.webp',
    title: 'Web ToolBox',
    description: 'A comprehensive collection of lightweight, browser-based utilities designed to streamline daily developer workflows.',
    stack: 'Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://web-toolbox.dev',
  },
  {
    image: 'p_tintsshades.webp',
    title: 'Tints and Shades Generator',
    description: 'A minimalist color tool for generating precise monochromatic variations, helping designers create consistent color scales.',
    stack: 'Nuxt, NuxtUI',
    url: 'https://tintsshades.web-toolbox.dev',
  },
  {
    image: 'p_release-viewer.webp',
    title: 'Release Viewer',
    description: 'A centralized dashboard for tracking GitHub releases across multiple repositories to stay updated with open-source projects.',
    stack: 'Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://release-viewer.web-toolbox.dev',
  },
  {
    image: 'p_portfolio.png',
    title: 'Portfolio site',
    description: 'A personal showcase crafted with a focus on typography, motion, and clean UI to present my latest work and photography.',
    stack: 'Nuxt, TailwindCSS',
    url: 'https://k-urtica.github.io',
  },
  {
    image: 'p_traversjapan.png',
    title: 'Japan Travel Map',
    sunset: true,
    description: 'An interactive mapping service that allowed users to visualize and share their journeys across Japan’s 47 prefectures.',
    stack: 'Nuxt, Vuetify',
  },
  {
    image: 'p_blog.png',
    title: 'My Blog',
    description: 'A high-performance, Markdown-driven blog built to explore the Jamstack ecosystem and modern static site generation.',
    stack: 'Gatsby, TailwindCSS',
    sunset: true,
  },
  {
    image: 'p_qt.png',
    title: 'QT Visualizer',
    sunset: true,
    description: 'A data visualization project analyzing technology trends on Qiita, marking the beginning of my journey into web development.',
    stack: 'Vue.js, Vuetify, Python etc',
  },
];
</script>

<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li v-for="{ image, title, description, stack, url, sunset } in projects" :key="title">
      <component
        :is="url ? NuxtLink : 'div'"
        :to="url"
        :target="url && '_blank'"
      >
        <article
          class="flex h-full flex-col overflow-hidden rounded-lg border bg-muted/50 transition-all duration-300 hover:border-accented hover:bg-muted"
        >
          <img
            :alt="title"
            :src="`/images/${image}`"
            class="aspect-video object-cover grayscale transition-all duration-500"
            :class="sunset ? 'opacity-50' : 'hover:grayscale-0'"
          >
          <section class="flex h-full flex-col p-5">
            <h3 class="flex items-center gap-2 text-base font-semibold text-highlighted">
              {{ title }}
              <UBadge
                v-if="sunset"
                label="Sunset"
                variant="subtle"
                color="neutral"
                size="sm"
              />
            </h3>
            <p class="text-description my-2 text-sm leading-relaxed">{{ description }}</p>
            <span class="mt-auto font-mono text-[11px] tracking-wider text-muted">{{ stack }}</span>
          </section>
        </article>
      </component>
    </li>
  </ul>
</template>

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
    image: 'picdiff.webp',
    title: 'PicDiff',
    description: 'A high-precision image comparison tool that helps you catch even subtle changes across edits and AI-generated variations.',
    stack: 'Nuxt, NuxtUI, Better-Auth',
    url: 'https://picdiff.dev',
  },
  {
    image: 'web-toolbox.webp',
    title: 'Web ToolBox',
    description: 'A comprehensive collection of lightweight, browser-based utilities designed to streamline daily developer workflows.',
    stack: 'Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://web-toolbox.dev',
  },
  {
    image: 'tints-and-shades.webp',
    title: 'Tints and Shades Generator',
    description: 'A minimalist color tool for generating precise monochromatic variations, helping designers create consistent color scales.',
    stack: 'Nuxt, NuxtUI',
    url: 'https://tintsshades.web-toolbox.dev',
  },
  {
    image: 'release-viewer.webp',
    title: 'Release Viewer',
    description: 'A centralized dashboard for tracking GitHub releases across multiple repositories to stay updated with open-source projects.',
    stack: 'Nuxt, NuxtUI, Cloudflare Workers',
    url: 'https://release-viewer.web-toolbox.dev',
  },
  {
    image: 'portfolio-site.webp',
    title: 'Portfolio site',
    description: 'A personal showcase crafted with a focus on typography, motion, and clean UI to present my latest work and photography.',
    stack: 'Nuxt, TailwindCSS',
    url: 'https://k-urtica.github.io',
  },
  {
    image: 'japan-travel-map.webp',
    title: 'Japan Travel Map',
    sunset: true,
    description: 'An interactive mapping service that allowed users to visualize and share their journeys across Japan’s 47 prefectures.',
    stack: 'Nuxt, Vuetify',
  },
  {
    image: 'blog-site.webp',
    title: 'My Blog',
    description: 'A high-performance, Markdown-driven blog built to explore the Jamstack ecosystem and modern static site generation.',
    stack: 'Gatsby, TailwindCSS',
    sunset: true,
  },
  {
    image: 'qt-visualizer.webp',
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
        class="h-full"
      >
        <article
          class="group flex h-full flex-col overflow-hidden rounded-lg border bg-muted/50 transition-colors duration-500 hover:border-accented hover:bg-muted"
        >
          <img
            :alt="title"
            :src="`/images/portfolio/${image}`"
            class="aspect-video origin-bottom scale-100 object-cover brightness-75 transition-all duration-500 will-change-transform group-hover:scale-105"
            :class="sunset ? 'opacity-70' : 'group-hover:brightness-100'"
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

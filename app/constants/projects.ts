import type { Project } from '~/types/project';

export const SELECTED_WORKS: Project[] = [
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
];

export const ARCHIVED_WORKS: Project[] = [
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

export const ALL_PROJECTS: Project[] = [...SELECTED_WORKS, ...ARCHIVED_WORKS];

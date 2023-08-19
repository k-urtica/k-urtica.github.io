<template>
  <div class="flex h-screen px-5">
    <glass-card tag="article" class="relative m-auto w-full py-9 px-7 sm:w-112">
      <header>
        <h1 class="mb-3 text-4xl font-bold text-slate-50">K</h1>
        <p class="text-sm text-slate-200">Web developer working in Japan.</p>
        <p class="text-sm text-slate-200">I love programming and traveling.</p>
      </header>

      <section class="mt-7 mb-3 border-t border-slate-600">
        <ul>
          <li v-for="menu in menus" :key="menu.title" class="mt-5">
            <app-link :to="menu.to" class="text-indigo-300">
              <h2
                class="relative text-xl font-bold underline-offset-2 hover:underline"
              >
                {{ menu.title }}
                <span class="absolute right-0 top-1.5">
                  <mdi-icon :icon="menu.icon" color="#a5b4fc" size="18" />
                </span>
              </h2>
            </app-link>
            <p class="mt-1 text-sm text-slate-200/90">
              {{ menu.caption }}
            </p>
          </li>
        </ul>
      </section>

      <footer class="absolute bottom-0 left-1/2 -translate-x-1/2">
        <app-link
          to="https://github.com/k-urtica/k-urtica.github.io"
          class="text-sm text-indigo-300/90"
        >
          Source Code
        </app-link>
      </footer>
    </glass-card>
  </div>
</template>

<script setup lang="ts">
import { mdiArrowRight, mdiOpenInNew } from '@mdi/js';

const menus = [
  {
    title: 'About',
    to: '/about',
    caption: 'About me.',
    icon: mdiArrowRight,
  },
  {
    title: 'Portfolio',
    to: '/portfolio',
    caption: 'Personal projects.',
    icon: mdiArrowRight,
  },
  {
    title: 'Picture',
    to: '/picture',
    caption: 'A scene from the travel.',
    icon: mdiArrowRight,
  },
  {
    title: 'Blog',
    to: 'https://knote.dev',
    caption: 'My personal Blog.',
    icon: mdiOpenInNew,
  },
  {
    title: 'Twitter',
    to: 'https://twitter.com/k_urtica',
    caption: 'Follow me.',
    icon: mdiOpenInNew,
  },
];
</script>

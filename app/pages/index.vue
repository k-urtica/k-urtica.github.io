<script setup lang="ts">
const menus = [
  {
    title: 'X (formerly Twitter)',
    to: 'https://x.com/k_urtica',
    icon: 'i-simple-icons-x',
  },
  {
    title: 'GitHub Profile',
    to: 'https://github.com/k-urtica',
    icon: 'i-lucide-github',
  },
];
</script>

<template>
  <main class="selection:bg-zinc-800 selection:text-white">
    <UContainer class="max-w-3xl space-y-32 py-24 md:py-32">
      <Motion
        as="section"
        :initial="{ opacity: 0, y: 12 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }"
      >
        <h1 class="mb-6 text-4xl font-semibold tracking-tight text-highlighted">
          K
        </h1>
        <div class="max-w-xl space-y-4 text-base leading-relaxed text-muted">
          <p>
            Front-end developer crafting web experiences in Tokyo.
            Passionate about clean code, UX design, and exploring new places.
          </p>
          <p>
            Building tools and interfaces that focus on simplicity, performance, and aesthetic details.
          </p>
        </div>

        <div class="mt-8 flex items-center gap-5">
          <ULink
            v-for="menu in menus"
            :key="menu.title"
            :to="menu.to"
            :aria-label="menu.title"
            target="_blank"
          >
            <UIcon :name="menu.icon" class="size-5" />
          </ULink>
        </div>
      </Motion>

      <Motion
        as="section"
        :initial="{ opacity: 0, y: 12 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-10% 0px' }"
        :transition="{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }"
      >
        <div class="mb-8 flex items-center gap-4">
          <h2 class="text-xl font-medium text-highlighted">Projects</h2>
          <div class="bg-border-muted h-px w-full flex-1" />
        </div>
        <PortfolioGallery />
      </Motion>

      <Motion
        as="section"
        :initial="{ opacity: 0, y: 12 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, margin: '-10% 0px' }"
        :transition="{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }"
      >
        <div class="mb-8 flex items-center gap-4">
          <h2 class="text-xl font-medium text-highlighted">Photography</h2>
          <div class="bg-border-muted h-px w-full flex-1" />
        </div>
        <PhotoGallery />
      </Motion>

      <Motion
        as="footer"
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 1, delay: 0.2, ease: 'linear' }"
        class="pb-12 text-center text-sm text-dimmed"
      >
        <p>© {{ new Date().getFullYear() }} K. All rights reserved.</p>
      </Motion>
    </UContainer>
  </main>
</template>

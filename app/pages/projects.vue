<script setup lang="ts">
import { ALL_PROJECTS } from '~/constants/projects';

useSeoMeta({
  title: 'Projects Archive',
});
</script>

<template>
  <Motion
    as="section"
    :initial="{ opacity: 0, y: 12 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }"
  >
    <div class="mb-12 flex items-center gap-4">
      <UButton
        to="/"
        icon="i-lucide-arrow-left"
        variant="ghost"
        color="neutral"
        aria-label="Back to home"
      />
      <h1 class="text-2xl font-semibold tracking-tight text-highlighted">
        Projects Archive
      </h1>
    </div>

    <p class="mb-12 max-w-xl text-base leading-relaxed text-muted">
      A collection of projects, experiments, and past works.
      This archive includes everything from current tools to sunsetted experiments.
    </p>

    <PortfolioGallery :projects="ALL_PROJECTS" />

    <div class="mt-12 flex justify-center">
      <UButton
        to="/"
        label="Back to Home"
        variant="link"
        color="neutral"
        icon="i-lucide-arrow-left"
      />
    </div>
  </Motion>
</template>

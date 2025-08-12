<script setup lang="ts">
import { motion } from 'motion-v';

useSeoMeta({
  title: 'Portfolio',
});
</script>

<template>
  <div class="flex min-h-dvh items-center">
    <Motion as-child v-bind="fade()">
      <GlassCard class="mx-auto flex max-w-5xl flex-col gap-14">
        <NavLink
          class="absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl border-b border-l border-muted bg-gray-700/50"
        />

        <motion.div v-bind="slideUp()">
          <header>
            <h1 class="text-4xl font-bold text-primary-200">Portfolio</h1>
            <p class="mt-6">Some of my personal works.</p>
          </header>

          <section class="mt-10 space-y-2">
            <p>I like to work on personal projects outside of work.</p>
            <p>I often use Vue.js/Nuxt for development tools!</p>
          </section>
        </motion.div>

        <motion.section v-bind="slideUp({ delay: 0.2 })">
          <PortfolioLists />
        </motion.section>
      </GlassCard>
    </Motion>
  </div>
</template>

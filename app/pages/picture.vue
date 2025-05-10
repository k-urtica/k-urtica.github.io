<script setup lang="ts">
import { motion } from 'motion-v';

useHead({
  title: 'Picture',
});
</script>

<template>
  <div class="flex min-h-dvh items-center px-5 py-10 md:py-20">
    <Motion as-child v-bind="fade()">
      <GlassCard class="mx-auto flex max-w-5xl flex-col gap-14 p-5 md:p-8">
        <NavLink
          class="absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl border-b border-l border-muted bg-gray-700/50"
        />

        <motion.div v-bind="slideUp()">
          <header>
            <h1 class="text-4xl font-bold text-primary-200">Picture</h1>
            <p class="mt-6">Some fascinating travel scenes.</p>
          </header>

          <section class="mt-10 space-y-2">
            <p>I love to travel as much as I love programming✈</p>
            <p>
              I have traveled to many places in the world and Japan. I especially love
              Southeast Asian countries, which are full of passion and vibrancy😆
            </p>
          </section>
        </motion.div>

        <motion.section v-bind="slideUp({ delay: 0.2 })">
          <PictureLists />
        </motion.section>
      </GlassCard>
    </Motion>
  </div>
</template>

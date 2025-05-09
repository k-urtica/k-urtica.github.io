<script setup lang="ts">
useHead({
  title: 'Portfolio',
  titleTemplate: '%s | K - Web Developer',
});
</script>

<template>
  <div class="flex min-h-dvh items-center px-5 py-10 md:py-20">
    <GlassCard tag="article" class="mx-auto max-w-5xl p-5 md:p-8">
      <NavLink
        class="absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl border-b border-l border-muted bg-gray-700/50"
      />

      <FadeUp>
        <header>
          <h1 class="text-4xl font-bold text-primary-200 underline underline-offset-8">
            Portfolio
          </h1>
          <p class="mt-6 text-zinc-200/90">Some of my personal works.</p>
        </header>

        <section class="mt-14 text-zinc-200">
          <p class="mt-2">I like to work on personal projects outside of work.</p>
          <p class="mt-2">I often use Vue.js/Nuxt for development tools!</p>
        </section>
      </FadeUp>

      <FadeUp delay="0.35s">
        <section class="mt-14">
          <portfolio-lists />
        </section>
      </FadeUp>
    </GlassCard>
  </div>
</template>

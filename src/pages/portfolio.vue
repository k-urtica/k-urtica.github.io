<script setup lang="ts">
useHead({
  title: 'Portfolio',
  titleTemplate: '%s | K - Web Developer',
});
</script>

<template>
  <div class="flex min-h-dvh items-center px-5 py-20">
    <GlassCard tag="article" class="mx-auto max-w-5xl p-8">
      <NavLink
        class="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-slate-300/20 bg-gray-700/50"
      />

      <FadeUp>
        <header>
          <h1 class="text-4xl font-bold text-orange-200 underline underline-offset-8">
            Portfolio
          </h1>
          <p class="mt-6 text-zinc-200/90">
            Some of my personal works.
          </p>
        </header>

        <section class="mt-14 text-zinc-200">
          <p class="mt-2">
            I like to work on personal projects outside of work.
          </p>
          <p class="mt-2">
            I often use Vue.js/NuxtJS for development tools!
          </p>
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

<template>
  <div class="px-4 py-16 sm:px-0 sm:py-20">
    <glass-card tag="article" class="relative p-6 sm:p-9">
      <nav-link
        class="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-slate-300/20 bg-gray-700/50"
      />

      <fade-up>
        <header>
          <h1 class="text-4xl font-bold text-lime-300 underline underline-offset-8">Portfolio</h1>
          <p class="mt-6 text-slate-300/95">Some of my personal works.</p>
        </header>

        <section class="mt-14 text-slate-200">
          <p class="mt-2">I like to work on personal projects outside of work.</p>
          <p class="mt-2">I often use Vue.js/NuxtJS for development tools!</p>
        </section>
      </fade-up>

      <fade-up delay="0.35s">
        <section class="mt-14">
          <portfolio-lists />
        </section>
      </fade-up>
    </glass-card>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio',
  titleTemplate: '%s | K - Web Developer',
});
</script>

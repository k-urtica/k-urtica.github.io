<script setup lang="ts">
useHead({
  title: 'Picture',
  titleTemplate: '%s | K - Web Developer',
});
</script>

<template>
  <div class="flex min-h-dvh items-center px-5 py-10 md:py-20">
    <GlassCard tag="article" class="mx-auto max-w-5xl p-5 md:p-8">
      <NavLink
        class="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-slate-300/20 bg-gray-700/50"
      />

      <FadeUp>
        <header>
          <h1 class="text-4xl font-bold text-orange-200 underline underline-offset-8">
            Picture
          </h1>
          <p class="mt-6 text-zinc-200/90">
            Some fascinating travel scenes.
          </p>
        </header>

        <section class="mt-14 text-zinc-200 ">
          <p class="mt-2">
            I love to travel as much as I love programming✈
          </p>
          <p class="mt-2">
            I have traveled to many places in the world and Japan. I especially love Southeast Asian
            countries, which are full of passion and vibrancy😆
          </p>
        </section>
      </FadeUp>

      <FadeUp delay="0.35s">
        <section class="mt-14">
          <Picture-lists />
        </section>
      </FadeUp>
    </GlassCard>
  </div>
</template>

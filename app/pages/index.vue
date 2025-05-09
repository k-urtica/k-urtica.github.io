<script setup lang="ts">
useHead({
  title: 'K',
});

const menus = [
  {
    title: 'About',
    to: '/about',
    caption: 'About me.',
  },
  {
    title: 'Portfolio',
    to: '/portfolio',
    caption: 'Personal projects.',
  },
  {
    title: 'Picture',
    to: '/picture',
    caption: 'A scene from the travel.',
  },
  {
    title: 'Blog',
    to: 'https://knote.dev',
    caption: 'My personal Blog.',
  },
  {
    title: 'X',
    to: 'https://x.com/k_urtica',
    caption: 'Follow me.',
  },
];
</script>

<template>
  <div class="flex min-h-dvh items-center p-5">
    <GlassCard tag="article" class="mx-auto w-full p-8 sm:w-[500px]">
      <header>
        <h1 class="mb-3 text-4xl font-bold text-slate-50">K</h1>
        <p class="text-sm text-slate-200">Web developer working in Japan.</p>
        <p class="text-sm text-slate-200">I love programming and traveling.</p>
      </header>

      <section class="mt-6 mb-3 border-t border-zinc-400/40">
        <ul class="mt-5 space-y-5">
          <li v-for="{ title, to, caption } in menus" :key="title">
            <NuxtLink
              :to
              class="group flex items-center justify-between gap-2 text-primary-200"
            >
              <h2 class="text-xl font-bold underline-offset-2 group-hover:underline">
                {{ title }}
              </h2>
              <UIcon
                :name="
                  to.startsWith('http')
                    ? 'i-lucide-external-link'
                    : 'i-lucide-arrow-right'
                "
              />
            </NuxtLink>
            <p class="mt-1 text-sm text-zinc-200/80">
              {{ caption }}
            </p>
          </li>
        </ul>
      </section>

      <footer class="absolute bottom-1 left-1/2 -translate-x-1/2">
        <NuxtLink
          to="https://github.com/k-urtica/k-urtica.github.io"
          target="_blank"
          class="flex items-center gap-1 text-sm text-zinc-200/90"
        >
          GitHub
          <UIcon name="i-lucide-github" />
        </NuxtLink>
      </footer>
    </GlassCard>
  </div>
</template>

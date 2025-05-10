<script setup lang="ts">
useHead({
  title: 'K',
  titleTemplate: '%s - ' + 'Web Developer',
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
    caption: 'Travel photography highlights.',
  },
  {
    title: 'Blog',
    to: 'https://knote.dev',
    caption: 'My personal Blog.',
  },
  {
    title: 'X',
    to: 'https://x.com/k_urtica',
    caption: 'Connect with me online.',
  },
];
</script>

<template>
  <div class="flex min-h-dvh items-center p-5">
    <Motion as-child v-bind="fade()">
      <GlassCard class="mx-auto w-full p-8 sm:w-[520px]">
        <header>
          <h1 class="mb-3 text-4xl font-bold text-highlighted">K</h1>
          <p class="text-sm">Front-end developer crafting web experiences in Tokyo.</p>
          <p class="text-sm">
            Passionate about clean code, UX design, and exploring new places.
          </p>
        </header>

        <section class="mt-6 mb-4 border-t border-muted/30">
          <ul class="mt-4 space-y-5">
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
              <p class="mt-1 text-sm text-toned">
                {{ caption }}
              </p>
            </li>
          </ul>
        </section>

        <footer class="absolute bottom-1 left-1/2 -translate-x-1/2">
          <ULink
            to="https://github.com/k-urtica/k-urtica.github.io"
            target="_blank"
            class="flex items-center gap-1 text-sm"
          >
            GitHub
            <UIcon name="i-lucide-github" />
          </ULink>
        </footer>
      </GlassCard>
    </Motion>
  </div>
</template>

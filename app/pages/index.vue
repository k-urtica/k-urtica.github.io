<script setup lang="ts">
useSeoMeta({
  description: 'Front-end developer crafting web experiences in Tokyo.',
});

const menus = [
  {
    title: '@k_urtica',
    to: 'https://x.com/k_urtica',
    icon: 'i-simple-icons-x',
  },
  {
    title: 'GitHub',
    to: 'https://github.com/k-urtica',
    icon: 'i-lucide-github',
  },
];

// Intersection Observer for fade-in animations on scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-reveal');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <main class="min-h-dvh bg-[#09090b] text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">
    <div class="mx-auto max-w-3xl space-y-32 px-6 py-24 md:py-32">
      <!-- Intro Section -->
      <section class="reveal-on-scroll translate-y-4 opacity-0 transition-all duration-1000 ease-out">
        <h1 class="mb-6 text-4xl font-semibold tracking-tight text-white">
          K
        </h1>
        <div class="max-w-xl space-y-4 text-base leading-relaxed text-zinc-400">
          <p>
            Front-end developer crafting web experiences in Tokyo.
            Passionate about clean code, UX design, and exploring new places.
          </p>
          <p>
            Building tools and interfaces that focus on simplicity, performance, and aesthetic details.
          </p>
        </div>

        <div class="mt-8 flex items-center gap-6">
          <NuxtLink
            v-for="menu in menus"
            :key="menu.title"
            :to="menu.to"
            target="_blank"
            class="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
          >
            <UIcon :name="menu.icon" class="size-4" />
            <span>{{ menu.title }}</span>
          </NuxtLink>
        </div>
      </section>

      <!-- Projects Section -->
      <section class="reveal-on-scroll translate-y-4 opacity-0 transition-all delay-[200ms] duration-1000 ease-out">
        <div class="mb-8 flex items-center gap-4">
          <h2 class="text-xl font-medium text-white">Projects</h2>
          <div class="h-px w-full flex-1 bg-zinc-800/50" />
        </div>
        <PortfolioLists />
      </section>

      <!-- Photography Section -->
      <section class="reveal-on-scroll translate-y-4 opacity-0 transition-all delay-[400ms] duration-1000 ease-out">
        <div class="mb-8 flex items-center gap-4">
          <h2 class="text-xl font-medium text-white">Photography</h2>
          <div class="h-px w-full flex-1 bg-zinc-800/50" />
        </div>
        <PictureLists />
      </section>

      <!-- Footer -->
      <footer class="reveal-on-scroll pb-12 text-center text-sm text-zinc-600 opacity-0 transition-all delay-[600ms] duration-1000 ease-out">
        <p>© {{ new Date().getFullYear() }} K. All rights reserved.</p>
      </footer>
    </div>
  </main>
</template>

<style scoped>
.animate-reveal {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>

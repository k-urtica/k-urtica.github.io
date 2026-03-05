<template>
  <main class="selection:bg-zinc-800 selection:text-white">
    <UContainer class="max-w-3xl py-24 md:py-32">
      <slot />

      <Motion
        as="footer"
        :initial="{ opacity: 0 }"
        :while-in-view="{ opacity: 1 }"
        :viewport="{ once: true }"
        :transition="{ duration: 1, delay: 0.2, ease: 'linear' }"
        class="mt-32 space-y-4 pb-12 text-center text-sm text-dimmed"
      >
        <p>© {{ new Date().getFullYear() }} K. All rights reserved.</p>

        <UButton
          to="https://github.com/k-urtica/k-urtica.github.io"
          icon="i-lucide-github"
          size="sm"
          color="neutral"
          variant="ghost"
          aria-label="GitHub repository"
          class="rounded-full"
        />
      </Motion>
    </UContainer>
  </main>
</template>

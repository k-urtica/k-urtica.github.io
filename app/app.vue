<script setup lang="ts">
import { motion } from 'motion-v';

defineOgImageComponent('OgDefault');

const route = useRoute();
const siteConfig = useSiteConfig();

useHead({
  titleTemplate: '%s - ' + 'K',
  meta: () => [
    {
      property: 'og:url',
      content: `${siteConfig.url}${route.path}`,
    },
  ],
});

const hideContent = ref(false);
const bgSrc = ref('/bg_dark.webp');

const controlButtons = [
  {
    icon: 'i-lucide-layers-2',
    ariaLabel: 'Visible content',
    onClick: () => (hideContent.value = !hideContent.value),
  },
  {
    label: '1',
    ariaLabel: 'Sunrise',
    onClick: () => (bgSrc.value = '/bg_light.webp'),
  },
  {
    label: '2',
    ariaLabel: 'Sunset',
    onClick: () => (bgSrc.value = '/bg_dark.webp'),
  },
];
</script>

<template>
  <div class="cover min-h-dvh bg-neutral-900">
    <AnimatePresence :initial="false" mode="sync">
      <motion.img
        :key="bgSrc"
        :initial="{ opacity: 0, filter: 'blur(20px)' }"
        :animate="{ opacity: 1, filter: 'blur(0px)' }"
        :exit="{ opacity: 0 }"
        :transition="{ duration: 0.8 }"
        :src="bgSrc"
        aria-hidden="true"
        fetch-priority="high"
        class="pointer-events-none fixed inset-0 size-full object-cover"
      />
    </AnimatePresence>

    <div
      class="pointer-events-none fixed bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/45 to-transparent"
    />
    <div
      class="pointer-events-none fixed top-0 left-0 h-full w-1/6 bg-gradient-to-r from-black/30 to-transparent"
    />
    <div
      class="pointer-events-none fixed top-0 right-0 h-full w-1/6 bg-gradient-to-l from-black/30 to-transparent"
    />

    <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
      <div
        class="absolute top-2 right-2 flex items-center gap-2 rounded-lg bg-muted/30 px-2 py-1"
      >
        <UTooltip
          v-for="({ icon, label, ariaLabel, onClick }, idx) in controlButtons"
          :key="idx"
          :text="ariaLabel"
          arrow
        >
          <UButton
            :icon
            :label
            :aria-label
            color="neutral"
            variant="subtle"
            size="xs"
            @click="onClick()"
          />
        </UTooltip>
      </div>

      <NuxtPage
        :data-hide-content="hideContent"
        class="px-4 py-12 data-[hide-content='true']:hidden md:py-24"
      />
    </UApp>
  </div>
</template>

<style scoped>
.cover::after {
  content: '';
  position: fixed;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  background-image: url('/noise.webp');
  animation: noise-anim 1s steps(7) infinite;
}

@keyframes noise-anim {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 140px 140px;
  }
}
</style>

<script setup lang="ts">
import type { Project } from '~/types/project';
import { NuxtLink } from '#components';

defineProps<{
  projects: Project[];
}>();
</script>

<template>
  <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
    <li v-for="{ image, title, description, stack, url, sunset } in projects" :key="title">
      <component
        :is="url ? NuxtLink : 'div'"
        :to="url"
        :target="url && '_blank'"
        class="h-full"
      >
        <article
          class="group flex h-full flex-col overflow-hidden rounded-lg border bg-muted/50 transition-colors duration-500 hover:border-accented hover:bg-muted"
        >
          <img
            :alt="title"
            :src="`/images/portfolio/${image}`"
            class="aspect-video origin-bottom scale-100 object-cover brightness-75 transition-all duration-500 will-change-transform group-hover:scale-105"
            :class="sunset ? 'opacity-70' : 'group-hover:brightness-100'"
          >

          <section class="flex h-full flex-col p-5">
            <h3 class="flex items-center gap-2 text-base font-semibold text-highlighted">
              {{ title }}
              <UBadge
                v-if="sunset"
                label="Sunset"
                variant="subtle"
                color="neutral"
                size="sm"
              />
            </h3>
            <p class="text-description my-2 text-sm leading-relaxed">{{ description }}</p>
            <span class="mt-auto font-mono text-[11px] tracking-wider text-muted">{{ stack }}</span>
          </section>
        </article>
      </component>
    </li>
  </ul>
</template>

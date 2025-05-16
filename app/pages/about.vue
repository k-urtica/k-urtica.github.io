<script setup lang="ts">
import { motion } from 'motion-v';

useHead({
  title: 'About',
});
</script>

<template>
  <div class="flex min-h-dvh items-center">
    <Motion as-child v-bind="fade({ delay: 0.1 })">
      <GlassCard class="mx-auto flex max-w-5xl flex-col gap-14">
        <NavLink
          class="absolute top-0 right-0 rounded-tr-2xl rounded-bl-xl border-b border-l border-muted bg-gray-700/50"
        />

        <motion.div v-bind="slideUp()">
          <header>
            <h1 class="text-4xl font-bold text-primary-200">About</h1>
            <p class="mt-6">Brief introduction about me.</p>
          </header>

          <section class="mt-10 space-y-2">
            <p>Hi there👋 I'm K.</p>
            <p>
              I'm a web developer based in Tokyo. Been coding professionally since 2013,
              and still enjoying the ride!
            </p>
            <p>
              I've bounced around a few companies and worked on some pretty cool projects
              along the way. Started out as a backend dev (C and Java stuff), but these
              days I'm all about frontend.
            </p>
            <p>
              When I'm not coding, I spend time with my kids and dive into gaming
              adventures.
            </p>
          </section>
        </motion.div>

        <motion.section v-bind="slideUp({ delay: 0.1 })">
          <h2 class="mb-3 text-2xl font-bold text-primary-200">Skills</h2>
          <p class="text-zinc-300/80">
            Note: 😅It may seem a bit silly to describe one's own skills in this way.
            <br>
            And, of course, there are things not written here!
          </p>

          <SkillLists class="mt-6" />
        </motion.section>

        <motion.section v-bind="slideUp({ delay: 0.15 })">
          <h2 class="mb-3 text-2xl font-bold text-primary-200">Likes</h2>
          <p class="text-zinc-200">Some of my favorite things.</p>
          <p class="text-zinc-200">
            A scene from the travel can be seen
            <NuxtLink to="/picture" class="text-orage-200 underline underline-offset-2">
              here.
            </NuxtLink>
          </p>

          <LikeLists class="mt-6" />
        </motion.section>

        <motion.section v-bind="slideUp({ delay: 0.2 })">
          <h2 class="mb-3 text-2xl font-bold text-primary-200">Contact</h2>
          <p class="text-zinc-200">
            Contact me on
            <NuxtLink
              to="https://x.com/k_urtica"
              target="_blank"
              class="inline-flex items-center gap-1 text-primary-200"
            >
              X
              <UIcon name="i-lucide-external-link" />
            </NuxtLink>
          </p>
        </motion.section>
      </GlassCard>
    </Motion>
  </div>
</template>

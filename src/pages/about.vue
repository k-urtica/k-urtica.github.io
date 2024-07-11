<script setup lang="ts">
import { mdiOpenInNew } from '@mdi/js';

useHead({
  title: 'About',
  titleTemplate: '%s | K - Web Developer',
});
</script>

<template>
  <div class="flex min-h-dvh items-center px-5 py-20">
    <GlassCard tag="article" class="mx-auto max-w-5xl p-8">
      <NavLink
        class="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-zinc-300/20 bg-gray-700/50"
      />

      <FadeUp>
        <header>
          <h1 class="text-4xl font-bold text-orange-200 underline underline-offset-8">
            About
          </h1>
          <p class="mt-6 text-zinc-200/90">
            Brief introduction about me.
          </p>
        </header>

        <section class="mt-14 text-zinc-200">
          <p class="mt-2">
            Hi there👋 I'm K.
          </p>
          <p class="mt-2">
            I'm a web developer working in Tokyo, Japan.
            I have been working as a developer since 2013.
          </p>
          <p class="mt-2">
            I have worked for several companies and participated in a number of interesting projects
            there. I started my career as a backend engineer (C and Java), but now I specialize in frontend.
          </p>
        </section>
      </FadeUp>

      <FadeUp delay="0.35s">
        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-orange-200">
            Skills
          </h2>
          <p class="text-zinc-300/80">
            Note: 😅It may seem a bit silly to describe one's own skills in this way.
            <br>
            And, of course, there are things not written here!
          </p>

          <SkillLists class="mt-6" />
        </section>

        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-orange-200">
            Likes
          </h2>
          <p class="text-zinc-200">
            Some of my favorite things.
          </p>
          <p class="text-zinc-200">
            A scene from the travel can be seen
            <NuxtLink to="/picture" class="text-orage-200 underline underline-offset-2">
              here.
            </NuxtLink>
          </p>

          <LikeLists class="mt-6" />
        </section>

        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-orange-200">
            Contact
          </h2>
          <p class="text-zinc-200">
            Contact me on
            <NuxtLink
              to="https://twitter.com/k_urtica"
              target="_blank"
              class="inline-flex items-center gap-1 text-orange-200"
            >
              Twitter
              <MdiIcon size="16" :icon="mdiOpenInNew" />
            </NuxtLink>
          </p>
        </section>
      </FadeUp>
    </GlassCard>
  </div>
</template>

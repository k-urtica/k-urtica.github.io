<script setup lang="ts">
import { mdiOpenInNew } from '@mdi/js';

useHead({
  title: 'About',
  titleTemplate: '%s | K - Web Developer',
});
</script>

<template>
  <div class="px-4 py-16 sm:px-0 sm:py-20">
    <glass-card tag="article" class="relative p-6 sm:p-9">
      <nav-link
        class="absolute right-0 top-0 rounded-bl-xl rounded-tr-2xl border-b border-l border-slate-300/20 bg-gray-700/50"
      />

      <fade-up>
        <header>
          <h1 class="text-4xl font-bold text-lime-300 underline underline-offset-8">
            About
          </h1>
          <p class="mt-6 text-slate-300/95">
            Brief introduction about me.
          </p>
        </header>

        <section v-twemoji class="mt-14 text-slate-200">
          <p class="mt-2">
            Hi there👋 I'm K.
          </p>
          <p class="mt-2">
            I'm a web developer working in Tokyo, Japan. I have been working as a developer since
            2013.
          </p>
          <p class="mt-2">
            I have worked for several companies and participated in a number of interesting projects
            there.
          </p>
          <p class="mt-2">
            👶Currently on leave to raise my cute baby! (through Oct. 2022)
          </p>
        </section>
      </fade-up>

      <fade-up delay="0.35s">
        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-lime-300">
            Skills
          </h2>
          <p v-twemoji class="text-slate-300/80">
            Note: 😅It may seem a bit silly to describe one's own skills in this way.
            <br>
            And, of course, there are things not written here!
          </p>
          <skill-lists class="mt-6" />
        </section>

        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-lime-300">
            Likes
          </h2>
          <p class="text-slate-200">
            Some of my favorite things.
          </p>
          <p class="text-slate-200">
            A scene from the travel can be seen
            <NuxtLink to="/picture" class="text-teal-300 underline underline-offset-2">
              here.
            </NuxtLink>
          </p>
          <like-lists class="mt-6" />
        </section>

        <section class="mt-14">
          <h2 class="mb-3 text-2xl font-bold text-lime-300">
            Contact
          </h2>
          <p class="text-slate-200">
            Contact me on
            <NuxtLink
              to="https://twitter.com/k_urtica"
              target="_blank"
              class="inline-flex items-center gap-1 text-teal-300"
            >
              Twitter
              <MdiIcon size="16" :icon="mdiOpenInNew" />
            </NuxtLink>
          </p>
        </section>
      </fade-up>
    </glass-card>
  </div>
</template>

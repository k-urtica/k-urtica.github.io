<template>
  <div class="h-screen px-5 pt-24">
    <glass-card class="p-6 sm:p-9">
      <div>
        <h1
          class="text-4xl font-bold text-emerald-300 underline underline-offset-8"
        >
          About
        </h1>
        <p class="mt-5 text-slate-300/80">Brief introduction about me.</p>
      </div>

      <div class="mt-14 text-slate-300">
        <p class="mt-2">Hi there👋 I'm K.</p>
        <p class="mt-2">
          I'm a web developer working in Tokyo, Japan. I have been working as a
          developer since 2013.
        </p>
        <p class="mt-2">
          I have worked for several companies and participated in a number of
          interesting projects there.
        </p>

        <p class="mt-2">👶Currently on leave to raise my cute baby!</p>
      </div>

      <div class="mt-14">
        <h2 class="text-xl font-bold text-emerald-300">Skills</h2>
        <p class="mt-3 text-slate-400">
          😅There seem to be pros and cons to describing one's skills in this
          way.
        </p>

        <div
          class="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          <div
            class="flex flex-col rounded-2xl border border-slate-200/20 bg-slate-700/30 p-4 text-center"
          >
            <fa-icon size="3x" class="text-emerald-300" :icon="faVuejs" />
            <h3 class="mt-2 text-slate-300">Vue.js</h3>
            <div class="flex basis-1 justify-center">
              <fa-icon class="text-yellow-200/90" size="xs" :icon="faStar" />
            </div>
          </div>
        </div>
      </div>
    </glass-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default Vue.extend({
  data() {
    return {
      faVuejs,
      faStar,
    };
  },
});
</script>

<script setup lang="ts">
defineProps<{
  description?: string;
}>();
</script>

<template>
  <div class="bg-black">
    <img src="/ogbackground.jpg" class="absolute inset-0 size-full object-cover" />

    <div class="flex h-full items-center justify-center">
      <div class="flex items-center rounded-lg bg-black/40 px-8 py-12">
        <div class="text-5xl font-black text-white">K - Web Developer</div>
        <div class="mt-10 px-20 text-center text-2xl text-balance text-white">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

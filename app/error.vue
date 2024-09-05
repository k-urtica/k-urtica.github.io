<script setup lang="ts">
const error = useError();

const title = ref('Error');

if (error.value?.statusCode === 404) {
  title.value = '404 Not Found';
}
else {
  title.value = 'Unknown Error';
}

useHead({
  title: title.value,
});
</script>

<template>
  <div class="grid min-h-screen place-content-center bg-zinc-900">
    <div class="container mx-auto max-w-5xl text-center">
      <h1 class="py-5 text-2xl font-bold text-zinc-300">
        {{ title }}
      </h1>
      <NuxtLink to="/" class="text-zinc-300 underline">
        Back to Top
      </NuxtLink>
    </div>
  </div>
</template>

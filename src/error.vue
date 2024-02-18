<template>
  <div class="bg-zinc-900 grid min-h-screen place-content-center">
    <div class="container mx-auto max-w-5xl text-center">
      <h1 class="text-zinc-300 font-bold text-2xl py-5">{{ title }}</h1>
      <AppLink to="/" class="text-zinc-300 underline">Back to Top</AppLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const error = useError();

const title = ref('Error');

if (error.value?.statusCode === 404) {
  title.value = '404 Not Found';
} else {
  title.value = 'Unknown Error';
}

useHead({
  title: title.value,
});
</script>

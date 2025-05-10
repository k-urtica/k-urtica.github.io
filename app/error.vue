<script setup lang="ts">
const error = useError();

const title = computed(() =>
  error.value?.statusCode === 404 ? '404 Not Found' : 'Unknown Error'
);

useHead({
  title: title.value,
  titleTemplate: '%s | ' + 'K - Web Developer',
});
</script>

<template>
  <div class="grid min-h-dvh place-content-center">
    <UContainer class="text-center">
      <h1 class="py-5 text-2xl font-bold text-highlighted">
        {{ title }}
      </h1>
      <ULink to="/" class="underline">Back to Top</ULink>
    </UContainer>
  </div>
</template>

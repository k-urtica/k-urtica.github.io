<template>
  <component :is="linkTag" v-bind="attr">
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
}>();

const isExternal = computed(() => /^https?:\/\//.test(props.to));

const linkTag = computed(() => (isExternal.value ? 'a' : 'NuxtLink'));

const attr = computed(() => {
  if (isExternal.value) {
    return {
      href: props.to,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  } else {
    props.to;
  }
});
</script>

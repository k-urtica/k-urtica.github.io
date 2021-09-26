<template>
  <component :is="linkTag" v-bind="attr">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue';

type InternalAttr = {
  to: { name: string };
};
type ExternalAttr = {
  href: String;
  target: String;
  rel: String;
};

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternal(): boolean {
      return /^https?:\/\//.test(this.to);
    },
    linkTag(): string {
      return this.isExternal ? 'a' : 'nuxt-link';
    },
    attr(): ExternalAttr | InternalAttr {
      if (this.isExternal) {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer',
        };
      } else {
        return {
          to: { name: this.to },
        };
      }
    },
  },
});
</script>

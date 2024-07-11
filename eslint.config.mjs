import antfu from '@antfu/eslint-config';

import tailwind from 'eslint-plugin-tailwindcss';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu({
    formatters: true,
    stylistic: {
      semi: true,
    },
    rules: {
      'vue/define-macros-order': [
        'warn',
        {
          order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
        },
      ],
    },

  }),
  [...tailwind.configs['flat/recommended'], {
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }],
);

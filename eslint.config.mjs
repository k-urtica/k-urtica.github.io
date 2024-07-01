import eslintConfigPrettier from 'eslint-config-prettier';
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/define-macros-order': [
      'warn',
      {
        order: ['defineOptions', 'defineModel', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],
    'vue/require-default-prop': 'off',

    ...eslintConfigPrettier.rules,
  },
});

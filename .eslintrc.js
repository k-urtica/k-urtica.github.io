module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@nuxt/eslint-config',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
    'import/order': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',

    'vue/define-macros-order': [
      'error',
      {
        order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
      },
    ],
    'vue/no-useless-v-bind': 'error',
    'vue/no-unused-refs': 'error',
    'vue/prefer-separate-static-class': 'error',
  },
};

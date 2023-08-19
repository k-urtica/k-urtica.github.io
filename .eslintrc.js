module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', '@nuxt/eslint-config', 'prettier'],
  plugins: [],
  rules: {
    'vue/max-attributes-per-line': 'off',
  },
};

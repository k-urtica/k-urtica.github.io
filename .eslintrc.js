module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["@nuxtjs", "prettier"],
  plugins: [],
  rules: {
    "vue/max-attributes-per-line": "off",
  },
};

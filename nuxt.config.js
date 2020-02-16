require("dotenv").config();
const { G_ANALYTICS } = process.env;

const description =
  "旅行／お酒好きバックエンドエンジニア『K』のポートフォリオサイトです。";

export default {
  mode: "universal",
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#"
    },
    titleTemplate: "%s -- " + "Back-end Developer",
    title: "K",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // SEO
      {
        hid: "description",
        name: "description",
        content: description
      },
      // OGP
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "『K』 | Back-end Developer"
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website"
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://kiysi.github.io/"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "『K』 | Back-end Developer"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: description
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://kiysi.github.io/img/k-portfolio-ogp.jpg"
      },
      // twitter
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:site",
        content: "@k_urtica"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  css: [],
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.G_ANALYTICS
      }
    ]
  ],
  modules: ["@nuxtjs/dotenv"],
  vuetify: {
    customVariables: ["~/assets/css/vuetify/variables.scss"]
  },
  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    G_ANALYTICS
  }
};

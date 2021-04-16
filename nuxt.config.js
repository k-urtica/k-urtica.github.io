require("dotenv").config();
const { G_ANALYTICS } = process.env;

const siteTitle = "K -- Back-end Developer";
const description =
  "旅行／お酒好きバックエンドエンジニア『K』のポートフォリオサイトです。";

export default {
  target: "static",
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#",
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
        content: description,
      },
      // OGP
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: siteTitle,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://k-urtica.github.io/",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: siteTitle,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://k-urtica.github.io/img/ogp-image.jpg",
      },
      // twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@k_urtica",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css",
      },
    ],
  },
  loading: { color: "#fff" },
  css: [],
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.G_ANALYTICS,
      },
    ],
  ],
  modules: ["@nuxtjs/dotenv"],
  vuetify: {
    customVariables: ["~/assets/css/vuetify/variables.scss"],
    defaultAssets: {
      icons: false,
    },
  },
  build: {
    extractCSS: true,
  },
  env: {
    G_ANALYTICS,
  },
};

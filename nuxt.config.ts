import { NuxtConfig } from '@nuxt/types';

const siteTitle = 'K - Web Developer';
const description =
  "Hey there! I'm K, a web developer who loves programming and traveling. This is my portfolio site.";

const config: NuxtConfig = {
  target: 'static',
  components: [{ path: '~/components', pathPrefix: false }],
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s - ' + 'Web Developer',
    title: 'K',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // SEO
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: siteTitle,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://k-urtica.github.io/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://k-urtica.github.io/ogp.png',
      },
      // twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@k_urtica',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  loading: false,

  css: ['~/assets/css/global.css'],

  plugins: ['~/plugins/ts-particles', '~/plugins/twemoji'],

  buildModules: [
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-135479814-6',
      },
    ],
    '@nuxt/image',
    '@nuxtjs/pwa',
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://k-urtica.github.io/',
    gzip: true,
  },

  pwa: {
    manifest: {
      name: siteTitle,
      short_name: siteTitle,
      description,
      display: 'standalone',
      theme_color: '#e8f1ff',
      background_color: '#e8f1ff',
      start_url: '/',
      useWebmanifestExtension: false,
    },
    // workbox: {
    //   offline: false,
    // },
  },

  build: {
    extractCSS: true,
  },
};

export default config;

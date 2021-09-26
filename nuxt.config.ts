import { NuxtConfig } from '@nuxt/types';

const siteTitle = 'K -- Back-end Developer';
const description =
  '旅すること／お酒を飲むことが好きなバックエンドエンジニア『K』のポートフォリオサイトです😉';

const config: NuxtConfig = {
  target: 'static',
  components: [{ path: '~/components', pathPrefix: false }],
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate: '%s -- ' + 'Back-end Developer',
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
  loading: { color: '#fff' },
  css: ['~/assets/css/global.scss'],
  plugins: [{ src: '~/plugins/aos', mode: 'client' }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-135479814-6',
      },
    ],
    '@nuxtjs/pwa',
  ],
  modules: ['@nuxtjs/sitemap'],

  sitemap: {
    hostname: 'https://k-urtica.github.io/',
    gzip: true,
  },
  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    optionsPath: './plugins/vuetify.options.ts',
    defaultAssets: false,
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
    extractCSS: {
      ignoreOrder: true,
    },
  },
};

export default config;

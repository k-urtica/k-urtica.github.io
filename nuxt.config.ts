const SITE_URL = 'https://k-urtica.github.io';
const SITE_NAME = 'K - Web Developer';
const DESCRIPTION =
  'Hi, I\'m K. Front-end developer based in Tokyo. Building web experiences with code and creativity.';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    '@nuxt/ui',
    'motion-v/nuxt',
    'nuxt-og-image',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: DESCRIPTION },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@k_urtica' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/main.css'],

  site: {
    name: SITE_NAME,
    url: SITE_URL,
  },

  colorMode: {
    preference: 'dark',
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-07-15',

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    defaults: {
      weights: ['400', '700'],
    },
  },

  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
    },
  },

  ogImage: {
    enabled: true,
    fonts: ['Exo+2:400', 'Exo+2:700'],
    zeroRuntime: true,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});

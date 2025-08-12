const SITE_URL = 'https://k-urtica.github.io';
const SITE_NAME = 'K - Web Developer';
const SITE_DESCRIPTION =
  'Hi, I\'m K. Front-end developer based in Tokyo. Building web experiences with code and creativity.';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/ui',
    'motion-v/nuxt',
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/main.css'],

  site: {
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    defaultLocale: 'en',
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

  linkChecker: {
    enabled: false,
  },

  ogImage: {
    enabled: false,
  },

  seo: {
    meta: {
      author: 'K',
      twitterCard: 'summary_large_image',
      ogType: 'website',
    },
    metaDataFiles: true,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});

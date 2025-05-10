const siteTitle = 'K - Web Developer';
const description =
  "Hey there! I'm K, a web developer who loves programming and traveling. This is my portfolio site.";

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
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
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: description },
        // OGP
        { property: 'og:site_name', content: siteTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://k-urtica.github.io/' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: description },
        { property: 'og:image', content: 'https://k-urtica.github.io/ogp.webp' },
        // twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@k_urtica' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/main.css'],

  site: {
    url: 'https://k-urtica.github.io',
  },

  colorMode: {
    preference: 'dark',
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
    },
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});

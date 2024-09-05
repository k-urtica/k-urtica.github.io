const siteTitle = 'K - Web Developer';
const description
  = 'Hey there! I\'m K, a web developer who loves programming and traveling. This is my portfolio site.';

export default defineNuxtConfig({
  compatibilityDate: '2024-07-19',

  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: {
        prefix: 'og: http://ogp.me/ns#',
      },
      titleTemplate: '%s - ' + 'Web Developer',
      title: 'K',
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

    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon'],

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  icon: {
    serverBundle: false,
    clientBundle: {
      scan: true,
    },
  },

  site: {
    url: 'https://k-urtica.github.io',
  },

  future: {
    compatibilityVersion: 4,
  },
});

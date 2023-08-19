const siteTitle = 'K - Web Developer';
const description =
  "Hey there! I'm K, a web developer who loves programming and traveling. This is my portfolio site.";

export default defineNuxtConfig({
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
  },

  css: ['~/assets/css/global.css'],

  plugins: ['~/plugins/twemoji'],

  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
});

import twemoji from 'twemoji';

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.directive('twemoji', {
    mounted(el) {
      el.innerHTML = twemoji.parse(el.innerHTML);
    },
  });
});

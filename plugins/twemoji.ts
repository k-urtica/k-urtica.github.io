import Vue from 'vue';
import twemoji from 'twemoji';

Vue.directive('twemoji', {
  inserted(el) {
    el.innerHTML = twemoji.parse(el.innerHTML);
  },
});

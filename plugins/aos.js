import Vue from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    // disable: 'phone'
    duration: 800
  });
};

Vue.mixin({
  watch: {
    "$route.path"() {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }
});

import { Context } from "@nuxt/types";
import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }: Context) => {
  // @ts-ignore
  // eslint-disable-next-line new-cap
  app.AOS = new AOS.init({
    duration: 800,
    delay: 0,
    once: true,
    easing: "ease-in-out",
    anchorPlacement: "bottom-bottom",
  });
};

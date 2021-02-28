<template>
  <div>
    <header-hero />
    <my-profile />
    <my-skills />
    <my-product />
  </div>
</template>

<script>
import HeaderHero from "~/components/main/HeaderHero.vue";
import MyProfile from "~/components/main/MyProfile.vue";
import MySkills from "~/components/main/MySkills.vue";
import MyProduct from "~/components/main/MyProduct.vue";

export default {
  components: {
    HeaderHero,
    MyProfile,
    MySkills,
    MyProduct,
  },
};
</script>

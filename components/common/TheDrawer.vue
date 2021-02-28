<template>
  <v-navigation-drawer
    app
    mobile-break-point="1080"
    floating
    :src="getImageUrl('')"
    :mini-variant.sync="mini"
    mini-variant-width="65"
  >
    <template #img="attrs">
      <v-img
        v-bind="attrs"
        height="100%"
        gradient="to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3)"
      />
    </template>

    <v-list-item class="py-2 px-3">
      <v-list-item-avatar>
        <span class="display-1 white--text font-weight-bold">K</span>
      </v-list-item-avatar>
      <v-list-item-title>
        <p class="mb-0 caption grey--text text--lighten-1">
          Back-end Developer
        </p>
        <p class="mb-0 caption grey--text text--lighten-1">Traveler</p>
      </v-list-item-title>
      <v-btn icon color="white" @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider class="mb-6" />

    <v-list nav dark class="py-2 px-3">
      <v-list-item-group color="green accent-2">
        <v-list-item
          v-for="item in drawerMenu"
          :key="item.title"
          @click="$vuetify.goTo(item.to, options)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template #append>
      <div align="center" class="mb-3">
        <v-menu
          top
          :offset-x="offset"
          transition="slide-x-transition"
          :close-on-content-click="false"
          max-width="300"
        >
          <template #activator="{ on }">
            <v-btn class="mx-auto" small icon color="grey" v-on="on">
              <v-icon>mdi-settings-outline</v-icon>
            </v-btn>
          </template>
          <v-card elevation="5" color="blue-grey" style="opacity: 0.85">
            <v-container>
              <p class="font-weight-bold text-center white--text mb-0">
                Images
              </p>
              <p class="caption text-center mb-0 grey--text text--lighten-3">
                これまでの旅先の一場面
              </p>
              <v-row>
                <v-col v-for="img in imageList" :key="img" cols="3">
                  <v-img
                    class="slect-image"
                    :src="getImageUrl(img)"
                    height="120"
                    @click="setImage(img)"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-menu>
      </div>
      <div align="center" class="mb-3">
        <v-btn
          v-for="item in buttomLink"
          :key="item.title"
          :href="item.link"
          target="_blank"
          rel="noopener"
          :title="item.title"
          icon
          class="mx-1"
        >
          <v-icon color="green lighten-4">{{ item.icon }}</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    mini: false,
    drawerMenu: [
      { title: "Top", icon: "mdi-home", to: "#header-hero" },
      { title: "About", icon: "mdi-account-search-outline", to: "#profile" },
      { title: "Skills", icon: "mdi-file-account", to: "#skills" },
      {
        title: "Product",
        icon: "mdi-desktop-mac-dashboard",
        to: "#product",
      },
    ],
    buttomLink: [
      {
        title: "Twitter",
        icon: "mdi-twitter-box",
        link: "https://twitter.com/k_urtica",
      },
      {
        title: "GitHub",
        icon: "mdi-github-box",
        link: "https://github.com/k-urtica",
      },
      {
        title: "MyBlog",
        icon: "mdi-post-outline",
        link: "https://knote.dev/",
      },
    ],
    options: {
      duration: 720,
    },
    imageList: [
      "drawer-back-01",
      "drawer-back-02",
      "drawer-back-03",
      "drawer-back-04",
    ],
    currentImage: "drawer-back-01",
    offset: true,
  }),
  methods: {
    setImage(img) {
      this.currentImage = img;
    },
    getImageUrl(img) {
      const images = require.context("@/assets/img/", false, /\.jpg$/);
      if (img === "") {
        return images("./" + this.currentImage + ".jpg");
      }
      return images("./" + img + ".jpg");
    },
  },
};
</script>

<style lang="scss" scoped>
.slect-image {
  border-radius: 8px;
}
.slect-image:hover {
  cursor: pointer;
}
</style>

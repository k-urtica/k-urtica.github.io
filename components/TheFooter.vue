<template>
  <v-footer padless color="grey darken-4" dark>
    <v-container class="pt-5 pb-2 text-center">
      <div class="text-caption">
        👉Made with
        <app-link to="https://ja.nuxtjs.org/" class="blue--text text--accent-2"
          >Nuxt.js</app-link
        >
        and
        <app-link
          to="https://vuetifyjs.com/ja/"
          class="blue--text text--accent-2"
          >Vuetify.js</app-link
        >
      </div>
      <div class="text-caption">
        Icons made by
        <app-link to="https://www.freepik.com" class="blue--text text--accent-2"
          >Freepik</app-link
        >
        from
        <app-link
          to="https://www.flaticon.com/"
          class="blue--text text--accent-2"
          >www.flaticon.com</app-link
        >
      </div>
      <v-divider class="my-2" />
      <div>
        {{ new Date().getFullYear() }} —
        <strong>K -- Back-end Developer😆</strong>
      </div>
    </v-container>
  </v-footer>
</template>

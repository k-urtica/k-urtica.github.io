<template>
  <v-footer padless color="#ECEFFA">
    <v-container class="pt-5 pb-2 text-center">
      <div class="text-caption">
        👉Made with <app-link to="https://ja.nuxtjs.org/">Nuxt.js</app-link> and
        <app-link to="https://vuetifyjs.com/ja/">Vuetify.js</app-link>
      </div>
      <div class="text-caption">
        Icons made by
        <app-link to="https://www.freepik.com">Freepik</app-link>
        from
        <app-link to="https://www.flaticon.com/">www.flaticon.com</app-link>
      </div>
      <v-divider class="my-2" />
      <div>
        {{ new Date().getFullYear() }} —
        <strong>K -- Back-end Developer😆</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<template>
  <v-app dark>
    <v-container fill-height>
      <v-row>
        <v-col class="text-center">
          <h1 v-if="error.statusCode === 404" class="display-1">
            {{ pageNotFound }}
          </h1>
          <h1 v-else class="display-1">{{ otherError }}</h1>

          <p class="my-5">
            <v-btn nuxt to="/">Back to Home</v-btn>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

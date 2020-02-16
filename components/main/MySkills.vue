<template>
  <v-container
    id="skills"
    class="mt-5 mb-10 px-4"
    fluid
    style="overflow-x: hidden;"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold blue--text">
      Skills
    </h2>
    <v-divider class="mb-9" />

    <p class="text-center title">TECHNICAL</p>
    <v-row class="px-4">
      <v-col
        v-for="skill in skills"
        :key="skill.name"
        cols="6"
        class="px-2"
        data-aos="flip-left"
        data-aos-duration="1200"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p class="mb-1 subtitle-1">
          <v-icon left :color="skill.color">{{ skill.icon }}</v-icon>
          {{ skill.name }}
        </p>
        <v-progress-linear
          :value="skill.exp"
          striped
          rounded
          :color="skill.color"
          height="15"
        >
          <template v-slot="{ value }">
            <span class="font-weight-bold body-2 grey--text text--darken-3">
              {{ value }}%
            </span>
          </template>
        </v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    skills: [
      { name: "Java", exp: 85, icon: "mdi-language-java", color: "#f89820" },
      { name: "C", exp: 45, icon: "mdi-language-c", color: "#BDBDBD" },
      {
        name: "JavaScript",
        exp: 65,
        icon: "mdi-language-javascript",
        color: "#F0DB4F"
      },
      { name: "Vue.js", exp: 75, icon: "mdi-vuejs", color: "#41B883" },
      { name: "Nuxt.js", exp: 80, icon: "mdi-nuxt", color: "#41B883" },
      { name: "Vuetify", exp: 80, icon: "mdi-vuetify", color: "#42A5F5" },
      {
        name: "HTML",
        exp: 70,
        icon: "mdi-language-html5",
        color: "#E44D26"
      },
      { name: "CSS", exp: 50, icon: "mdi-language-css3", color: "#2965f1" },
      {
        name: "Spring FW",
        exp: 75,
        icon: "mdi-check-outline",
        color: "#4CAF50"
      },
      {
        name: "SQL",
        exp: 60,
        icon: "mdi-database-search",
        color: "#80DEEA"
      },
      {
        name: "Mongo DB",
        exp: 60,
        icon: "mdi-database",
        color: "#3FA037"
      },
      {
        name: "Redis",
        exp: 75,
        icon: "mdi-database",
        color: "#A41E11"
      },
      {
        name: "Docker",
        exp: 70,
        icon: "mdi-docker",
        color: "#0db7ed"
      },
      {
        name: "Python",
        exp: 60,
        icon: "mdi-language-python",
        color: "#306998"
      }
    ]
  })
};
</script>

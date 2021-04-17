<template>
  <v-container
    id="skills"
    class="mt-5 mb-10 px-4"
    fluid
    style="overflow-x: hidden"
  >
    <h2 class="display-2 mt-9 mb-3 font-weight-bold blue--text">Skills</h2>
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
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiLanguageJava,
  mdiLanguageC,
  mdiLanguageJavascript,
  mdiVuejs,
  mdiNuxt,
  mdiVuetify,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLeaf,
  mdiDatabaseSearch,
  mdiDatabase,
  mdiDocker,
  mdiLanguagePython,
} from "@mdi/js";

export default Vue.extend({
  data: () => ({
    skills: [
      { name: "Java", exp: 85, icon: mdiLanguageJava, color: "#f89820" },
      { name: "C", exp: 45, icon: mdiLanguageC, color: "#BDBDBD" },
      {
        name: "JavaScript",
        exp: 65,
        icon: mdiLanguageJavascript,
        color: "#F0DB4F",
      },
      { name: "Vue.js", exp: 75, icon: mdiVuejs, color: "#41B883" },
      { name: "Nuxt.js", exp: 80, icon: mdiNuxt, color: "#41B883" },
      { name: "Vuetify", exp: 80, icon: mdiVuetify, color: "#42A5F5" },
      {
        name: "HTML",
        exp: 70,
        icon: mdiLanguageHtml5,
        color: "#E44D26",
      },
      { name: "CSS", exp: 50, icon: mdiLanguageCss3, color: "#2965f1" },
      {
        name: "Spring FW",
        exp: 75,
        icon: mdiLeaf,
        color: "#4CAF50",
      },
      {
        name: "SQL",
        exp: 60,
        icon: mdiDatabaseSearch,
        color: "#80DEEA",
      },
      {
        name: "Mongo DB",
        exp: 60,
        icon: mdiDatabase,
        color: "#3FA037",
      },
      {
        name: "Redis",
        exp: 75,
        icon: mdiDatabase,
        color: "#A41E11",
      },
      {
        name: "Docker",
        exp: 70,
        icon: mdiDocker,
        color: "#0db7ed",
      },
      {
        name: "Python",
        exp: 60,
        icon: mdiLanguagePython,
        color: "#306998",
      },
    ],
  }),
});
</script>

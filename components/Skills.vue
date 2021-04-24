<template>
  <v-container>
    <h2 id="skills" class="text-h2 font-weight-bold mb-11">Skills</h2>
    <p class="text-h5 mb-8">
      My technical skills in work and hobby development.
    </p>

    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
        class="px-4"
        style="max-width: 480px"
        data-aos="flip-left"
      >
        <v-card outlined class="skill-card">
          <v-img
            :src="require('@/assets/img/development.svg')"
            width="115"
            class="mx-auto mt-5"
          />
          <v-card-title class="font-weight-bold justify-center">
            Work
          </v-card-title>

          <v-list-item v-for="item in workSkills" :key="item.text" dense>
            <v-list-item-icon>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-2">
              {{ item.text }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-right">
              <v-rating
                length="5"
                :value="item.rate"
                readonly
                half-increments
                size="19"
                dense
                color="yellow darken-3"
                background-color="grey darken-1"
              />
            </v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        class="px-4"
        style="max-width: 480px"
        data-aos="flip-right"
      >
        <v-card outlined class="skill-card">
          <v-img
            :src="require('@/assets/img/front-end.svg')"
            width="115"
            class="mx-auto mt-5"
          />
          <v-card-title class="font-weight-bold justify-center">
            Hobby dev
          </v-card-title>

          <v-list-item v-for="item in hobbySkills" :key="item.text" dense>
            <v-list-item-icon>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-body-2">
              {{ item.text }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-right">
              <v-rating
                length="5"
                :value="item.rate"
                readonly
                half-increments
                size="19"
                dense
                color="yellow darken-3"
                background-color="grey darken-1"
              />
            </v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiAngularjs,
  mdiLanguageJava,
  mdiDatabase,
  mdiVuejs,
  mdiNuxt,
  mdiVuetify,
  mdiLanguagePython,
  mdiDocker,
  mdiAws,
} from "@mdi/js";

export default Vue.extend({
  data() {
    return {
      icon: {
        mdiLanguageTypescript,
      },
      workSkills: [
        {
          text: "HTML/CSS",
          icon: mdiLanguageHtml5,
          rate: 3,
          color: "#E44D26",
        },
        {
          text: "JavaScript",
          icon: mdiLanguageJavascript,
          rate: 3.5,
          color: "#F0DB4F",
        },
        {
          text: "TypeScript",
          icon: mdiLanguageTypescript,
          rate: 3,
          color: "#007acc",
        },
        {
          text: "Angularjs",
          icon: mdiAngularjs,
          rate: 2.5,
          color: "#dd1b16",
        },
        {
          text: "Java/SpringFW",
          icon: mdiLanguageJava,
          rate: 4.5,
          color: "#f89820",
        },
        {
          text: "SQL",
          icon: mdiDatabase,
          rate: 2,
          color: "#80DEEA",
        },
      ],
      hobbySkills: [
        {
          text: "Vue.js",
          icon: mdiVuejs,
          rate: 3,
          color: "#41B883",
        },
        {
          text: "Nuxt.js",
          icon: mdiNuxt,
          rate: 4,
          color: "#41B883",
        },
        {
          text: "Vuetify.js",
          icon: mdiVuetify,
          rate: 4,
          color: "#42A5F5",
        },
        {
          text: "Python",
          icon: mdiLanguagePython,
          rate: 3,
          color: "#306998",
        },
        {
          text: "Docker",
          icon: mdiDocker,
          rate: 2.5,
          color: "#0db7ed",
        },
        {
          text: "AWS",
          icon: mdiAws,
          rate: 2.5,
          color: "#FF9900",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.skill-card {
  border-radius: 14px !important;
}
</style>

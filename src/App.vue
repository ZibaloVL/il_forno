<template>
  <v-app>
    <header-sait></header-sait>
    <v-content class="appP">
      <home-page></home-page>
      <meniu-food></meniu-food>
    </v-content>
    <foter-sait></foter-sait>
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage";
import HeaderSait from "./components/HeaderSait";
import FoterSait from "./components/FoterSait";
import MeniuFood from "./components/Meniu";

export default {
  name: "App",

  components: {
    HomePage,
    HeaderSait,
    FoterSait,
    MeniuFood
  },

  data: () => ({
    //
  })
};
</script>

<style >
</style>
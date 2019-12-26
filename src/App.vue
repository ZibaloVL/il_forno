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
import ContactPath from "./components/ContactPath";

export default {
  name: "App",

  components: {
    HomePage,
    HeaderSait,
    FoterSait,
    MeniuFood,
    ContactPath
  },

  data: () => ({
    //
  })
};
</script>

<style >
@font-face {
  font-family: "BariolRegular";
  src: url("./assets/fonts/Bario/BariolRegular.eot");
  src: url("./assets/fonts/Bario/BariolRegular.woff") format("woff"),
    url("./assets/fonts/Bario/BariolRegular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}

.appP {
  background-color: white;
}
</style>
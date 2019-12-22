<template>
  <v-app>
    <header-sait></header-sait>
    <v-content>
      <home-page></home-page>
    </v-content>
    <foter-sait></foter-sait>
  </v-app>
</template>

<script>
import HomePage from "./components/HomePage";
import HeaderSait from "./components/HeaderSait";
import FoterSait from "./components/FoterSait";

export default {
  name: "App",

  components: {
    HomePage,
    HeaderSait,
    FoterSait
  },

  data: () => ({
    //
  })
};
</script>

<style >
.appP {
  background-color: black;
}
</style>
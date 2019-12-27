<template>
  <v-app-bar app hide-on-scroll color="#ffffff">
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('../assets/logo/IL_FORNO_logo1.svg')"
        transition="scale-transition"
        width="100"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn
      class="meniu"
      v-for="(itemMenu, index) in menuHeader"
      :key="index"
      text
      @click="$vuetify.goTo(itemMenu.src, {duration:7000, offset: 0, easing: 'linear'})"
    >{{itemMenu.text[language]}}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderSait",

  data: () => ({
    language: "ro",
    menuHeader: [
      {
        text: {
          ro: "Meniu",
          en: "Menu",
          ru: "Меню"
        },
        src: "#menu"
      },
      {
        text: {
          ro: "Contacte",
          en: "Contacts",
          ru: "Контакты"
        },
        src: "#contact"
      },
      {
        text: {
          ro: "cum să găsești",
          en: "how to find",
          ru: "Как найти"
        },
        src: "#map"
      }
    ]
  })
};
</script>

<style  scoped>
.meniu {
  color: #7a2716;
}
</style>
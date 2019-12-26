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
      v-for="(itemMeniu, index) in meniu"
      :key="index"
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      text
    >{{itemMeniu.text[language]}}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderSait",

  data: () => ({
    language: "ro",
    meniu: [
      {
        text: {
          ro: "Meniu",
          en: "Menu",
          ru: "Меню"
        },
        src: ""
      },
      {
        text: {
          ro: "Contacte",
          en: "Contacts",
          ru: "Контакты"
        },
        src: ""
      },
      {
        text: {
          ro: "cum să găsești",
          en: "how to find",
          ru: "Как найти"
        },
        src: ""
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
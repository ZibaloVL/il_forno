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
    >{{itemMeniu.text}}</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderSait",

  data: () => ({
    meniu: [
      {
        text: "Меню",
        src: ""
      },
      {
        text: "Контакты",
        src: ""
      },
      {
        text: "Как найти",
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
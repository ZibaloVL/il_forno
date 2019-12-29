<template>
  <div>
    <div class="hidden-md-and-up noPrint">
      <v-navigation-drawer height="200" absolute temporary v-model="drawer" >
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i ) in  menuHeader" :key="i">
            <v-list-item-action>
              <v-btn class="meniu" text @click="tenpotaryClic(item)">{{item.text[language]}}</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      
      <v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo/IL_FORNO_logo1.svg')"
          transition="scale-transition"
          width="100"
        />  
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" color="brown"></v-app-bar-nav-icon>
      
    </v-app-bar>
    </div>
    <v-app-bar  class="hidden-sm-and-down" app hide-on-scroll color="#ffffff">
      <v-toolbar-title>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/logo/IL_FORNO_logo1.svg')"
          transition="scale-transition"
          width="100"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn
          color="brown"
          class="meniu"
          v-for="(itemMenu, index) in menuHeader"
          :key="index"
          text
          @click="$vuetify.goTo(itemMenu.src, {duration:1000, offset: 0, easing: 'linear'})"
        >{{itemMenu.text[language]}}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderSait",

  data: () => ({
    drawer: false,
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
  }),
  methods: {
    tenpotaryClic(item) {
      this.drawer = !this.drawer;
      this.$vuetify.goTo(item.src, {
        duration: 1000,
        offset: 0,
        easing: "linear"
      });
    }
  }
};
</script>

<style  scoped>
.meniu {
  color: #7a2716;
}
</style>
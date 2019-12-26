<template>
  <div>
    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h2 class="font-weight-bold display-3 basil--text">{{titulName[languege]}}</h2>
      </v-card-title>
      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-container>
            <v-row justify="center" wrap>
              <v-col v-for="(imgPath, i) in imgMenu(item)" :key="i" md="6" xs="12" cols="12">
                <v-card flat color="basil">
                  <v-img contain :src="require(`@/assets/menu/${languege}/${imgPath}`)"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "HeaderSait",

  created() {
    this.menuPages.forEach(element => {
      this.items.push(element.name[this.languege]);
    });
  },

  data() {
    return {
      tab: null,
      languege: "ro",
      items: [],
      titulName: {
        ro: "MENIU",
        en: "MENU",
        ru: "МЕНЮ"
      },
      menuPages: [
        {
          name: {
            ro: "MIC DEJUN",
            en: "BREAKFAST",
            ru: "ЗАВТРАК"
          },
          imgPaths: ["breakfast.svg", "breakfast1.svg"]
        },
        {
          name: {
            ro: "MENIU PRINCIPAL",
            en: "BASIC MENU",
            ru: "ОСНОВНОЕ МЕНЮ"
          },
          imgPaths: ["menu0.svg", "menu1.svg", "menu2.svg"]
        },
        {
          name: {
            ro: "HARTA VINULUI",
            en: "WINE MAP",
            ru: "ВИННАЯ КАРТА"
          },
          imgPaths: ["wine_card.svg"]
        }
      ]
    };
  },
  methods: {
    imgMenu(item) {
      console.log("item=", item);
      let imgPaths = [];
      this.menuPages.forEach(element => {
        if (element.name[this.languege] === item) {
          element.imgPaths.forEach(path => imgPaths.push(path.toString()));
        }
      });
      return imgPaths;
    }
  }
};
</script>
<style  scoped>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
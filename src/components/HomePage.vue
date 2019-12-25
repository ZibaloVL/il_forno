<template>
  <div>
    <v-parallax dark :height="imgHeight" src="../assets/bg/20191206-IMG_1144_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 font-italic font-weight-bold display-4 mb-4 py-10">НЕАПОЛИТАНСКИЕ РЕЦЕПТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
  
    <v-parallax dark :height="imgHeight" src="../assets/bg/20191206-IMG_1195_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">ЛУЧШИЕ ПРОДУКТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark :height="imgHeight" src="../assets/bg/20191219-IMG_2540_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">ИЗЫСКАНОЕ МЕНЮ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark :height="imgHeight" src="../assets/bg/20191219-IMG_2571-Edit_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">НЕЗАБЫВАЕМЫЕ ДЕСЕРТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark :height="imgHeight" src="../assets/bg/20191218-IMG_2381_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">ВОЛШЕБНЫЕ НАПИТКИ</h1>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({
    imgHeight : 1299
  })
};
</script>

<style  scoped>
@font-face {
  font-family: "BariolRegular";
  src: url("../assets/fonts/Bario/BariolRegular.eot");
  src: url("../assets/fonts/Bario/BariolRegular.woff") format("woff"),
    url("../assets/fonts/Bario/BariolRegular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
</style>
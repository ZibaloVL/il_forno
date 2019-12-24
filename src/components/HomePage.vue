<template>
  <div>
    <v-parallax dark height="1080" src="../assets/bg/20191206-IMG_1144.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">НЕАПОЛИТАНСКИЕ РЕЦЕПТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <div>ghbdtn</div>
    <v-parallax dark height="1080" src="../assets/bg/20191206-IMG_1195.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">ЛУЧШИЕ ПРОДУКТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark height="1080" src="../assets/bg/20191219-IMG_2540.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">ИЗЫСКАНОЕ МЕНЮ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark height="1080" src="../assets/bg/20191219-IMG_2571-Edit.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="h1 mb-4 py-10">НЕЗАБЫВАЕМЫЕ ДЕСЕРТЫ</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax dark height="1080" src="../assets/bg/20191218-IMG_2381.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <p class="h1 mb-4 py-10">ВОЛШЕБНЫЕ НАПИТКИ</p>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({})
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
.h1 {
  font-size: 4rem !important;
  font-family: "BariolRegular" !important;
}
</style>
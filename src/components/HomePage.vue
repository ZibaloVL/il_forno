<template>
  <div>
    <v-parallax
      v-for="(paralaxItem, index) in paralaxItems"
      :key="index"
      dark
      class="mb-4"
      :height="imgHeight"
      :src="require(`@/assets/bg/${paralaxItem.img}`)"
    >
      <v-row align="end" justify="end" class="mb-10">
        <v-col lg="10" class="text-center" cols="12">
          <v-img
            width="100%"
            :src="require(`@/assets/bg/text/${languege}/${paralaxItem.inscription}`)"
          ></v-img>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({
    languege: "ro",
    imgHeight: 900,
    paralaxItems: [
      {
        img: "20191206-IMG_1144_1080.jpg",
        inscription: "Neapolitan.png"
      },
      {
        img: "20191206-IMG_1195_1080.jpg",
        inscription: "ProduseDeTop.png"
      },
      {
        img: "20191219-IMG_2540_1080.jpg",
        inscription: "MeniuGastronomic.png"
      },
      {
        img: "20191219-IMG_2571-Edit_1080.jpg",
        inscription: "DeserturiDeNeuitat.png"
      },
      {
        img: "20191218-IMG_2381_1080.jpg",
        inscription: "BăuturiMagice.png"
      }
    ]
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
<template>
  <div >
    <div class="d-none d-sm-flex" >
      <v-carousel hide-delimiters cycle show-arrows-on-hover height="900" >
        <v-carousel-item v-for="(paralaxItem, index) in paralaxItems" :key="index">
          <v-parallax
            dark
            class="mb-4"
            :height="imgHeight"
            :src="require(`@/assets/bg/horizontal/${paralaxItem.img.horizontal}`)"
          >
            <v-row align="end" justify="end" class="mb-10" >
              <v-col lg="10" class="text-center" cols="12" >
                <v-img
                  width="100%"
                  :src="require(`@/assets/bg/text/${languege}/${paralaxItem.inscription}`)"
                ></v-img>
              </v-col>
            </v-row>
          </v-parallax>
        </v-carousel-item>
      </v-carousel>
    </div>
    
    <v-carousel hide-delimiters cycle show-arrows-on-hover height="815" class="hidden-sm-and-up">
      <v-carousel-item v-for="(paralaxItem, index) in paralaxItems" :key="index">
        <v-parallax
          dark
          class="mb-4"
          :height="imgVerticalHeight"
          :src="require(`@/assets/bg/vertical/${paralaxItem.img.vertical}`)"
        >
          <v-row align="center" justify="center" class="mb-10" >
            <v-col lg="10" class="text-center" cols="12" style="background-color:#033!important; opacity:0.5;">
              <v-img
                width="100%"
                :src="require(`@/assets/bg/text/${languege}/${paralaxItem.inscription}`)"
              ></v-img>
            </v-col>
          </v-row>
        </v-parallax>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data: () => ({
    languege: "ro",
    imgHeight: 900,
    imgVerticalHeight: 900,
    paralaxItems: [
      {
        img: {
          horizontal: "20191206-IMG_1144.jpg",
          vertical: "20191219-IMG_2519.jpg"
        },
        inscription: "Neapolitan.png"
      },
      {
        img: {
          horizontal: "20191206-IMG_1195.jpg",
          vertical: "20191219-IMG_2567-Edit.jpg"
        },
        inscription: "ProduseDeTop.png"
      },
      {
        img: {
          horizontal: "20191219-IMG_2540.jpg",
          vertical: "20191211-IMG_1797-Edit.jpg"
        },
        inscription: "MeniuGastronomic.png"
      },
      {
        img: {
          horizontal: "20191219-IMG_2571-Edit.jpg",
          vertical: "20191211-IMG_1777.jpg"
        },
        inscription: "DeserturiDeNeuitat.png"
      },
      {
        img: {
          horizontal: "20191218-IMG_2381.jpg",
          vertical: "20191219-IMG_2483.jpg"
        },
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
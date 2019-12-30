<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="white black--text">
        <v-container>
          <v-row>
            <v-col  id="contact" cols="12" md="6" xs="12" class="text-center black--text">
              <h3>Contacte:</h3>
              <h4>Strada Alexei Şciusev 98, Chișinău, Moldova</h4>
              <h4>tel. +373 22 692 19 219</h4>
              <h4>email: ilForno@ilForno.ilforno</h4>
            </v-col>
            <v-col  id="map" cols="12" md="6" xs="12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d679.9494403637511!2d28.82060852924254!3d47.024574612907415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d611068d17b%3A0xdab911a743ee10c7!2sIl%20Forno!5e0!3m2!1sru!2s!4v1577345974547!5m2!1sru!2s"
                width="100%"
                height="auto"
                frameborder="0"
                style="border:0;"
                allowfullscreen
              ></iframe>
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>
      <v-row align="center" justify-sm="space-between" justify-xs="center" class="ma-2">
       <v-col  class="text-xs-center text-sm-center text-md-left">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon blak size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-col>
        <v-col class=" text-right hidden-sm-and-down">
          {{ new Date().getFullYear() }} —
          <strong>Il Forno</strong>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FoterSait",

  data: () => ({
    icons: ["fab fa-facebook", "fab fa-instagram", "fab fa-tripadvisor"]
  })
};
</script>
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import './assets/style/styleSS.css'


// раздел контактов
// форма обратной связи


Vue.config.productionTip = false
// Vue.component('menu-icon', MenuIcon);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
const path = require('path');

// import 'vue-material-design-icons/styles.css';
// import MenuIcon from 'vue-material-design-icons/Menu.vue';

// доделать раздел меню подсоеденив svg
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
console.log('sssssss')
console.log(path.join(__dirname, '_'))
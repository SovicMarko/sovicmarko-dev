import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import scrollanimation from './directives/scrollanimation'
import AOS from "aos";
import "aos/dist/aos.css";

Vue.directive('scrollanimation', scrollanimation);
Vue.config.productionTip = false

new Vue({
  created() { AOS.init( { duration: 1000 })},
  router,
  store,
  render: h => h(App)
}).$mount('#app')

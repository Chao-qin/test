import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import './swiper/swiper.css' 
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

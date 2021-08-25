import Vue from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player';
import vuescroll from "vue-scroll";
Vue.component('video-background', VideoBackground);
Vue.use(vuescroll);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


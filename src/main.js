import Vue from 'vue'
import App from './App.vue'
import './assets/css/comm.css'
import './assets/css/drawflow.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

//This basically creates an element of a Vue(App Vue in this case)
//And  then mounts it to ID #app that resides in index.html

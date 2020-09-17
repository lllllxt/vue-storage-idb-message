import Vue from 'vue'
import App from './App.vue'
import VueStorageIdbMessage from '../../vue-storage-idb-message.js'

Vue.use(VueStorageIdbMessage, {
  name: '666'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

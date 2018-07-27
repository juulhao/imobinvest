import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  
    modules: [
      // Simple usage
      'nuxt-buefy',
  
      ['nuxt-buefy', { /* buefy options */ }]
   ]
  ,
  render: h => h(App)
}).$mount('#app')

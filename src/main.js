import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faTh } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faCodepen, faHtml5, faCss3Alt, faJsSquare, faVuejs, faBootstrap, faSass, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret,faTwitter, faTwitterSquare, faBootstrap, faCodepen, faCss3Alt, faFacebookF, faGithub, faHtml5, faJsSquare, faVuejs, faSass, faNpm, faLinkedinIn, faTh)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

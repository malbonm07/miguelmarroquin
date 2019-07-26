import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VLazyImagePlugin } from "v-lazy-image";
import scroll from './directives/scroll';
import VueScrollTo from 'vue-scrollto';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTh, faEnvelope, faLink,faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faGithub, faLinkedinIn, faCodepen, faHtml5, faCss3Alt, faJsSquare, faVuejs, faBootstrap, faSass, faNpm } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faTwitter, faBootstrap, faCodepen, faCss3Alt, faFacebookF, faGithub, faHtml5, faJsSquare, faVuejs, faSass, faNpm, faLinkedinIn, faTh, faEnvelope, faLink, faAngleUp)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease in out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.use(scroll);
Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

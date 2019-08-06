<template>
    <div class="education-content">

<!------------------------------ COURSES LIST SECTION -------------------------->
        <div class="education-container__courses">
            <div class="education-container__courses--text text-title">
                <span>C</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
                <span>S</span>
                <span>E</span>
                <span>S</span>
            </div>
            <div class="spacer"></div>
            <div class="education-container__courses--description text-center">
                <h2 class="mb-2">{{$t("message.education.sub")}}</h2>
                <ul class="education-container__courses--description-list">
                    <li><a href="https://platzi.com/@malbonm07/curso/1339-fundamentos-javascript/diploma/detalle/" target="_blank" class="text-white">Fundamentos de Javascript</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1390-optimizacion-web/diploma/detalle/" target="_blank" class="text-white">Website Performance Optimization</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1145-vuejs-profesional/diploma/detalle/" target="_blank" class="text-white">Curso Avanzado VueJS</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1140-diseno-interfaces-ux/diploma/detalle/" target="_blank" class="text-white">Diseño de interfaces UI/UX</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1373-diseno-prototipos/diploma/detalle/" target="_blank" class="text-white">Curso de Diseño de Prototipos</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1357-js-jest/diploma/detalle/" target="_blank" class="text-white">Javascript testing con Jest</a></li>
                </ul>
                <button class="education-container__courses--description-btn mt-2" v-scroll-to="{el: '#certificates'}">
                {{$t("message.education.certificates")}}
                </button>
            </div>
            <backBtn></backBtn>
        </div>
<!------------------------------ END COURSES LIST SECTION -------------------------->


<!------------------------------ CERTIFICATES SECTION -------------------------->
        <div class="education-container__certificates">
            <h2 class="education-container__certificates--title" id="certificates">
                Certificados
            </h2>
            <div class="education-container__certificates--lists">
                <h3>Freecodecamp</h3>
                <ul class="mb-2 text-center">
                    <li><a href="https://www.freecodecamp.org/certification/malbonm07/responsive-web-design" target="_blank">Responsive Web Design</a></li>
                    <li><a href="https://www.freecodecamp.org/certification/malbonm07/javascript-algorithms-and-data-structures" target="_blank">Javascript algorithms and Data Structures</a></li>
                </ul>
                <h3>Platzi</h3>
                <ul class="mb-2 text-center">
                    <li><a href="https://platzi.com/@malbonm07/curso/1339-fundamentos-javascript/diploma/detalle/" target="_blank">Javascript Basics</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1170-git-github-2017/diploma/detalle/" target="_blank">Git and Github</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1111-vuejs/diploma/detalle/" target="_blank">Bootstrap</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1350-html5-css3/diploma/detalle/" target="_blank">Online Web Development course</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1390-optimizacion-web/diploma/detalle/" target="_blank">Web performance optimization (WPO)</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1111-vuejs/diploma/detalle/" target="_blank">VueJS Basics</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1145-vuejs-profesional/diploma/detalle/" target="_blank">Advanced course VueJS</a></li>
                    <li><a href="https://platzi.com/@malbonm07/curso/1380-basico-nodejs/diploma/detalle/" target="_blank">NodeJS Basic</a></li>
                </ul>
            </div>
        </div>
<!------------------------------ END CERTIFICATES SECTION -------------------------->


<!------------------------------ EDU FOOTER SECTION -------------------------->
    <div class="footer">
      <div class="footer__details text-center text-light">
        Designer by Miguel Alonso Marroquin, 2019 -&nbsp;<a>malbonm07@gmail.com</a>
      </div>
      <nav class="footer__social-icons">
        <a  href="https://twitter.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a  href="https://www.facebook.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a  href="https://github.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a  href="https://www.linkedin.com/in/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
      </nav>
      <button id="upButton" class="up-btn" 
              v-scroll-to="'#app'"
              data-aos-duration="500" data-aos="zoom-in"
      >
        <div class="up-btn--icon">
        </div>
      </button>
    </div>
<!------------------------------ FOOTER SECTION -------------------------->
    </div>
    
</template>

<script>
import backBtn from '@/components/backBtn.vue'
export default {
    components: {
        backBtn
    }
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/education';
//desktop modal project styles are in './views/proyectos/modal/desktProyectModal';
</style>

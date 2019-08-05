<template>
  <div class="skills-container">


<!------------------------------ SOFT SKILLS SECTION -------------------------->
    <div class="skills-container__soft">
      <div class="skills-container__soft--text text-title">
        <span>S</span>
        <span>K</span>
        <span>I</span>
        <span>L</span>
        <span>L</span>
        <span>S</span>
      </div>
      <div class="spacer"></div>
      <div class="skills-container__soft--description text-center">
        <h2 class="mb-2">{{$t("message.skills.sub")}}</h2>
        <ul class="skills-container__soft--description-list">
            <li>{{$t("message.skills.ul.li1")}}</li>
            <li>{{$t("message.skills.ul.li2")}}</li>
            <li>{{$t("message.skills.ul.li3")}}</li>
            <li>{{$t("message.skills.ul.li4")}}</li>
            <li>{{$t("message.skills.ul.li5")}}</li>
            <li>{{$t("message.skills.ul.li6")}}</li>
            <li>{{$t("message.skills.ul.li7")}}</li>
        </ul>
        <button class="skills-container__soft--description-btn mt-1" v-scroll-to="{el: '#tools'}"
        >
          {{$t("message.skills.btn")}}
        </button>
      </div>
      <backBtn></backBtn>
    </div>
<!------------------------------ END SOFT SKILLS SECTION -------------------------->


<!------------------------------ HERRAMIENTAS SECTION -------------------------->
    <div class="skills-container__tools">
        <div class="subTools-container">
          <h2 class="text-center subTools" id="tools" data-aos-duration="500" data-aos="fade-up">
            {{$t("message.skills.sub2")}}
          </h2>
        </div>
        <div class="skills-center">
          <ul id="skills-list-effect" class="skills-list">
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://www.w3.org/html/" target="_blank">
            <font-awesome-icon class="html5-icon" :icon="['fab', 'html5']" />
            <span class="skill-item__popover">Html5</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
            <font-awesome-icon class="css3-icon" :icon="['fab', 'css3-alt']" />
            <span class="skill-item__popover">Css</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <font-awesome-icon class="javascript-icon" :icon="['fab', 'js-square']" />
              <span class="skill-item__popover">Javascript</span>
              </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://vuejs.org/" target="_blank">
              <font-awesome-icon class="vue-icon" :icon="['fab', 'vuejs']" />
              <span class="skill-item__popover">VueJS</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://getbootstrap.com/" target="_blank">
              <font-awesome-icon class="bootstrap-icon" :icon="['fab', 'bootstrap']" />
              <span class="skill-item__popover">Bootstrap</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://sass-lang.com/" target="_blank">
              <font-awesome-icon class="sass-icon" :icon="['fab', 'sass']" />
              <span class="skill-item__popover">Sass</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a>
              <font-awesome-icon class="grid-icon" :icon="['fas', 'th']" />
              <span class="skill-item__popover">Grid/Flexbox</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://www.npmjs.com/" target="_blank">
              <font-awesome-icon class="npm-icon" :icon="['fab', 'npm']" />
              <span class="skill-item__popover">Npm</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://github.com/" target="_blank">
              <font-awesome-icon class="github-icon" :icon="['fab', 'github']" />
              <span class="skill-item__popover">Github</span>
            </a></li>
            <li data-aos-duration="500" data-aos="fade-up"><a href="https://webpack.js.org/" target="_blank">
              <font-awesome-icon class="webpack-icon" :icon="['fab', 'codepen']" />
              <span class="skill-item__popover">Webpack</span>
            </a></li>
          </ul>
          <!-- <div class="skills-overlay"></div> -->
        </div>
    </div>
<!------------------------------ END HERRAMIENTAS SECTION -------------------------->


  </div>
</template>

<script>
import backBtn from '@/components/backBtn.vue';
export default {
  components: {
    backBtn
  },
  name: 'skills',
  methods: {
  }
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/skills';
</style>

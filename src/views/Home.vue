<template>
  <div class="home-container">


<!------------------------------ HOME SECTION -------------------------->
    <div class="home-container__hello">
      <div class="home-container__hello--text text-title">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
      </div>
      <div class="spacer"></div>
      <div class="home-container__hello--description text-center">
        <p v-html='$t("message.home.msg")'>
        </p>
        <button class="home-btn mt-5">
          <router-link class="text-white" to="/portfolio">
            {{$t("message.home.btn")}}
          </router-link>
        </button>
      </div>
      <div class="langSwitch">
        <button :class="{'langBtn-active' : activeLanguage === 'us'}" class="langBox us" @click="changeLanguage('us')">
            <!-- <country-flag class="icon" country='us' size='normal'/> -->
            English
        </button>
        <button :class="{'langBtn-active' : activeLanguage === 'es'}" class="langBox es" @click="changeLanguage('es')">
            <!-- <country-flag class="icon" country='es' size='normal'/> -->
            Español
        </button>
      </div>
      <div class="social-content">
          <a href="mailto:malbonm07@gmail.com" target="_blank" class="social-content__desktopIcon"><font-awesome-icon :icon="['fa', 'envelope']" /></a>
          <a href="https://twitter.com/malbonm07" target="_blank" class="social-content__desktopIcon"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
          <!-- <a href="https://www.facebook.com/malbonm07" target="_blank" class="social-content__desktopIcon"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a> -->
          <a href="https://github.com/malbonm07" target="_blank" class="social-content__desktopIcon"><font-awesome-icon :icon="['fab', 'github']" /></a>
          <a href="https://codepen.io/Malbonm07" target="_blank" class="social-content__desktopIcon"><font-awesome-icon :icon="['fab', 'codepen']" /></a>
          <a href="https://www.linkedin.com/in/malbonm07" target="_blank" class="social-content__desktopIcon" style="display: none;"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
      </div>
    </div>
<!------------------------------ END HOME SECTION -------------------------->


  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag';
import {languageSwitch} from '@/mixins/languageSwitch';
// @ is an alias to /src

export default {
  mixins: [languageSwitch],
  components: {
    CountryFlag
  },
  name: 'home',
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/home';
</style>


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
        <button class="home-container__hello--description-btn mt-2">
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
    </div>
<!------------------------------ END HOME SECTION -------------------------->


<!------------------------------ CONTACT SECTION -------------------------->
    <div class="home-container__contact">
    </div>
<!------------------------------ END CONTACT SECTION -------------------------->


  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    CountryFlag
  },
  name: 'home',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    }
  },
  computed: {
    activeLanguage() {
      console.log(this.$i18n.locale)
      return this.$i18n.locale;
    }
  }
}
</script>

<style>
</style>


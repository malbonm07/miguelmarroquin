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
        <div class="langSwitch">
          <div class="langBox us">
              <!-- <country-flag class="icon" country='us' size='normal'/> -->
              English
          </div>
          <div class="langBox es">
              <!-- <country-flag class="icon" country='es' size='normal'/> -->
              Español
          </div>
        </div>
        <h2>Hola!, Yo soy&nbsp;<span class="text-regular">Miguel Alonso Marroquin</span>&nbsp;aspirante a desarrollador Front End, Diseño de interfaces y UX, viviendo actualmente en Perú. Bienvenido a mi portafolio! :)</h2>
        <button class="home-container__hello--description-btn mt-2">
          <router-link class="text-white" to="/portfolio">
            Portfolio
          </router-link>
        </button>
      </div>
    </div>
<!------------------------------ END HOME SECTION -------------------------->


<!------------------------------ CONTACT SECTION -------------------------->
    <!-- <div class="home-container__contact">
    </div> -->
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
}
</script>

<style>
</style>


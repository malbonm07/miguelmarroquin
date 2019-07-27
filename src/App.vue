<template>
  <div id="app" class="app-container">
    <div id="nav" class="desk-nav-menu">
      <ul class="desk-nav-menu__nav">
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/"
          @click.native="closeMobNav">
          intro
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/about"
          @click.native="closeMobNav">
          sobre
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/skills"
          @click.native="closeMobNav">
          skills
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/portfolio"
          @click.native="closeMobNav">
          portafolio
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/education"
          @click.native="closeMobNav">
          educación
        </router-link>
        </li>
      </ul>
    </div>

    <router-link class="logo" to="/">
      <div class="linea1">M</div>
      <div class="linea2">M</div>
    </router-link>

    <div class="mob-nav-btn">
      <input type="checkbox" ref="mobToggle" id="menu-toggle" @click="showMobNav = !showMobNav">
      <label for="menu-toggle" class="menu-toggle-label">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>

    <transition name="page" mode="out-in">
      <router-view/>
    </transition> 

    <footer class="footer">
      <div class="footer__details text-center text-light">
        Designer by Miguel Alonso Marroquin, 2019 -&nbsp;<a>malbonm07@gmail.com</a>
      </div>
      <nav class="footer__social-icons">
        <a class="icon-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a class="icon-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a class="icon-link"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <a class="icon-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
      </nav>
      <button id="upButton" class="footer__up-btn" v-scroll="positionUp" v-scroll-to="'#app'">
        <span class="footer__up-btn--icon"><font-awesome-icon :icon="['fas', 'angle-up']" /></span>
      </button>
    </footer>

    <transition name="fadeNav">
      <div v-show="showMobNav" class="mob-nav-menu">
        <nav class="mob-nav-menu__nav">
          <ul class="mob-nav-menu__nav--list">
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/"
              @click.native="closeMobNav">
              intro
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/about"
              @click.native="closeMobNav">
              sobre
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/skills"
              @click.native="closeMobNav">
              skills
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/portfolio"
              @click.native="closeMobNav">
              portafolio
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/education"
              @click.native="closeMobNav">
              educación
            </router-link>
            </li>
          </ul>
          <div class="mob-nav-menu__nav--icons">
            <h4 class="text-center text-caption uppercase text-regular mb-2 mt-3">Estemos en contacto</h4>
            <a class="icon-link"><font-awesome-icon :icon="['fa', 'envelope']" /></a>
            <a class="icon-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a class="icon-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
            <a class="icon-link"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a class="icon-link"><font-awesome-icon :icon="['fab', 'codepen']" /></a>
            <a class="icon-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobNav: false,
    }
  },
  methods: {
    closeMobNav() {
      if(this.showMobNav) {
        this.showMobNav = false;
        this.$refs.mobToggle.checked = false;
      }
    },
    positionUp(evt, el) {
        console.log(window.scrollY);
    }
  }
}
</script>


<style lang="scss">
@import './assets/scss/main.scss';

// #app {
//   background: #2E47BF;
// }

// .page-enter-active, .page-leave-active {
//   transition: opacity .3s, transform .2s;
//   transition-delay: .1s;
// }
// .page-enter, .page-leave-to {
//   opacity: 0;
//   // transform: translateX(-100%);
// }
</style>

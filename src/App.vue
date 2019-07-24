<template>
  <div id="app" class="app-container">
    <div id="nav" class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <div class="mob-nav-btn">
      <input type="checkbox" ref="mobToggle" id="menu-toggle" @click="showMobNav = !showMobNav">
      <label for="menu-toggle" class="menu-toggle-label">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>

    <transition name="pageTransition">
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
    }
  }
}
</script>


<style lang="scss">
  @import './assets/scss/main.scss';
</style>

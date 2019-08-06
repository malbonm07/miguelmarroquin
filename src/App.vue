<template>
  <div id="app" class="app-container">
    
<!------------------------------ NAV MENU DESKTOP -------------------------->
    <div id="nav" class="desk-nav-menu">
      <ul class="desk-nav-menu__nav">
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/"
          @click.native="closeMobNav">
          {{$t("message.nav.intro")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/about"
          @click.native="closeMobNav">
          {{$t("message.nav.about")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/skills"
          @click.native="closeMobNav">
          {{$t("message.nav.skills")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/portfolio"
          @click.native="closeMobNav">
          {{$t("message.nav.portfolio")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/education"
          @click.native="closeMobNav">
          {{$t("message.nav.education")}}
        </router-link>
        </li>
      </ul>
    </div>
<!------------------------------ END NAV MENU DESKTOP -------------------------->


<!------------------------------ LOGO -------------------------->
    <router-link class="logo" to="/">
      <div class="linea1">M</div>
      <div class="linea2">M</div>
    </router-link>
<!------------------------------ END LOGO -------------------------->


<!------------------------------ MOBILE NAV BTN -------------------------->
    <div class="mob-nav-btn">
      <input type="checkbox" ref="mobToggle" id="menu-toggle" @click="showMobNav = !showMobNav">
      <label for="menu-toggle" class="menu-toggle-label">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>
<!------------------------------ END MOB NAV BTN -------------------------->


<!------------------------------ ROUTER VIEW -------------------------->
    <transition name="page" mode="out-in">
      <router-view/>
    </transition> 
<!------------------------------ END ROUTER VIEW -------------------------->


<!------------------------------ MOBILE NAV MENU -------------------------->
    <transition name="fadeNav">
      <div v-show="showMobNav" class="mob-nav-menu">
        <nav class="mob-nav-menu__nav">
          <ul class="mob-nav-menu__nav--list">
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/"
              @click.native="closeMobNav">
              {{$t("message.nav.intro")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/about"
              @click.native="closeMobNav">
              {{$t("message.nav.about")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/skills"
              @click.native="closeMobNav">
              {{$t("message.nav.skills")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/portfolio"
              @click.native="closeMobNav">
              {{$t("message.nav.portfolio")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/education"
              @click.native="closeMobNav">
              {{$t("message.nav.education")}}
            </router-link>
            </li>
          </ul>
          <div class="mob-nav-menu__nav--icons">
            <h4 class="text-center text-caption uppercase text-regular mb-2 mt-3">{{$t("message.nav.touch")}}</h4>
            <a href="mailto:malbonm07@gmail.com" target="_blank" class="icon-link"><font-awesome-icon :icon="['fa', 'envelope']" /></a>
            <a href="https://twitter.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <!-- <a href="https://www.facebook.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a> -->
            <a href="https://github.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="https://codepen.io/Malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'codepen']" /></a>
            <a href="https://www.linkedin.com/in/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
          </div>
        </nav>
      </div>
    </transition>
<!------------------------------ END MOBILE NAV MENU -------------------------->


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
    },
    changeLang() {
      this.$i18n.locale = 'us'
    }
  }
}
</script>


<style lang="scss">
@import './assets/scss/main.scss';
// body {margin: 0; height: 100%; overflow: hidden}
//logo styles ares in '.assets/scss/logo';
//langagues switch styles are in './assets/scss/components/langSwitch';'
//mob nav menu styles are in './assets/scss/layouts/nav/mob-nav-menu';
//mob nav menu btn styles are in './assets/scss/layouts/nav/mob-nav-btn';
//nav menu styles are in './assets/scss/layouts/nav/navbar-desktop';



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

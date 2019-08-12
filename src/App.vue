<template>
  <div id="app" class="app-container">


<!------------------------------ LOGO -------------------------->
    <router-link class="logo" to="/">
      <div class="logo">
        <img src="https://i.imgur.com/IBL3Gg1.png" alt="logo" class="logo-img">
      </div>
    </router-link>
<!------------------------------ END LOGO -------------------------->


<!------------------------------ NAV MENU DESKTOP -------------------------->
    <div id="nav" class="desk-nav-menu">
      <ul class="desk-nav-menu__nav">
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/" @click.native="bodyColor('#3AAFA9')"
          exact>
          {{$t("message.nav.intro")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/about" @click.native="bodyColor('#EC5D3D')"
          exact>
          {{$t("message.nav.about")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/skills" @click.native="bodyColor('#0B0C10')"
          exact>
          {{$t("message.nav.skills")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/portfolio" @click.native="bodyColor('#2E47BF')"
          exact>
          {{$t("message.nav.portfolio")}}
        </router-link>
        </li>
        <li class="desk-nav-menu__nav--link">
          <router-link class="route-link" to="/education" @click.native="bodyColor('#6A1B9A')"
          exact>
          {{$t("message.nav.education")}}
        </router-link>
        </li>
      </ul>
    </div>
<!------------------------------ END NAV MENU DESKTOP -------------------------->


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
              @click.native="closeMobNav('#3AAFA9')">
              {{$t("message.nav.intro")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/about"
              @click.native="closeMobNav('#EC5D3D')">
              {{$t("message.nav.about")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/skills"
              @click.native="closeMobNav('#0B0C10')">
              {{$t("message.nav.skills")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/portfolio"
              @click.native="closeMobNav('#2E47BF')">
              {{$t("message.nav.portfolio")}}
            </router-link>
            </li>
            <li class="mob-nav-menu__nav--list--link">
              <router-link class="route-link" to="/education"
              @click.native="closeMobNav('#6A1B9A')">
              {{$t("message.nav.education")}}
            </router-link>
            </li>
            <div>
              <button @click="changeLanguage('es')" class="mob-langSwitch" :class="{'mob-active' : activeLanguage === 'es'}">ES</button>
              <button @click="changeLanguage('us')" class="mob-langSwitch" :class="{'mob-active' : activeLanguage === 'us'}">EN</button>
            </div>
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
import {languageSwitch} from '@/mixins/languageSwitch';

export default {
  metaInfo() {
    return {
    title: 'Miguel Alonso Marroquin | Front End Developer',
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Apasionado Front End Developer, autodidacta y que le gustan los retos, dispuesto a contribuir y aprender.'},
      {property: 'og:title', content: 'Miguel Alonso Marroquin | Front End Developer'},
      {property: 'og:site_name', content: 'Miguel Alonso Marroquin'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://malbonm07.github.io'},
      {property: 'og:image', content: 'https://i.imgur.com/ZoQbreu.png'},
      {property: 'og:description', content: 'Front End Developer'},
      //twitter card.
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://malbonm07.github.io'},
      {name: 'twitter:title', content: 'Miguel ALonso Marroquin - Portfolio'},
      {name: 'twitter:description', content: 'Self taught | Front End Web Developer'},
      // My twitter handle.
      {name: 'twitter:creator', content: '@malbonm07'},
      {name: 'twitter:image:src', content: 'https://i.imgur.com/ZoQbreu.png'},
    ],
    link: [
      {rel: 'canonical', href: 'https://malbonm07.github.io'},
      {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"},
      {rel: "icon", type:"image/png", sizes: "32x32", href: "/favicon-32x32.png"},
      {rel: "icon", type:"image/png", sizes: "16x16", href: "/favicon-16x16.png"}
    ]
    }
  },
  mixins: [languageSwitch],
  data() {
    return {
      showMobNav: false,
    }
  },
  methods: {
    closeMobNav(color) {
      if(this.showMobNav) {
        document.body.style.background = color;
        this.showMobNav = false;
        this.$refs.mobToggle.checked = false;
      }
    },
    bodyColor(color) {
      document.body.style.background = color;
    }
  },
  computed: {
    activeRoute() {
      return this.$route
    }
  },
  created() {
    document.body.style.background = '#3AAFA9';
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

.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter{
  opacity: 0;
}
 .page-leave-to {
   opacity: 0;
 }
</style>

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EmptyViewComponent from './views/proyectos/EmptyViewComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('./views/Education.vue')
    },
    {
      path: '/portfolio',
      component: EmptyViewComponent,
      children: [
        {
          path: '',
          component: () => import('./views/Portfolio.vue')
        },
        {
          path: 'personal-portfolio',
          component: () => import('./views/proyectos/mobileByRoute/PersonalPortfolio.vue')
        },
        {
          path: 'quasar-music-app',
          component: () => import('./views/proyectos/mobileByRoute/QuasarAppVue')
        },
        {
          path: 'vuetify-landing',
          component: () => import('./views/proyectos/mobileByRoute/VuetifyLandingPage.vue')
        },
        {
          path: 'nuxt-school-page',
          component: () => import('./views/proyectos/mobileByRoute/NuxtSchoolPage.vue')
        },
        {
          path: 'vuetify-blog',
          component: () => import('./views/proyectos/mobileByRoute/BlogVuetify.vue')
        },
        {
          path: 'vue-calculator',
          component: () => import('./views/proyectos/mobileByRoute/Calculator.vue')
        },
        {
          path: 'vue-shop-cart',
          component: () => import('./views/proyectos/mobileByRoute/ShopCart.vue')
        },
        {
          path: 'social-app',
          component: () => import('./views/proyectos/mobileByRoute/SocialApp.vue')
        },
        {
          path: 'pokedex',
          component: () => import('./views/proyectos/mobileByRoute/Pokedex.vue')
        },
        {
          path: 'todo-list',
          component: () => import('./views/proyectos/mobileByRoute/TodoList.vue')
        },
      ]
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('./views/Skills.vue')
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EmptyViewComponent from './views/proyectos/EmptyViewComponent.vue'
import Portfolio from './views/Portfolio.vue'
import QuasarAppVue from './views/proyectos/QuasarAppVue.vue'

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
      name: 'portfolio',
      // component: Portfolio,
      component: EmptyViewComponent,
      children: [
        {
          path: '',
          component: () => import('./views/Portfolio.vue')
        },
        {
          path: 'quasar-app',
          component: () => import('./views/proyectos/QuasarAppVue')
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

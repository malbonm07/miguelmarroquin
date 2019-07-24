<template>
  <div class="portfolio-container">
    <div class="portfolio-container__works">
      <div class="portfolio-container__works--text text-title">
        <span>W</span>
        <span>O</span>
        <span>R</span>
        <span>K</span>
        <span>S</span>
      </div>
      <div class="spacer"></div>
      <div class="portfolio-container__works--description text-center">
        <h2 class="mb-2">trabajos realizados</h2>
        <ul class="portfolio-container__works--description-list">
            <li ><router-link to="/portfolio/quasar-app">vue music app con quasar</router-link></li>
            <li><a>vuetify landing page</a></li>
            <li><a>pagina web de escuela con nuxt</a></li>
            <li><a>blog con vue</a></li>
            <li><a>calculadora vue</a></li>
            <li><a>vue shop cart</a></li>
            <li><a>mini pokedex vue</a></li>
            <li><a>todo list vue</a></li>
        </ul>
        <button class="portfolio-container__works--description-btn mt-1">
          proyectos
        </button>
      </div>
    </div>
    <div class="portfolio-container__projects">
        <div class="portfolio-container__projects--item" v-for="(proyecto, index) in proyectos" :key="index">
            <figure class="portfolio-container__projects--item--img">
                <v-lazy-image class="lazy-img" :src="proyecto.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
            </figure>
            <div class="portfolio-container__projects--item--links">
                <router-link class="details" :to="proyectos[0].link">Ver Detalles</router-link>
                <router-link class="name" :to="proyectos[0].link">{{proyecto.titulo}}</router-link>
                <div class="skills-span">
                    <span v-for="(skill, i) in proyecto.skills" :key="i">{{skill}},&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import img2 from '@/assets/imagenes/proyectos/quasar-app.png'
import img8 from '@/assets/imagenes/proyectos/vuetify-landing.png'
import img1 from '@/assets/imagenes/proyectos/landing-school.png'
import img4 from '@/assets/imagenes/proyectos/vue-calculator.png'
import img6 from '@/assets/imagenes/proyectos/vue-shopcart.png'
import img5 from '@/assets/imagenes/proyectos/vue-pokemon.png'
import img7 from '@/assets/imagenes/proyectos/vuetify-blog.png'
import img3 from '@/assets/imagenes/proyectos/todo-list-vue.png'

export default {
    data() {
        return {
            proyectos: [
                {
                    img: img2,
                    titulo: 'vue music SPA con quasar',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'VueJS',
                        'Vue-router',
                        'Bootstrap',
                        'Javascript linting: Eslint',
                        'Rest API with AXIOS',
                        'Event-bus (plugin)',
                        'Vue i18n',
                        'localStorage',
                    ]
                },
                {
                    img: img8,
                    titulo: 'landing page con vuetify',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'Vuetify Material Design',
                        'VueJS',
                        'Vue router',
                        'Sass',
                        'Css Grid',
                        'Css Flexbox',
                        'Maquetación y diseño Web',
                    ]
                },
                {
                    img: img1,
                    titulo: 'escuela digital con nuxt',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'Nuxt',
                        'Sass',
                        'Css Flexbox',
                        'Css Grid',
                        'Vue Components',
                    ]
                },
                {
                    img: img7,
                    titulo: 'blog con vuetify',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'Vuetify',
                        'Sass',
                        'Css Grid',
                    ]
                },
                {
                    img: img4,
                    titulo: 'calculadora con vueJS',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'VueJS',
                        'Props and directives',
                        'V-model',
                        'V-bind',
                    ]
                },
                {
                    img: img6,
                    titulo: 'shop cart con VueJS',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'VueJS',
                        'Vue Components',
                        'Props, directives, methods',
                        'Css grid, Sass',
                        'localStorage'
                    ]
                },
                {
                    img: img5,
                    titulo: 'pokedex con vuetify',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'VueJS',
                        'Vuetify',
                        'UI Components',
                        'Vue router',
                        'Rest API with AXIOS'

                    ]
                },
                {
                    img: img3,
                    titulo: 'todo list con vueJS',
                    link: '/portfolio/quasar-app',
                    skills: [
                        'VueJS',
                        'Props, directives, methods',
                        'Computed properties',
                        'Watch property',
                        'Event handling, Conditional',
                    ]
                },
            ]
        }
    }
}
</script>

<style>
    .v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
    }
    .v-lazy-image-loaded {
    filter: blur(0);
    }
</style>

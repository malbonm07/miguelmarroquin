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
            <li><router-link class="li-route" to="portfolio/quasar-music-app">vue music app con quasar</router-link></li>
            <li><router-link class="li-route" to="portfolio/vuetify-landing">
            vuetify landing page
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/nuxt-school-page">
            pagina web de escuela con nuxt
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/vuetify-blog">
            blog con vue
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/vue-calculator">
            calculadora vue
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/vue-shop-cart">
            vue shop cart
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/pokedex">
            mini pokedex vue
            </router-link></li>
            <li><router-link class="li-route" to="portfolio/todo-list">
            todo list vue
            </router-link></li>
        </ul>
        <ul class="desktContainer-list">
            <li><a class="li-route" v-scroll-to="{el: '#musicapp'}">vue music app con quasar</a></li>
            <li><a class="li-route" v-scroll-to="{el: '#vuetyLanding'}">
            vuetify landing page
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#escuelaNuxt'}">
            pagina web de escuela con nuxt
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#blogVue'}">
            blog con vue
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#calculadoraVue'}">
            calculadora vue
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#shopCart'}">
            vue shop cart
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#pokedex'}">
            mini pokedex vue
            </a></li>
            <li><a class="li-route" v-scroll-to="{el: '#todoList'}">
            todo list vue
            </a></li>
        </ul>
        <button class="portfolio-container__works--description-btn mt-1" v-scroll-to="{el: '#proyectos'}">
          proyectos
        </button>
      </div>
    </div>
    <div class="portfolio-container__projects">
        <div class="portfolio-container__projects--item" v-for="(proyecto, index) in proyectos" :key="index" id="proyectos">
            <figure class="portfolio-container__projects--item--img">
                <v-lazy-image class="lazy-img" :src="proyecto.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
            </figure>
            <div class="portfolio-container__projects--item--links">
                <router-link class="details" :to="proyecto.link">Ver Detalles</router-link>
                <router-link class="name" :to="proyecto.link">{{proyecto.titulo}}</router-link>
                <div class="skills-span" v-scroll="addFadeUp">
                    <span v-for="(skill, i) in proyecto.skills" :key="i">{{skill}},&nbsp;</span>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-container__DesktProjects">
        <div class="portfolio-container__DesktProjects--container">
            <div class="DesktProjects-item" id="musicapp">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[0].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[0].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[0])" class="details" 
                    >Ver Detalles</a>
                    <a @click="projectModal(proyectos[0])" class="name"
                    >{{proyectos[0].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[0].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="DesktProjects-item row-reverse" id="vuetyLanding">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[1].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[1].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[1])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[1])" class="name">{{proyectos[1].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[1].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-container__DesktProjects--container">
            <div class="DesktProjects-item" id="escuelaNuxt">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[2].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[2].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[2])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[2])" class="name">{{proyectos[2].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[2].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="DesktProjects-item row-reverse" id="blogVue">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[3].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[3].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[3])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[3])" class="name">{{proyectos[3].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[3].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-container__DesktProjects--container">
            <div class="DesktProjects-item" id="calculadoraVue">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[4].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[4].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[4])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[4])" class="name">{{proyectos[4].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[4].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="DesktProjects-item row-reverse" id="shopCart">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[5].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[5].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[5])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[5])" class="name">{{proyectos[5].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[5].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-container__DesktProjects--container">
            <div class="DesktProjects-item" id="pokedex">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[6].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[6].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[6])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[6])" class="name">{{proyectos[6].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[6].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="DesktProjects-item row-reverse" id="todoList">
                <figure class="DesktP-img">
                    <v-lazy-image class="lazy-img" :src="proyectos[7].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    <!-- <div class="img-overlay">{{proyectos[7].titulo}}</div> -->
                    <div class="img-overlay">Ver Sitio</div>
                </figure>
                <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                    <a @click="projectModal(proyectos[7])" class="details">Ver Detalles</a>
                    <a @click="projectModal(proyectos[7])" class="name">{{proyectos[7].titulo}}</a>
                    <div class="skills-span" v-scroll="addFadeUp">
                        <span v-for="(skill, i) in proyectos[7].skills" :key="i">{{skill}},&nbsp;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <transition name="projectModalAppear">
        <div v-show="showProjectModal" class="dekstProjectModal">
            <div  v-if="currentProjectModal" class="desktModal-content">
                <div class="desktModal-btnContent">
                    <div class="close-btn" @click="closeModalProject">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="desktModal-title">
                    {{currentProjectModal.titulo}}
                </div>
                <div class="desktModal-description">
                    <h3 class="proyect-sub">Skills</h3>
                    <div class="box-text">
                        {{currentProjectModal.details}}
                    </div>
                    <h3 class="proyect-sub">Herramientas de Desarrollo</h3>
                    <div class="box-tools">
                        <span v-for="(herramienta, i) in currentProjectModal.herramientas" :key="i"
                        class="tool">
                            {{herramienta}}&nbsp;
                        </span>
                    </div>
                    <div class="box-buttons">
                        <a :href="currentProjectModal.linkSitio" target="_blank" class="modal-btn1">
                            <font-awesome-icon class="img-sub__link-icon proyectModalIcon" :icon="['fas', 'link']"/>
                            Ver el Sitio
                        </a>
                        <a :href="currentProjectModal.linkGithub" target="_blank" class="modal-btn2">
                            <font-awesome-icon class="img-sub__link-icon proyectModalIcon" :icon="['fab', 'github']" />
                            Ver en Github
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </transition>
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
            currentProjectModal: null,
            showProjectModal: false,
            proyectos: [
                {
                    img: img2,
                    titulo: 'vue music SPA con quasar',
                    link: '/portfolio/quasar-music-app',
                    linkGithub: 'https://github.com/malbonm07/nuxt-landing-template',
                    linkSitio: 'https://github.com/malbonm07/nuxt-landing-template',
                    skills: [
                        'VueJS',
                        'Vue-router',
                        'Bootstrap',
                        'Javascript linting: Eslint',
                        'Rest API with AXIOS',
                        'Event-bus (plugin)',
                        'Vue i18n',
                        'localStorage',
                    ],
                    details: `Para retar mis habilidades decidí poner en práctica todo lo aprendido, es por eso que creé una Single Page Aplication (SPA) de música que consume los servicios de spotify a traves de una API que utilicé en el curso de VueJS de Platzi. Agregué una funcionalidad que permite seleccionar y guardar las canciones en un ruta diferente llamada "favoritos" y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. 
                    Una vez en favoritos las canciones se pueden escuchar o eliminar si se desea. Para diseñar la app utilicé Quasar Framework ya que creo que era un buen momento para practicar con algún framework con componentes UI.`,
                    herramientas: ['html', 'css', 'sass', 'BEM Arquitecture', 'javascript', 'quasar framework', 'vue', 'vue router' ]

                },
                {
                    img: img8,
                    titulo: 'landing page con vuetify',
                    link: '/portfolio/vuetify-landing',
                    linkGithub: 'https://github.com/malbonm07/nuxt-landing-template',
                    linkSitio: 'https://github.com/malbonm07/nuxt-landing-template',
                    skills: [
                        'Vuetify Material Design',
                        'VueJS',
                        'Vue router',
                        'Sass',
                        'Css Grid',
                        'Css Flexbox',
                        'Maquetación y diseño Web',
                    ],
                    details: `Para poner en práctica el concepto de Material Design decidí crear una pagina utilizando Vuetify. Aprendí a utilizar algunos de sus componentes y a maquetar en sistema 'grid', el sistema es parecido al que usa Bootstrap. De esta manera pude ordenar el layout de los componentes y para darle animación utilicé Animation on Scroll (AOS). Para los íconos instale Font Awesome vía npm. La pagina está subida en gh-pages de Github.`,
                    herramientas: ['html', 'sass', 'vue', 'vuetify', 'flexbox', 'nuxt', 'javascript']

                },
                {
                    img: img1,
                    titulo: 'escuela digital con nuxt',
                    link: '/portfolio/nuxt-school-page',
                    linkGithub: 'https://github.com/malbonm07/nuxt-landing-template',
                    linkSitio: 'https://github.com/malbonm07/nuxt-landing-template',
                    skills: [
                        'Nuxt',
                        'Sass',
                        'Css Flexbox',
                        'Css Grid',
                        'Vue Components',
                    ],
                    details: `Para mejorar mi dominio en Css me propuse como reto reproducir una pagina web enfocada en la enseñanza artistica. Decidí hacerla totalmente responsive e imitar los componentes utilizando Vue. Para el swiper instalé vue-awesome-swiper . Los otros componentes como los Expansion panels y Tabs los desarrollé con Vue y Sass.`,
                    herramientas: ['Html', 'Sass', 'Nuxt', 'Vue', 'Javascript', 'BEM']
                },
                {
                    img: img7,
                    titulo: 'blog con vuetify',
                    link: '/portfolio/vuetify-blog',
                    linkGithub: 'https://github.com/malbonm07/nuxt-blog-template',
                    linkSitio: 'https://malbonm07.github.io/nuxt-blog-template/',
                    skills: [
                        'Vuetify',
                        'Sass',
                        'Css Grid',
                    ],
                    details: `Este es un blog desarrollado con Vuetify Framework que se basa en los principios de Material Design, es completamente responsive. Está subida en gh-pages.`,
                    herramientas: ['html', 'sass', 'vuetify', 'nuxt', 'vue', 'vue router']
                },
                {
                    img: img4,
                    titulo: 'calculadora con vueJS',
                    link: '/portfolio/vue-calculator',
                    linkGithub: 'https://github.com/malbonm07/vue-calculator',
                    linkSitio: 'https://malbonm07.github.io/v-calculator/',
                    skills: [
                        'VueJS',
                        'Props and directives',
                        'V-model',
                        'V-bind',
                    ],
                    details: `Este es uno de los proyectos que realicé para obtener mi certificado Front End en Freecodecamp. Para maquetar el diseño utilicé Css Grid Flexbox, la estructura lo hice con HTML.
                    Para desarrollar la app utilicé Vue. Con todo listo puse en práctica mi lógica en programación.`,
                    herramientas: ['html', 'sass', 'flexbox', 'grid', 'javascript']
                },
                {
                    img: img6,
                    titulo: 'shop cart con VueJS',
                    link: '/portfolio/vue-shop-cart',
                    linkGithub: 'https://github.com/malbonm07/vue-shopping-cart',
                    linkSitio: 'https://malbonm07.github.io/v-shoppingcart/',
                    skills: [
                        'VueJS',
                        'Vue Components',
                        'Props, directives, methods',
                        'Css grid, Sass',
                        'localStorage'
                    ],
                    details: `Uno de mis primeros proyectos, en este caso tuve como reto la lógica para programar una SPA carrito de compra basico, para crear las funcionalidades como seleccionar, comprar y limpiar la lista de items utilicé Vue. Uno de los problemas que tuve que resolver era la perdida de datos al momento de refrescar la página, y buscando información decidí optar por la propiedad LocalStorage de HTML. Con ello pude guardar todos los datos y evitar la perdida de los mismos.`,
                    herramientas: ['html', 'sass', 'vue', 'javascript']
                },
                {
                    img: img5,
                    titulo: 'pokedex con vuetify',
                    link: '/portfolio/pokedex',
                    linkGithub: 'https://github.com/malbonm07/pokemon',
                    linkSitio: 'https://malbonm07.github.io/v-pokemon/',
                    skills: [
                        'VueJS',
                        'Vuetify',
                        'UI Components',
                        'Vue router',
                        'Rest API with AXIOS'

                    ],
                    details: `En esta pequeña app puse a prueba mi conocimiento en el consumo de Rest API haciendo uso de la librería AXIOS. Para el diseño utilicé por primera vez Vuetify que viene con UI Componentes y para los datos utilicé PokéAPI.`,
                    herramientas: ['html', 'sass', 'vue', 'vuetify', 'Axios', 'vue router']
                },
                {
                    img: img3,
                    titulo: 'todo list con vueJS',
                    link: '/portfolio/todo-list',
                    linkGithub: 'https://github.com/malbonm07/v-todolist',
                    linkSitio: 'https://malbonm07.github.io/v-todolist/',
                    skills: [
                        'VueJS',
                        'Props, directives, methods',
                        'Computed properties',
                        'Watch property',
                        'Event handling, Conditional',
                    ],
                    details: `Mi primera app desarrollada con VueJS aquí puse en práctica algunos conocimientos del Framework para tratar de entender mejor el core, la comunicación entre componentes a traves de props y custom events, el manejo básico del state, condicionales, mapeo de arrays a Elementos con v-for. La app tiene funcionalidades para agregar, editar y eliminar datos, también se puede filtrar las tareas activas o completas.`,
                    herramientas: ['html', 'css', 'vue', 'javascript']
                },
            ]
        }
    },
    methods: {
        addFadeUp(evt, el) {

        },
        projectModal(obj) {
            if(!this.showProjectModal) {
                this.showProjectModal = true;
                this.currentProjectModal = obj;
            }
        },
        closeModalProject() {
            if(this.showProjectModal) {
                this.showProjectModal = false;
            }
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

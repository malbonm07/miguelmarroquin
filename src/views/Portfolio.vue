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
            <li><a>vue music app con quasar</a></li>
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
        <!-- <div class="project-img">
        <v-lazy-image
                class="lazy-img" :src="proyectos[0].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </div> -->
        <div class="portfolio-container__projects--item">
            <figure class="portfolio-container__projects--item--img">
                <v-lazy-image
                     class="lazy-img" :src="proyectos[0].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
            </figure>
            <article class="portfolio-container__projects--item--description">
                <div class="skills-description">
                    <h3>Skills:</h3>
                    <p>Para retar mis habilidades decidí poner en práctica todo lo aprendido es por eso que creé una pequeña app de música que consume los servicios de spotify a traves de una <span>API</span> que utilicé en el curso de VueJS de Platzi.</p>
                    <p>Agregué una funcionalidad que permité seleccionar y guardar las canciones en un ruta diferente llamada 'favoritos' y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. Además de guardar canciones también se pueden eliminar</p>
                    <p>Para diseñar la app utilicé&nbsp;<a href="https://quasar.dev/">Quasar Framework</a>ya que creo que era un buen momento para prácticar con algún framework.</p>
                </div>
                <ul class="workflow-description">
                    <h3>Herramientas:</h3>
                    <li>
                        <h4 class="sub">CSS</h4>
                        <p><a href="">Sass</a>, <a href="">Bemit</a></p>
                    </li>
                    <li>
                        <h4 class="sub">Javascript</h4>
                        <p><a href="https://quasar.dev/">Quasar Framework</a>, <a href="https://vuejs.org/">Vue</a>, <a href="https://router.vuejs.org/">Vue Router</a>, </p>
                    </li>
                </ul>
            </article>
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
                    titulo: 'music app'
                },
                {
                    img: img8,
                    titulo: 'landing page'
                },
                {
                    img: img1,
                    titulo: 'escuela digital'
                },
                {
                    img: img4,
                    titulo: 'blog'
                },
                {
                    img: img6,
                    titulo: 'calculadora'
                },
                {
                    img: img5,
                    titulo: 'shop cart'
                },
                {
                    img: img7,
                    titulo: 'pokedex'
                },
                {
                    img: img3,
                    titulo: 'todo list'
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

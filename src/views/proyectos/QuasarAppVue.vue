<template>
    <div class="quasar-app">
        <figure class="quasar-app--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/quasar-music-app" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/vue-quasar-spa/#/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="quasar-app--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Para retar mis habilidades decidí poner en práctica todo lo aprendido, es por eso que creé una Single Page Aplication <span class="text-regular">(SPA)</span> de música que consume los servicios de spotify a traves de una <span class="text-regular">API</span> que utilicé en el curso de VueJS de Platzi.</p>
                <p>Agregué una funcionalidad que permité seleccionar y guardar las canciones en un ruta diferente llamada 'favoritos' y le agregué una pequeña notificación al momento de hacerlo, y para no perder la data utilicé el localstorage. Una vez en favoritos las canciones se pueden escuchar o eliminar si se desea.</p>
                <p>Para diseñar la app utilicé&nbsp;<a href="https://quasar.dev/">Quasar Framework</a>&nbsp;ya que creo que era un buen momento para prácticar con algún framework con componentes UI.</p>
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
</template>

<script>
import img2 from '@/assets/imagenes/proyectos/quasar-app.png';
export default {
    data() {
        return {
            proyectoName: {
                img: img2,
                nombre: 'quasar app'
            }
        }
    },
}
</script>

<style>

</style>

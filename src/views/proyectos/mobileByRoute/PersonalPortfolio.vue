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
                <p>Después de practicar con Vue haciendo algunas plantillas creando paginas web o SPA, decidí que era momento de crear un nuevo portafolio para demostrar todos mis trabajos, para ello me puse manos a la obra, empecé creando un nuevo proyecto con vue-cli, para los estilos use Sass junto a la metodología BEM, cada componente y view de cada pagina tiene su archivo .scss y todo está importado en el main.scss, me pareció una manera más ordeanada de trabajar. Empecé con mobile first design, luego tablet y desktop. Las animaciones están hechas con puro css y otras con pequeñas librerías. Las rutas y las imagenes están contruidas bajo el concepto de <a href="https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk" target="_blank">Lazy Loading</a> que mejora el performance de la página.</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:</h3>
                <li>
                    <h4 class="sub">CSS</h4>
                    <p><a href="">Sass</a>, <a href="https://www.sitepoint.com/css-architecture-block-element-modifier-bem/" target="_blank">BEM Arquitecture</a>, <a href="https://kazupon.github.io/vue-i18n/" target="_blank">Vue-i18n</a></p>
                </li>
                <li>
                    <h4 class="sub">Javascript</h4>
                    <p><a href="https://vuejs.org/">Vue</a>, <a href="https://router.vuejs.org/">Vue Router</a>, </p>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            proyectoName: {
                img: "https://media.giphy.com/media/fZ2bJg4HC4pB6risMw/giphy.gif",
                nombre: 'Miguel Alonso Marroquin'
            }
        }
    },
}
</script>

<style>

</style>

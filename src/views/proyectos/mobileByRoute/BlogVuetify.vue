<template>
    <div class="blog-vuetify">
        <figure class="blog-vuetify--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/nuxt-blog-template" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/nuxt-blog-template/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="blog-vuetify--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Este es un blog desarrollado con <span>Vuetify Framework</span> que se basa en los principios de Material Design, es completamente responsive. Está subida en gh-pages</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:&nbsp;</h3>
                <li>
                    <h4 class="sub">css</h4>
                    <p><a href="">Sass</a></p>
                </li>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://vuetifyjs.com/en/" target="_blank">Vuetify Framework</a>, <a href="https://nuxtjs.org/" target="_blank">Nuxt</a>,<a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://router.vuejs.org/" target="_blank">Vue Router</a></p>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import img7 from '@/assets/imagenes/proyectos/vuetify-blog.png';
export default {
    data() {
        return {
            proyectoName: {
                img: img7,
                titulo: 'blog con vuetify'
            }
        }
    },
}
</script>

<style>

</style>
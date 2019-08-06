<template>
    <div class="vuetify-landing">
        <figure class="vuetify-landing--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/nuxt-landing-template" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/nuxt-landing-template/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="vuetify-landing--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Para poner en práctica el concepto de <span class="text-regular">Material Design</span> decidí crear una pagina utilizando <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify Framework.</a> Aprendí a utilizar algunos de sus componentes y a maquetar en sistema 'grid', el sistema es parecido al que usa <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>. De esta manera pude ordenar el layout de los componentes y para darle animación utilicé <a href="https://michalsnik.github.io/aos/" target="_blank">Animation on Scroll (AOS)</a>. Para los íconos instale <a href="https://fontawesome.com/icons?d=gallery" target="_blank">Font Awesome</a> vía npm. La pagina está subida en <a href="https://pages.github.com/" target="_blank">gh-pages</a> de <a href="https://github.com/" target="_blank">Github</a>.</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:&nbsp;</h3>
                <li>
                    <h4 class="sub">Tecnologías</h4>
                    <p><a href="https://nuxtjs.org/" target="_blank">Nuxt</a>, <a href="https://vuetifyjs.com/en/" target="_blank">Vuetify Framework</a></p>
                </li>
                <li>
                    <h4 class="sub">css</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="http://getbem.com/introduction/" target="_blank">Bemit</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://vuejs.org/" target="_blank">Vue</a>, <a href="https://router.vuejs.org/" target="_blank">Vue Router</a>, </p>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import img8 from '@/assets/imagenes/proyectos/vuetify-landing.png'
export default {
    data() {
        return {
            proyectoName: {
                img: img8,
                nombre: 'vuetify landing page'
            }
        }
    },
}
</script>

<style>

</style>
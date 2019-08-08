<template>
    <div class="pokedex-content">
        <figure class="pokedex-content--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/pokemon" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/v-pokemon/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="pokedex-content--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>En esta pequeña app puse a prueba mi conocimiento en el consumo de <span class="text-regular">Rest API</span> haciendo uso de la librería <span>AXIOS</span>. Para el diseño utilicé por primera vez <span class="text-regular">Vuetify Framework</span> que viene con UI Componentes y para los datos utilicé <a href="https://pokeapi.co/" target="_blank">PokéAPI</a></p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:</h3>
                <li>
                    <h4 class="sub">css</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="https://www.sitepoint.com/css-architecture-block-element-modifier-bem/" target="_blank">Bemit</a></p>
                </li>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://vuetifyjs.com/" target="_blank">Vuetify Framework</a>, <a href="https://vuejs.org/">Vue</a>, <a href="https://github.com/axios/axios" target="_blank">AXIOS</a>, <a href="https://router.vuejs.org/" target="_blank">Vue Router</a>, </p>
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
                img: "https://i.imgur.com/J0Rywzi.png",
                nombre: 'quasar app'
            }
        }
    },
}
</script>

<style>

</style>
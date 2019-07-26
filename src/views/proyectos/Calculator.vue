<template>
    <div class="calculator">
        <figure class="calculator--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/vue-calculator" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/v-calculator/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="calculator--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Este es uno de los proyectos que realicé para obtener mi certificado Front End en <a href="https://www.freecodecamp.org/" target="_blank" >Freecodecamp</a>.</p>
                <p>Para maquetar el diseño utilicé <span class="text-regular">Css Grid</span> y <span class="text-regular">Flexbox</span>, la estructura lo hice con HTML.</p>
                <p>Para desarrollar la app utilicé <span class="text-regular">Vue Framework</span>. Con todo listo puse en práctica mi lógica en programación.</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:</h3>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank">Html5</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://vuejs.org/" target="_blank">Vue</a></p>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import img4 from '@/assets/imagenes/proyectos/vue-calculator.png'
export default {
    data() {
        return {
            proyectoName: {
                img: img4,
                nombre: 'calculadora'
            }
        }
    },
}
</script>

<style>

</style>
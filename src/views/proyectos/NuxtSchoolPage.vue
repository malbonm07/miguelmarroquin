<template>
    <div class="nuxt-school">
        <figure class="nuxt-school--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/landing-school" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="nuxt-school--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Para mejorar mi dominio en <span class="text-regular">CSS</span> me propuse como reto reproducir una pagina web enfocada en la enseñanda artistica. Decidí hacerla totalmente responsive e imitar los componentes utilizando Vue. Para el swiper instalé <span class="text-regular">vue-awesome-swiper</span>. Los otros componentes como los Expansion panels y Tabs los desarrollé con&nbsp;<span class="text-regular">VUE</span>&nbsp;y&nbsp;<span class="text-regular">SaSS</span></p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:&nbsp;</h3>
                <li>
                    <h4 class="sub">TECNOLOGÍAS</h4>
                    <p><a href="https://surmon-china.github.io/vue-awesome-swiper/" target="_blank">Vue-Awesome-Swiper</a></p>
                </li>
                <li>
                    <h4 class="sub">css</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="http://getbem.com/introduction/" target="_blank">Bemit</a></p>
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
import img1 from '@/assets/imagenes/proyectos/landing-school.png'
export default {
    data() {
        return {
            proyectoName: {
                img: img1,
                nombre: 'school page'
            }
        }
    },
}
</script>

<style>

</style>
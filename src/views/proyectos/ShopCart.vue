<template>
    <div class="shop-cart">
        <figure class="shop-cart--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="shop-cart--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Uno de mis primeros proyectos, en este caso tuve como reto la lógica para programar una <span class="text-regular">SPA</span> carrito de compra basico, para crear las funcionalidades como seleccionar, comprar y limpiar la lista de items utilicé <span class="text-regular">Vue Framework.</span></p>
                <p>Uno de los problemas que tuve que resolver era la perdida de datos al momento de refrescar la página, y buscando información decidí optar por la propiedad <span class="text-regular">LocalStorage</span> de <span class="text-regular">Html5</span>. Con ello pude guardar todos los datos y evitar la perdida de los mismos.</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:</h3>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="http://getbem.com/introduction/" target="_blank">Bemit</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">LocalStorage</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Html5</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://vuejs.org/">Vue-cli</a></p>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import img6 from '@/assets/imagenes/proyectos/vue-shopcart.png'
export default {
    data() {
        return {
            proyectoName: {
                img: img6,
                nombre: 'vue shop cart'
            }
        }
    },
}
</script>

<style>

</style>
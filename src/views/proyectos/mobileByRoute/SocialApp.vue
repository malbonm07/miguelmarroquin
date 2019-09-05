<template>
    <div class="social-app">
        <figure class="social-app--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/social-app" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/social-app" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="shop-cart--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Una <span class="text-regular">SPA</span> con caracteristicas de una red social, creado con <span class="text-regular">Vue</span> , <span class="text-regular">Vuex</span> , <span class="text-regular">Firebase</span> , <span class="text-regular">Express</span> . Este proyecto cubre cosas como integración/consumo de una <span class="text-regular">REST Api</span>  server construido con Node js y express, registro, login y autenticación, upload de imagenes, notificaciones y más</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:</h3>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://sass-lang.com/" target="_blank">Sass</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">LocalStorage</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Html5</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://vuejs.org/">Vue-cli</a></p>
                    <p><a href="https://vuex.vuejs.org/">Vuex</a></p>
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
                img: "https://i.imgur.com/beqN3ue.png",
                nombre: 'Social Application'
            }
        }
    },
}
</script>
<template>
    <div class="todo-list">
        <figure class="todo-list--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/v-todolist" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                Ver en Github
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/v-todolist/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                Ver el sitio
            </a></h5>
        <article class="todo-list--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>Mi primera app desarrollada con <span class="text-regular">VueJS</span>, aquí puse en práctica algunos conocimientos del Framework para tratar de entender mejor el core, la comunicación entre componentes a traves de props y custom events, el manejo básico del state, condicionales, mapeo de arrays a Elementos con v-for.</p>
                <p>La app tiene funcionalidades para agregar, editar y eliminar datos, también se puede filtrar las tareas activas o completas.</p>
            </div>
            <ul class="workflow-description">
                <h3>Herramientas:&nbsp;</h3>
                <li>
                    <h4 class="sub">tecnologías</h4>
                    <p><a href="https://vuejs.org/" target="_blank">CSS</a>, <a href="https://vuejs.org/" target="_blank">Html5</a></p>
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
export default {
    data() {
        return {
            proyectoName: {
                img: "https://i.imgur.com/nC1JW8W.png",
                nombre: 'todo list'
            }
        }
    },
}
</script>

<style>

</style>
<template>
    <div class="hadas">
        <figure class="hadas--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="http://www.hadas.pe/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                {{$t("message.portfolio.viewSite")}}
            </a></h5>
        <article class="hadas--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>{{$t("message.portfolio.projects.hadas.description")}}</p>
            </div>
            <ul class="workflow-description">
                <h3>{{$t("message.portfolio.tools")}}:</h3>
                <li>
                    <h4 class="sub">{{$t("message.portfolio.technologies")}}</h4>
                    <p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Html5</a>, <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">CSS3</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://nuxtjs.org/" target="_blank">Nuxt</a>, <a href="https://vuejs.org/" target="_blank">VueJS</a>,</p>
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
                img: "https://i.imgur.com/cJneS36.png",
                nombre: 'Hadas'
            }
        }
    },
}
</script>
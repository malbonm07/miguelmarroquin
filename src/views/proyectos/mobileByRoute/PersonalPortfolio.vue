<template>
    <div class="portfolio">
        <figure class="portfolio--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://github.com/malbonm07/miguelmarroquin" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fab', 'github']" />
                {{$t("message.portfolio.viewGithub")}}
            </a></h5>
        <h5 class="img-sub">
            <a class="img-sub__link" href="https://malbonm07.github.io/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                {{$t("message.portfolio.viewSite")}}
            </a></h5>
        <article class="portfolio--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>{{$t("message.portfolio.projects.portfolio.description")}}</p>
            </div>
            <ul class="workflow-description">
                <h3>{{$t("message.portfolio.tools")}}:</h3>
                <li>
                    <h4 class="sub">{{$t("message.portfolio.technologies")}}</h4>
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

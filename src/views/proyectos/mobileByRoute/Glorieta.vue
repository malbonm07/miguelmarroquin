<template>
    <div class="glorieta">
        <figure class="glorieta--img">
            <v-lazy-image
                    class="lazy-img" :src="proyectoName.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
        </figure>
        <h5 class="img-sub">
            <a class="img-sub__link" href="http://cmsreservas.noveltie.la/" target="_blank">
                <font-awesome-icon class="img-sub__link-icon" :icon="['fas', 'link']" />
                {{$t("message.portfolio.viewSite")}}
            </a></h5>
        <article class="glorieta--description">
            <div class="skills-description">
                <h3>Skills:</h3>
                <p>{{$t("message.portfolio.projects.glorieta.description")}}</p>
            </div>
            <ul class="workflow-description">
                <h3>{{$t("message.portfolio.tools")}}:</h3>
                <li>
                    <h4 class="sub">{{$t("message.portfolio.technologies")}}</h4>
                    <p><a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank">Css flexbox</a>, <a href="http://stylus-lang.com/" target="_blank">Stylus</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">LocalStorage</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Html5</a></p>
                </li>
                <li>
                    <h4 class="sub">javascript</h4>
                    <p><a href="https://jquery.com/">jQuery</a>, <a href="https://www.w3schools.com/js/js_es6.asp">ES2015</a></p>
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
                img: "https://i.imgur.com/ajen1ED.png",
                nombre: 'glorieta'
            }
        }
    },
}
</script>
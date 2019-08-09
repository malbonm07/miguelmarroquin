<template>
    <div class="portfolio-container">

    <!------------------------------ WORKS LIST -------------------------->
        <div class="portfolio-container__works">
            <div class="portfolio-container__works--text text-title">
                <span>W</span>
                <span>O</span>
                <span>R</span>
                <span>K</span>
                <span>S</span>
            </div>
            <div class="spacer"></div>
            <div class="portfolio-container__works--description text-center">
                <h2 class="mb-2">{{$t("message.portfolio.sub")}}</h2>

                <!------------------------ MOB WORKS LIST ---------------------->
                <ul class="portfolio-container__works--description-list">
                    <li v-for="(proyecto, i) in proyectos" :key="i"><router-link class="li-route" :to="proyecto.link">{{proyecto.titulo}}</router-link></li>
                </ul>
                <!------------------------ END MOB WORKS LIST ---------------------->


                <!------------------------ DESKTOP WORKS LIST ---------------------->
                <ul class="desktContainer-list">
                    <li><a class="li-route" v-scroll-to="{el: '#musicapp'}">vue music app con quasar</a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#vuetyLanding'}">
                    vuetify landing page
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#escuelaNuxt'}">
                    pagina web de escuela con nuxt
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#blogVue'}">
                    blog con vue
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#calculadoraVue'}">
                    calculadora vue
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#shopCart'}">
                    vue shop cart
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#pokedex'}">
                    mini pokedex vue
                    </a></li>
                    <li><a class="li-route" v-scroll-to="{el: '#todoList'}">
                    todo list vue
                    </a></li>
                </ul>
                <!-------------------------END DESKTOP WORKS LIST ---------------------->


                <button class="portfolio-container__works--description-btn mt-1" v-scroll-to="{el: '#proyectos'}">
                {{$t("message.portfolio.btn")}}
                </button>
            </div>
            <backBtn></backBtn>
        </div>
    <!------------------------------ END WORKS LIST -------------------------->


    <!------------------------------ PROJECTS -------------------------->
        <div id="proyectos">


            <!------------------------------ MOBILE PROJECTS ---------------------->
            <div class="portfolio-container__projects">
                <div class="portfolio-container__projects--item" v-for="(proyecto, index) in proyectos" :key="index" data-aos-duration="500" data-aos="fade-up">
                    <figure class="portfolio-container__projects--item--img">
                        <v-lazy-image class="lazy-img" :src="proyecto.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    </figure>
                    <div class="portfolio-container__projects--item--links">
                        <router-link class="details" :to="proyecto.link">
                            {{$t("message.portfolio.details")}}
                        </router-link>
                        <router-link class="name" :to="proyecto.link">{{proyecto.titulo}}</router-link>
                        <div class="skills-span" v-scroll="addFadeUp">
                            <span v-for="(skill, i) in proyecto.skills" :key="i">{{skill}},&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <!------------------------------ END MOBILE PROJECTS ---------------------->


            <!------------------------------ DESKTOP PROJECTS ---------------------->
            <div class="portfolio-container__DesktProjects">
                <div class="portfolio-container__DesktProjects--container">
                    <div class="DesktProjects-item" id="musicapp">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/vue-quasar-spa/#/" target="_blank"><v-lazy-image class="lazy-img" :src="proyectos[0].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                            <!-- <div class="img-overlay">{{proyectos[0].titulo}}</div> -->
                            <div class="img-overlay">{{$t("message.portfolio.view")}}</div></a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[0])" class="details" 
                            >
                            {{$t("message.portfolio.details")}}</a>
                            <a @click="projectModal(proyectos[0])" class="name"
                            >{{proyectos[0].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[0].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="DesktProjects-item row-reverse" id="vuetyLanding">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/nuxt-landing-template/" target="_blank"><v-lazy-image class="lazy-img" :src="proyectos[1].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                            <!-- <div class="img-overlay">{{proyectos[1].titulo}}</div> -->
                            <div class="img-overlay">{{$t("message.portfolio.view")}}</div></a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[1])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[1])" class="name">{{proyectos[1].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[1].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-container__DesktProjects--container">
                    <div class="DesktProjects-item" id="escuelaNuxt">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/landing-school/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[2].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[2].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[2])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[2])" class="name">{{proyectos[2].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[2].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="DesktProjects-item row-reverse" id="blogVue">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/nuxt-blog-template/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[3].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[3].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[3])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[3])" class="name">{{proyectos[3].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[3].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-container__DesktProjects--container">
                    <div class="DesktProjects-item" id="calculadoraVue">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/v-calculator/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[4].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[4].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[4])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[4])" class="name">{{proyectos[4].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[4].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="DesktProjects-item row-reverse" id="shopCart">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/v-shoppingcart/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[5].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[5].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[5])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[5])" class="name">{{proyectos[5].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[5].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-container__DesktProjects--container">
                    <div class="DesktProjects-item" id="pokedex">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/v-pokemon/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[6].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[6].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[6])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[6])" class="name">{{proyectos[6].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[6].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="DesktProjects-item row-reverse" id="todoList">
                        <figure class="DesktP-img">
                            <a href="https://malbonm07.github.io/v-todolist/" target="_blank">
                                <v-lazy-image class="lazy-img" :src="proyectos[7].img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                                <!-- <div class="img-overlay">{{proyectos[7].titulo}}</div> -->
                                <div class="img-overlay">{{$t("message.portfolio.view")}}</div>
                            </a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in">
                            <a @click="projectModal(proyectos[7])" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyectos[7])" class="name">{{proyectos[7].titulo}}</a>
                            <div class="skills-span" v-scroll="addFadeUp">
                                <span v-for="(skill, i) in proyectos[7].skills" :key="i">{{skill}},&nbsp;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!------------------------------ END DESKTOP PROJECTS ---------------------->


        </div>
    <!------------------------------ END PROJECTS -------------------------->


    <!------------------------------ DESKT PROJECT MODAL -------------------------->
        <transition name="projectModalAppear">
            <div v-show="showProjectModal" class="dekstProjectModal">
                <div  v-if="currentProjectModal" class="desktModal-content">
                    <div class="desktModal-btnContent">
                        <div class="close-btn" @click="closeModalProject">
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <div class="desktModal-title">
                        {{currentProjectModal.titulo}}
                    </div>
                    <div class="desktModal-description">
                        <h3 class="proyect-sub">Skills</h3>
                        <div class="box-text">
                            {{currentProjectModal.details}}
                        </div>
                        <h3 class="proyect-sub">Herramientas de Desarrollo</h3>
                        <div class="box-tools">
                            <span v-for="(herramienta, i) in currentProjectModal.herramientas" :key="i"
                            class="tool">
                                {{herramienta}}&nbsp;
                            </span>
                        </div>
                        <div class="box-buttons">
                            <a :href="currentProjectModal.linkSitio" target="_blank" class="modal-btn1">
                                <font-awesome-icon class="img-sub__link-icon proyectModalIcon" :icon="['fas', 'link']"/>
                                Ver el Sitio
                            </a>
                            <a :href="currentProjectModal.linkGithub" target="_blank" class="modal-btn2">
                                <font-awesome-icon class="img-sub__link-icon proyectModalIcon" :icon="['fab', 'github']" />
                                Ver en Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    <!------------------------------ END DESKT PROJECT MODAL -------------------------->


    <!------------------------------ PORT FOOTER SECTION -------------------------->
        <Footer></Footer>
    <!------------------------------ END FOOTER SECTION -------------------------->

    </div>
</template>

<script>
import proyectos from '@/data/proyectos.js';
import Footer from '@/components/Footer.vue'
import backBtn from '@/components/backBtn.vue'

export default {
    components: {
        backBtn,
        Footer
    },
    data() {
        return {
            currentProjectModal: null,
            showProjectModal: false,
            proyectos: proyectos
        }
    },
    methods: {
        addFadeUp(evt, el) {

        },
        projectModal(obj) {
            if(!this.showProjectModal) {
                document.body.style.cssText = "height: 100%; overflow: hidden"
                this.showProjectModal = true;
                this.currentProjectModal = obj;
            }
        },
        closeModalProject() {
            if(this.showProjectModal) {
                document.body.style.cssText = "height: inherit; overflow: none"
                this.showProjectModal = false;
            }
        }
    }
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/skills';
</style>

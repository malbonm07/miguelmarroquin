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
                <h2>{{$t("message.portfolio.sub")}}</h2>

                <!------------------------ MOB WORKS LIST ---------------------->
                <ul class="portfolio-container__works--description-list">
                    <li v-for="(proyecto, i) in proyectos" :key="i"><router-link class="li-route" :to="proyecto.link">{{proyecto.titulo}}</router-link></li>
                </ul>
                <!------------------------ END MOB WORKS LIST ---------------------->


                <!------------------------ DESKTOP WORKS LIST ---------------------->
                <ul class="desktContainer-list">
                    <li v-for="(proyecto, index)  in proyectos" :key="index">
                        <a class="li-route" v-scroll-to="{el: `#${proyecto.id}`}">{{proyecto.titulo}}
                        </a>
                    </li>
                </ul>
                <!-------------------------END DESKTOP WORKS LIST ---------------------->


                <button class="portfolio-btn mt-1" v-scroll-to="{el: '#proyectos'}">
                {{$t("message.portfolio.btn")}}
                </button>
                <DownArrow></DownArrow>
            </div>
            <backBtn></backBtn>
        </div>
    <!------------------------------ END WORKS LIST -------------------------->


    <!------------------------------ PROJECTS -------------------------->
        <div id="proyectos">


            <!------------------------------ MOBILE PROJECTS ---------------------->
            <div class="portfolio-container__projects">
                <div class="portfolio-container__projects--item" v-for="(proyecto, index) in proyectos" :key="index" data-aos-duration="500" data-aos="fade-up"
                >
                    <figure class="portfolio-container__projects--item--img">
                        <v-lazy-image class="lazy-img" :src="proyecto.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                    </figure>
                    <div class="portfolio-container__projects--item--links">
                        <router-link class="details" :to="proyecto.link">
                            {{$t("message.portfolio.details")}}
                        </router-link>
                        <router-link class="name" :to="proyecto.link">{{proyecto.titulo}}</router-link>
                        <div class="skills-span">
                            <span v-for="(skill, i) in proyecto.skills" :key="i">{{skill}},&nbsp;</span>
                        </div>
                    </div>
                </div>
            </div>
            <!------------------------------ END MOBILE PROJECTS ---------------------->


            <!------------------------------ DESKTOP PROJECTS ---------------------->
            <div class="portfolio-container__DesktProjects">
                <div class="portfolio-container__DesktProjects--container">
                    <div class="DesktProjects-item"
                    v-for="(proyecto, index) in proyectos" :key="index" :id="proyecto.id"
                    :data-index="index"
                    >
                        <figure class="DesktP-img">
                            <a :href="proyecto.linkSitio" target="_blank"><v-lazy-image class="lazy-img" :src="proyecto.img" src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"/>
                            <div class="img-overlay">{{$t("message.portfolio.view")}}</div></a>
                        </figure>
                        <div class="DesktP-links" data-aos-duration="500" data-aos="zoom-in"
                        >
                            <a @click="projectModal(proyecto)" class="details">
                                {{$t("message.portfolio.details")}}
                            </a>
                            <a @click="projectModal(proyecto)" class="name">{{proyecto.titulo}}</a>
                            <div class="skills-span">
                                <span v-for="(skill, i) in proyecto.skills" :key="i">{{skill}},&nbsp;</span>
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
import Footer from '@/components/Footer.vue';
import backBtn from '@/components/backBtn.vue';
import DownArrow from '@/components/downArrow.vue';

export default {
    components: {
        backBtn,
        DownArrow,
        Footer
    },
    data() {
        return {
            currentProjectModal: null,
            showProjectModal: false,
            proyectos: proyectos,
        }
    },
    methods: {
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
    },
    created() {
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/skills';
</style>

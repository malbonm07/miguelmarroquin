<template>
    <div class="footer">
        <div class="footer__details text-center text-light">
        Designer by Miguel Alonso Marroquin, 2019 -&nbsp;<a>malbonm07@gmail.com</a>
        </div>
        <nav class="footer__social-icons">
        <a  href="https://twitter.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a  href="https://www.facebook.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
        <a  href="https://github.com/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'github']" /></a>
        <!-- <a  href="https://www.linkedin.com/in/malbonm07" target="_blank" class="icon-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a> -->
        </nav>
        <button id="upButton" class="up-btn" 
                v-scroll-to="'#app'"
                data-aos-duration="500" data-aos="zoom-in"
        >
        <div class="up-btn--icon">
        </div>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

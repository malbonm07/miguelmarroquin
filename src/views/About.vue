<template>
  <div class="about-container__hello">

<!------------------------------ ABOUT SECTION -------------------------->
    <div class="about-container__hello--text text-title">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
    </div>
    <div class="spacer"></div>
    <div class="about-container__hello--description text-center">
        <h2 v-html='$t("message.about.msg")'></h2>
    </div>
    <a v-if="$i18n.locale === 'es'" class="cv-btn mt-3" href="https://drive.google.com/file/d/1lzSyOFCpLn0jHFzUubhnwq--m0p18bRP/view" target="_blank">
    Descarga mi CV
    </a>
    <a v-else class="cv-btn mt-3" href="https://drive.google.com/file/d/1uJuHv6Qu47_KPBdsIpDApiaXUq2FRsQh/view" target="_blank">
    Download my CV
    </a>
    <backBtn></backBtn>

<!------------------------------ END ABOUT SECTION -------------------------->
  </div>
</template>

<script>
import backBtn from '@/components/backBtn.vue';
export default {
  components: {
    backBtn
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/about';
</style>
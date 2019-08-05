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
<!------------------------------ END ABOUT SECTION -------------------------->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
//styles are in 'assets/scss/views/about';
</style>
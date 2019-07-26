<template>
  <div class="home-container">
    <div class="home-container__hello">
      <div class="home-container__hello--text text-title">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
      </div>
      <div class="spacer"></div>
      <div class="home-container__hello--description text-center">
        <h2>I'm&nbsp;<span class="text-regular">Miguel Marroquin</span>&nbsp;aspirant to Frontend Developer and UI/UX designer currently living in Perú.</h2>
        <button class="home-container__hello--description-btn mt-2">
          <router-link class="text-white" to="/portfolio">
            Portfolio
          </router-link>
        </button>
      </div>
    </div>
    <div class="home-container__contact">
      <!-- <div v-scroll="myFuncion" class="box">

      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  },
  methods: {
    // myFuncion(evt, el) {
    //   console.log(evt)
    //   if(window.scrollY > 300) {
    //     console.log('mayor a 300')
    //   }
    //   return window.scrollY > 600;
    // }
  }
}
</script>

<style>
.box {
  width: 200px;
  height: 200px;
  background: red;
  margin-top: 300px;
}
</style>


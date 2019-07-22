<template>
  <div id="app" class="app-container">
    <div id="nav" class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <div class="mob-nav-btn">
      <input type="checkbox" id="menu-toggle" @click="show = !show">
      <label for="menu-toggle" class="menu-toggle-label">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
    </div>

    <router-view/>
    <div class="mob-nav-menu">
      <nav class="mob-nav-menu__nav">
        <ul class="mob-nav-menu__nav--list">
          <li class="mob-nav-menu__nav--list--link">
            <router-link class="route-link" to="/">intro</router-link>
          </li>
          <li class="mob-nav-menu__nav--list--link">
            <router-link class="route-link" to="/about">about</router-link>
          </li>
          <li class="mob-nav-menu__nav--list--link">
            <router-link class="route-link" to="/skills">skills</router-link>
          </li>
          <li class="mob-nav-menu__nav--list--link">
            <router-link class="route-link" to="/portfolio">portfolio</router-link>
          </li>
          <li class="mob-nav-menu__nav--list--link">
            <router-link class="route-link" to="/education">education</router-link>
          </li>
        </ul>
        <div>
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
  @import './assets/scss/main.scss';
</style>

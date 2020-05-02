<template>
  <div id="app">
    <Header class="header_box" />
    <router-view></router-view>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue" 
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  
}
</script>

<style>
@import url("./assets/css/mycss.css");
@import url("./assets/css/common.css");
</style>

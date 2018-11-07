<template>
  <div class="rs-header-project" :style="headerStyle">
    <header>
      <div class="logo-div">
        <router-link to="/"><img src="../../assets/img/rs-full-logo.png" alt="logo"></router-link>
      </div>
      <rs-header-project-body></rs-header-project-body>
    </header>
  </div>
</template>

<script>
import RsHeaderProjectBody from './RsHeaderProject/RsHeaderProjectBody'
export default {
  name: 'rs-header-project',
  components: {RsHeaderProjectBody},
  computed: {
    headerStyle () {
      return {
        width: screen.width + 'px'
      }
    }
  }
}
</script>

<style>
  @import '../../assets/css/rs-header.css';
  header {
    position: relative;
    height: 60px;
    z-index: 2;
  }
</style>

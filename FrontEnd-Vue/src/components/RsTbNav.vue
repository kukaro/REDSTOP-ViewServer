<template>
  <div class="rs-tb-nav">
    <nav :style="navStyle">
      <rs-tb-nav-header></rs-tb-nav-header>
      <rs-tb-nav-body></rs-tb-nav-body>
    </nav>
  </div>
</template>

<script>
/* eslint-disable vue/no-dupe-keys */

import RsTbNavHeader from './RsTbNav/RsTbNavHeader'
import RsTbNavBody from './RsTbNav/RsTbNavBody'
export default {
  name: 'rs-tb-nav',
  components: { RsTbNavBody, RsTbNavHeader },
  computed: {
    navStyle () {
      return {
        width: screen.width * 0.2 + 'px'
      }
    }
  },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  methods: {
    handleWindowResize (event) {
      this.windowWidth = event.currentTarget.innerWidth
      this.navStyle()
    },
    navStyle () {
      return {
        width: screen.width * 0.2 + 'px'
      }
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style>
  nav {
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #F2F7FB;
  }
</style>

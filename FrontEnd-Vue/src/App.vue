<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import RsHeader from './components/RsHeader'
import RsTbNav from './components/RsTbNav'
import RsTbAside from './components/RsTbAside'

export default {
  name: 'App',
  components: {RsTbAside, RsTbNav, RsHeader}
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
html, body{
  width: 100%;
  height: 100%;
}
#app{
  height: 100%;
  background-color: #F1F7FB;
  overflow: scroll;
}
</style>

<template>
  <div id="redstopHeader">
    <header>
      <div class="logoDiv">
        <img src="../assets/img/redstop-logo.png" alt="logo">
      </div>

      <div class="menuDiv">
        <ul class="menu">
          <li v-for="item in headerList" :key="item">
            {{item}}
          </li>
        </ul>
      </div>

      <div class="userInfoDiv">

      </div>
    </header>
  </div>
  
</template>

<script>
export default {
  name: 'RedstopHeader',
  created: function () {
    this.$http.get('http://localhost:3000/api/header').then((response) => {
      this.headerList = response.data
    })
  },
  data: function () {
    return {
      headerList: {}
    }
  }
}
</script>

<style>
@import '../assets/css/redstop-header.css';
</style>

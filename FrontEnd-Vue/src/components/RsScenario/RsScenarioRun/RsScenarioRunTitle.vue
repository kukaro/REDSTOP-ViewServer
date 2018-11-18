<template>
  <div class="rs-scenario-run-title">
    <p id="title">{{ $store.state.app.scenarioName }}</p>
    <!--<p>{{ $store.state.app.loadType }}</p>-->
  </div>
</template>

<script>

export default {
  name: 'rs-scenario-run-title'
}
</script>

<style scoped>
.rs-scenario-run-title{
  position: relative;
  width: 100%;
  height: 8%;
  z-index: 0;
  /*background-color: red;*/
}
#title{
  padding-top: 20px;
  padding-left: 20px;
  width: 129px;
  height: 31px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}
</style>

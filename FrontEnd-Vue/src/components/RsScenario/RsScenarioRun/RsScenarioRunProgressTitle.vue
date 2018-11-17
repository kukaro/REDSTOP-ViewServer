<template>
  <div class="rs-scenario-run-progress-title">
    <p id="title">진행 상황</p>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-run-progress-title'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.rs-scenario-run-progress-title {
  position: absolute;
  width: 100%;
  height: 10%;
  /*background-color: cyan;*/
}
#title{
  margin-top: 20px;
  margin-left: 20px;
  width: 93.1px;
  height: 22px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
</style>

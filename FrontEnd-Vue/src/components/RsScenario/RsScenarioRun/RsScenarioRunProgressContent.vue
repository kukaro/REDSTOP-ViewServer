<template>
  <div class="rs-scenario-run-progress-content">
    <button id="btn-run" @click="gotoreport"><span>결과보기</span></button>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-run-progress-content',
  methods: {
    gotoreport () {
      this.$router.push({name: 'RsReport'})
      // this.$router.push({name: 'RsScenarioDetail', params: { name: item }})
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.rs-scenario-run-progress-content {
  position: relative;
  top: 10%;
  width: 100%;
  height: 90%;
  font-family: 'Titillium Web', sans-serif;
  /*background-color: cornflowerblue;*/
}
#btn-run{
  width: 130px;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 #c6d5e9;
  background-color: #39496d;
  /*position: absolute;*/
  position: absolute;
  left: 73%;
  bottom: 5%;
}
#btn-run span{
  font-family: 'Noto Sans KR', sans-serif;
  width: 31.5px;
  height: 21px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
}
</style>

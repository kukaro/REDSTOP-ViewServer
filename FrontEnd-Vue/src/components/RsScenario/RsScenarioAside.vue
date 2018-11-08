<template>
  <div class="rs-scenario-aside">
    <rs-scenario-aside-title></rs-scenario-aside-title>
    <rs-scenario-aside-content></rs-scenario-aside-content>
    <button id="btn-run"><img src="../../assets/img/fill.png"><span>RUN</span></button>
  </div>
</template>

<script>
import RsScenarioAsideTitle from './RsScenarioAside/RsScenarioAsideTItle'
import RsScenarioAsideContent from './RsScenarioAside/RsScenarioAsideContent'

export default {
  name: 'rs-scenario-aside',
  components: { RsScenarioAsideTitle, RsScenarioAsideContent }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.rs-scenario-aside {
  position: absolute;
  left: 60%;
  top: 70px;
  width: 37%;
  height: 600px;

  margin-top: 70px;
  /*margin-right: 30px;*/
  margin-bottom: 70px;

  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
  background-color: #ffffff;

  /*border-radius: 8px;*/
  /*box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);*/
  /*background-color: #ffffff;*/

  /*padding-top: 60px;*/
  /*margin-left: 10%;*/
  /*padding-left: 30px;*/
  /*padding-right: 30px;*/
  /*width: 40%;*/
  /*height: 100%;*/
  /*margin-right: 40px;*/
  /*float: right;*/
  /*z-index: 1;*/
}
#btn-run{
  width: 130px;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 #c6d5e9;
  background-color: #0069ff;
  /*position: absolute;*/
  position: relative;
  left: 73%;
  bottom: 5%;
}
#btn-run span{
  font-family: 'Titillium Web', sans-serif;
  width: 31.5px;
  height: 21px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
}
</style>

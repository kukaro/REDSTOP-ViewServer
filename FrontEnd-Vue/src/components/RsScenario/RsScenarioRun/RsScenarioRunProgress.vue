<template>
  <div class="rs-scenario-run-progress">
    <rs-scenario-aside-title></rs-scenario-aside-title>
    <rs-scenario-aside-content></rs-scenario-aside-content>
    <!--<button id="btn-run" @click="gotorun"><img src="../../assets/img/fill.png"><span>RUN</span></button>-->
  </div>
</template>

<script>
import RsScenarioAsideTitle from '../RsScenarioAside/RsScenarioAsideTItle'
import RsScenarioAsideContent from '../RsScenarioAside/RsScenarioAsideContent'

export default {
  name: 'rs-scenario-run-progress',
  components: { RsScenarioAsideTitle, RsScenarioAsideContent }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.rs-scenario-run-progress {
  position: absolute;
  /*left: 50%;*/
  right: 1%;
  /*top: 15%;*/
  width: 48%;
  height: 80%;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
  background-color: #ffffff;
}
</style>

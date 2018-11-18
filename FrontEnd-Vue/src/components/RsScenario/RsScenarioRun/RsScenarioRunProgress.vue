<template>
  <div class="rs-scenario-run-progress">
    <rs-scenario-run-progress-title></rs-scenario-run-progress-title>
    <rs-scenario-run-progress-content></rs-scenario-run-progress-content>
  </div>
</template>

<script>
import RsScenarioRunProgressTitle from '../RsScenarioRun/RsScenarioRunProgressTitle'
import RsScenarioRunProgressContent from '../RsScenarioRun/RsScenarioRunProgressContent'

export default {
  name: 'rs-scenario-run-progress',
  components: { RsScenarioRunProgressTitle, RsScenarioRunProgressContent }
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

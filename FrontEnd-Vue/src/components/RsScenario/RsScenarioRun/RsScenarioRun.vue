<template>
  <div class="rs-scenario-run">
    <rs-scenario-run-title></rs-scenario-run-title>
    <rs-scenario-run-info></rs-scenario-run-info>
    <rs-scenario-run-progress></rs-scenario-run-progress>
  </div>
</template>

<script>
import RsScenarioRunTitle from './RsScenarioRunTitle'
import RsScenarioRunInfo from './RsScenarioRunInfo'
import RsScenarioRunProgress from './RsScenarioRunProgress'

export default {
  name: 'rs-scenario-run',
  components: { RsScenarioRunTitle, RsScenarioRunInfo, RsScenarioRunProgress },
  created: function () {

  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.rs-scenario-run {
  position: absolute;
  top: 70px;
  left: 20%;
  width: 80%;
  height: 100%;
  background-color: #f3f7fb;
  z-index: 0;
  }
</style>

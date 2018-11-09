<template>
  <div class="rs-scenario-detail">
    <rs-scenario-section></rs-scenario-section>
    <rs-scenario-aside></rs-scenario-aside>
  </div>
</template>

<script>
import RsScenarioNav from './RsScenarioNav'
import RsScenarioSection from './RsScenarioSection'
import RsScenarioAside from './RsScenarioAside'

export default {
  name: 'rs-scenario-detail',
  // components: { RsHeaderProject, RsScenarioNav, RsScenarioSection, RsScenarioAside }
  components: { RsScenarioNav, RsScenarioSection, RsScenarioAside }

}
</script>

<style scoped>
</style>

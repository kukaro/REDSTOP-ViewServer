<template>
  <div class="rs-scenario">
    <rs-header-project></rs-header-project>
    <rs-scenario-nav></rs-scenario-nav>
    <rs-scenario-section></rs-scenario-section>
    <rs-scenario-aside></rs-scenario-aside>
    <router-view></router-view>
  </div>
</template>

<script>
import RsHeaderProject from '../RsHeader/RsHeaderProject'
import RsScenarioNav from './RsScenarioNav'
import RsScenarioSection from './RsScenarioSection'
import RsScenarioAside from './RsScenarioAside'

export default {
  name: 'rs-scenario',
  components: { RsHeaderProject, RsScenarioNav, RsScenarioSection, RsScenarioAside }
}
</script>

<style scoped>
</style>

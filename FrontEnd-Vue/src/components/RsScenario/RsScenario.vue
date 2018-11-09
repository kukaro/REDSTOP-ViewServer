<template>
  <div class="rs-scenario">
    <rs-header-project></rs-header-project>
    <rs-scenario-nav></rs-scenario-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import RsHeaderProject from '../RsHeader/RsHeaderProject'
import RsScenarioNav from './RsScenarioNav'

export default {
  name: 'rs-scenario',
  components: { RsHeaderProject, RsScenarioNav }
}
</script>

<style scoped>
</style>

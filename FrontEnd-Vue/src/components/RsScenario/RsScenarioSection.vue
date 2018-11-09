<template>
  <div class="rs-scenario-section">
    <rs-scenario-section-title :name="this.$props.name"></rs-scenario-section-title>
    <rs-scenario-section-content></rs-scenario-section-content>
  </div>
</template>

<script>
import RsScenarioSectionTitle from './RsScenarioSection/RsScenarioSectionTitle'
import RsScenarioSectionContent from './RsScenarioSection/RsScenarioSectionContent'

export default {
  name: 'rs-scenario-section',
  props: ['name'],
  components: { RsScenarioSectionTitle, RsScenarioSectionContent }
}
</script>

<style scoped>
.rs-scenario-section {
  position: absolute;
  top: 70px;
  left: 20%;
  width: 80%;
  height: 100%;
  background-color: #f3f7fb;
  z-index: 0;
}
</style>

<template>
  <div class="rs-scenario-nav">
    <rs-scenario-nav-title></rs-scenario-nav-title>
    <rs-scenario-nav-content></rs-scenario-nav-content>
  </div>
</template>

<script>
import RsScenarioNavTitle from './RsScenarioNav/RsScenarioNavTitle'
import RsScenarioNavContent from './RsScenarioNav/RsScenarioNavContent'

export default {
  name: 'rs-scenario-nav',
  components: { RsScenarioNavTitle, RsScenarioNavContent }
}
</script>

<style scoped>
.rs-scenario-nav {
    position: absolute;
    top: 70px;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #F2F7FB;
}
</style>

<template>
  <div class="rs-scenario-start">
    <p>Scenario를 관리하고, Scenario별 Load Test를 할 수 있습니다.</p>
    <p>기존 Scenario 선택 or +NEW로 새 Scenario 만들기</p>
  </div>
</template>

<script>

export default {
  name: 'rs-scenario-start'
  // components: { RsHeaderProject, RsScenarioNav, RsScenarioSection, RsScenarioAside }
}
</script>

<style scoped>
.rs-scenario-start {
    position: absolute;
    top: 70px;
    left: 20%;
    width: 80%;
    height: 100%;
    background-color: #fbb743;
    z-index: 0;
}
</style>

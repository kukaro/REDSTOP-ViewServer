<template>
  <div class="rs-scenario-start">
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
  /*background-color: #fbb743;*/
  z-index: 0;
}
p{
  position: absolute;
  left: 30%;
  top: 40%;
  font-size: 1.2em;
}
</style>

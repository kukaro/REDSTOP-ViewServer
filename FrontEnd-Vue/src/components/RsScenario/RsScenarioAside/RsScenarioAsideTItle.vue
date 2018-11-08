<template>
  <div class="rs-scenario-aside-title">
   <p id="title">부하 관련 설정</p>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-aside-title',
  components: { }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');

.rs-scenario-aside-title {
    position: absolute;
    width: 100%;
    height: 10%;
}
#title{
  margin-top: 20px;
  margin-left: 20px;
  width: 93.1px;
  height: 22px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
</style>

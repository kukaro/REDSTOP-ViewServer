<template>
  <div class="rs-scenario-nav-title">
    <div id="title">
      <span id="titleText">Scenarios</span>
      <button id="btn-new" @click="newItem"><img src="../../../assets/img/btn-new.png"><span>NEW</span></button>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-nav-title',
  components: { },
  methods: {
    newItem () {
      // console.log('새로운 load test scenario 만들기') // 서버 처리 다시 해야 함
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

.rs-scenario-nav-title{
  position: absolute;
  font-family: 'Titillium Web', sans-serif;
  width: 100%;
  height: 7%;
  z-index: 0;
}
#title{
  margin-top: 19px;
  margin-left: 28px;
}
#titleText{
  width: 88px;
  height: 23px;
  font-size: 15px;
  font-weight: 900;
  color: #000000;
}
.line{
  position: absolute;
  left: 10%;
  width: 80%;
  height: 3px;
  background-color: #e1e1e1;
  position: absolute;
  bottom: 0;
}
#btn-new{
  position: absolute;
  left:70%;
  width: 20%;
  height: 25px;
  object-fit: contain;
  border-radius: 11px;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
  background-color: #1d5cea;
}
#btn-new span{
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}
</style>

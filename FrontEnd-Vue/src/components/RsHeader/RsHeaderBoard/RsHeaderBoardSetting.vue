<template>
  <div class="rs-header-board-setting">
    <div class="outer-input">
      <div class="inner-input">
        <img class="lock-icon" src="../../../assets/img/lock.png"/>
        <span class="user-name">&nbsp;Administrator&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <img class="bottom-icon" src="../../../assets/img/arrow-pop.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rs-header-board-setting'
}
</script>

<style scoped>
.rs-header-board-setting{
  position: absolute;
  left: 85%;
  width: 15%;
  height: 70px;
  background-color: #536285;
  border-left: 1px solid #ffffff;
}
.outer-input {
  display: table;
  height: 100%;
  width: 100%;
}
.inner-input {
  display: table-cell;
  vertical-align: middle;
}
.lock-icon{
  width: 16px;
  height: 20px;
  margin-left: 22px;
  margin-bottom: 5px;
}
.user-name{
  font-size: 14px;
  color: white;
}
.bottom-icon{
  width: 20px;
  height: 10px;
}
</style>

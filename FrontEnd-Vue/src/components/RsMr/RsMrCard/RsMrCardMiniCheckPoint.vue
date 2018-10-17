<template>
  <div id="test" class="rs-mr-card-mini-check-point rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <rs-util-text :init-value="'CHECK POINT'" :init-color="'#8d5f19'" :init-size="13"/><img src="../../../assets/img/function-icon.png"> <br>
      <div class="rs-left-div">
        <rs-util-text :init-value="'Running : ' + running" :init-color="'#ffffff'" :init-size="15"/><br>
        <rs-util-text :init-value="'False : ' + falseCnt" :init-color="'#ffffff'" :init-size="15"/>
      </div>
      <div class="rs-left-div">
        <rs-util-text :init-value="'Inactive : ' + inactive" :init-color="'#ffffff'" :init-size="15"/><br>
        <rs-util-text :init-value="'Total : ' + total" :init-color="'#ffffff'" :init-size="15"/>
      </div>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initRunning', 'initFalseCnt', 'initInactive', 'initTotal'],
  name: 'rs-mr-card-mini-check-point',
  created: function () {
    // console.log(this.initXPos, this.initYPos)
    // console.log(document.getElementById('test').offsetWidth)
  },
  mounted: function () {
    // this.height = this.$el.clientWidth / 2.5 * this.initHeight / this.initWidth
    // TODO 이거 바꿔야함, header 크기를 raw하게 받음
    // this.top = this.$el.clientWidth / 2.5 * (this.initYPos - 1) / this.initWidth + 70
    // console.log(this.top)
    // console.log(this.height)
    // console.log(this.$refs)
  },
  components: {RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ffc665',
      running: this.initRunning,
      falseCnt: this.initFalseCnt,
      inactive: this.initInactive,
      total: this.initTotal
    }
  }
}
</script>

<style scoped>
.rs-mr-card {
  z-index: 0;
  position: absolute;
  padding: 10px;
}
.inner{
  padding: 13px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px 0 #a6b7cd;
  border-radius: 8px;
}
img {
  width: 28px;
  height: 6px;
  float: right;
}
.rs-left-div {
  padding-right: 5px;
  padding-top: 5px;
  float: left;
}
</style>

<template>
  <div id="test" class="rs-mr-card-mini-availability rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <rs-util-text :init-value="'AVAILABILTY'" :init-color="'#611313'" :init-size="13"/><img src="../../../assets/img/function-icon.png"> <br>
      <rs-util-text :init-value="percent" :init-color="'#ffffff'" :init-size="50"/>
      <rs-util-text :init-value="'%'" :init-color="'#ffffff'" :init-size="50"/>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initPercent'],
  name: 'rs-mr-card-mini-total-availability',
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
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ff7575',
      percent: this.initPercent
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
</style>

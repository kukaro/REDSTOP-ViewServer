<template>
  <div id="test" class="rs-mr-card-mini-regional-analysis rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Regional Analysis'" :init-color="'#5e5e5e'" :init-size="23"/></b>
      <div width="20%" style="float: right;">
        <select id="region" name="region">
          <option value="1" selected="selected">South Korea</option>
          <option value="2">Japan</option>
        </select>
      </div>
      <div class="dial">
        <rs-util-text :init-value="'Health'" :init-size="16" :init-color="'#696969'"/><br><br>
        <img class="map-bar" src="../../../assets/img/map-bar.png"/>
      </div>
      <div class="rs-map">
        <img class="map-img" src="../../../assets/img/map-white.png"/>
      </div>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initApiCnt'],
  name: 'rs-mr-card-mini-regional-analysis',
  created: function () {
  },
  mounted: function () {
  },
  components: {RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      background: 10
    }
  }
}
</script>

<style scoped>
.rs-mr-card {
  z-index: 4;
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
.map-bar{
  float: left;
  height: 70%;
}
.dial{
  position: absolute;
  padding-top: 30px;
  left: 20px;
  width: 12.5%;
  height: calc(100% - 86px);
  /*background-color: red;*/
}
.rs-map{
  position: absolute;
  left: calc(12.5% + 20px);
  width: calc(87.5% - 40px);
  height: calc(100% - 86px);
  /*background-color: green;*/
}
select {
  padding-left: 16px;
  border-radius: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  height: 32px;
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 90% 50%;
  background-size: 20px;
  background-color: #ffffff;
  border: solid 1px #c7c7c7;

  font-family: TitilliumWeb;
  font-size: 14px;
}
.map-img{
  left: 10%;
  position: absolute;
  height: 100%;
}
</style>

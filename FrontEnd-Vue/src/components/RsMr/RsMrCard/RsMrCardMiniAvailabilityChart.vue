<template>
  <div id="test" class="rs-mr-card-mini-availability-chart rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Availability'" :init-color="'#000000'" :init-size="15"/></b> <br>
      <rs-mr-card-mini-availability-chart-body :init-values="yLabel"/>
      <div class="rs-heatmap-x-label">
        <div class='rs-heatmap-x-label-li' v-for="(value,key) in xLabel" :key="key" :style="{'width': 100 / xLabel.length + '%', 'height': '100%'}">
          <rs-mr-card-mini-response-time-x-label-item :initValue="value" :initSize="10"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'
import RsMrCardMiniAvailabilityChartBody from './RsMrCardMiniAvailabilityChartBody'
import RsMrCardMiniResponseTimeXLabelItem from './RsMrCardMiniResponseTimeXLabelItem'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initApiCnt'],
  name: 'rs-mr-card-mini-availability-chart',
  created: function () {
  },
  mounted: function () {
  },
  components: {RsMrCardMiniResponseTimeXLabelItem, RsMrCardMiniAvailabilityChartBody, RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ffffff',
      apiCnt: this.initApiCnt,
      xLabel: ['15:30', '15:35', '15:40', '15:45', '15:50', '15:55', '16:00', '16:05', '16:10', '16:15', '16:20', '16:25', '16:30', '16:35', '16:40', '16:45', '16:50', '16:55', '17:00', '17:05', '17:10', '17:15', '17:20', '17:25', '17:30', '17:35', '17:40', '17:45', '17:50'],
      yLabel: Array.from({length: 29}, (v, i) => Math.floor(60 + Math.random() * 40))
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
img {
  width: 28px;
  height: 6px;
  float: right;
}
.rs-heatmap-x-label-li{
  float: left;
  position: relative;
}
.rs-heatmap-x-label{
  position: absolute;
  top: calc(100% - 30px);
  /*background-color: red;*/
  height: 16px;
  width: calc(100% - 40px);
}
</style>

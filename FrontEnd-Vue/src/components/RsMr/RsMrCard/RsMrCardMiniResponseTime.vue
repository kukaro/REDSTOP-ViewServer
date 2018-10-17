<template>
  <div id="test" class="rs-mr-card-mini-response-time rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Response Time'" :init-color="'#000000'" :init-size="15"/></b> <br>
      <div class="rs-heatmap-y-label">
          <div class='rs-heatmap-y-label-li' v-for="(value,key) in yLabel" :key="key" :style="{'width': '100%', 'height': 100 / yLabel.length + '%'}">
            <rs-mr-card-mini-response-time-y-label-item :init-value="value + 's'" :init-size="14"/>
          </div>
      </div>
      <rs-mr-card-mini-response-time-heat-map :init-response-time-list="responseTimeList" :init-x-label="xLabel"/>
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
import RsMrCardMiniResponseTimeXLabelItem from './RsMrCardMiniResponseTimeXLabelItem'
import RsMrCardMiniResponseTimeYLabelItem from './RsMrCardMiniResponseTimeYLabelItem'
import RsMrCardMiniResponseTimeItem from './RsMrCardMiniResponseTimeItem'
import RsMrCardMiniResponseTimeHeatMap from './RsMrCardMiniResponseTimeHeatMap'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor'],
  name: 'rs-mr-card-mini-response-time',
  created: function () {
    this.$http.get('http://localhost:3000/api/response-time').then((response) => {
      this.responseTimeList = response.data.data
      var count = 0
      for (var index = 0; index < this.xLabel.length - 1; index++) {
        while (this.responseTimeList.length !== count && this.xLabel[index] === this.responseTimeList[count].time) {
          this.responseTimeList[count].time = index + 1
          count++
        }
      }
      console.log(this.responseTimeList)
    })
  },
  mounted: function () {
    // console.log(this.$el.)
  },
  components: {
    RsMrCardMiniResponseTimeHeatMap, RsMrCardMiniResponseTimeItem, RsMrCardMiniResponseTimeYLabelItem, RsMrCardMiniResponseTimeXLabelItem, RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ffffff',
      xLabel: ['15:30', '15:35', '15:40', '15:45', '15:50', '15:55', '16:00', '16:05', '16:10', '16:15', '16:20', '16:25', '16:30', '16:35', '16:40', '16:45', '16:50', '16:55', '17:00', '17:05', '17:10', '17:15', '17:20', '17:25', '17:30', '17:35', '17:40', '17:45', '17:50'],
      yLabel: [10, 8, 6, 4, 2, 0],
      responseTimeList: []
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
  box-shadow: 0 2px 4px 0 #a6b7cd;
  border-radius: 8px;
}
img {
  width: 28px;
  height: 6px;
  float: right;
}
.rs-heatmap-x-label{
  position: absolute;
  top: calc(100% - 46px);
  /*background-color: red;*/
  height: 16px;
  margin-left: 25px;
  width: calc(100% - 70px);
}
.rs-heatmap-y-label{
  float:left;
  /*background-color: red;*/
  width: 25px;
  height: calc(100% - 46px);
}
.rs-heatmap-x-label-li{
  float: left;
  position: relative;
}
.rs-heatmap-y-label-li{
  /*border: 1px solid black;*/
  /*background-color: #ffcc33;*/
}
</style>

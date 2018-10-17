<template>
  <div class="rs-mr-api-aside-heatmap">
   <p>Response Time</p>
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
    <!--<rs-mr-card-mini-response-time :init-x-pos="1" init-y-pos="2" :init-width="4" :init-height="2"/>-->
  </div>
</template>

<script>
import RsMrCardMiniResponseTime from '../../RsMr/RsMrCard/RsMrCardMiniResponseTime'
import RsMrCardMiniResponseTimeItem from '../../RsMr/RsMrCard/RsMrCardMiniResponseTimeItem'
import RsMrCardMiniResponseTimeHeatMap from '../../RsMr/RsMrCard/RsMrCardMiniResponseTimeHeatMap'
import RsMrCardMiniResponseTimeXLabelItem from '../../RsMr/RsMrCard/RsMrCardMiniResponseTimeXLabelItem'
import RsMrCardMiniResponseTimeYLabelItem from '../../RsMr/RsMrCard/RsMrCardMiniResponseTimeYLabelItem'

export default {
  name: 'rs-mr-api-aside-heatmap',
  components: { RsMrCardMiniResponseTime, RsMrCardMiniResponseTimeItem, RsMrCardMiniResponseTimeHeatMap, RsMrCardMiniResponseTimeXLabelItem, RsMrCardMiniResponseTimeYLabelItem },
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
  data: function () {
    return {
    //   navHeaderList: ['Explorer', 'History'],
    //   clickNumber: 0
      xLabel: ['15:30', '15:35', '15:40', '15:45', '15:50', '15:55', '16:00', '16:05', '16:10', '16:15', '16:20', '16:25', '16:30'],
      yLabel: [6, 4, 2, 0],
      responseTimeList: []
    }
  },
  methods: {
    // mouseClick: function (key) {
    //   this.clickNumber = key
    //   // console.log(this.clickNumber)
    // }
  }
}
</script>

<style scoped>
.rs-mr-api-aside-heatmap {
  position: absolute;
  /*background-color: #d61f1f;*/
  width: 100%;
  height: 30%;
  margin-bottom: 10px;
  padding-left: 10px;
}
p{
  width: 405px;
  height: 23px;
  font-family: TitilliumWeb;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}

.rs-mr-card {
  z-index: 4;
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

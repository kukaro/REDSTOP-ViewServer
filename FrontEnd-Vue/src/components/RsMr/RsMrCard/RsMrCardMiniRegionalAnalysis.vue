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
      <div class="rs-map">
        <div id="mapdiv" style="width: 100%; background-color:#fff; height: 90%;"></div>
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
    AmCharts.makeChart('mapdiv', {
      type: 'map',

      colorSteps: 20,

      dataProvider: {
        map: 'southKoreaLow',
        'zoomLevel': 0.8,
        'colorRanges': [{
          'start': 0,
          'end': 20,
          'color': '#fff',
          'variation': 0.4
        }, {
          'start': 21,
          'end': 30,
          'color': '#fff',
          'variation': 0.4
        }],
        areas: [
          // 광역시
          {
            id: 'KR-11', // 서울
            value: 100
          }, {
            id: 'KR-26', // 부산
            value: 0
          }, {
            id: 'KR-27', // 대구
            value: 100
          }, {
            id: 'KR-28', // 인천
            value: 0
          }, {
            id: 'KR-29', // 광주
            value: 100
          }, {
            id: 'KR-30', // 대전
            value: 0
          }, {
            id: 'KR-31', // 울산
            value: 0
          },

          // 도
          {
            id: 'KR-41', // 경기도
            value: 0
          }, {
            id: 'KR-42', // 강원도
            value: 0
          }, {
            id: 'KR-43', // 충청북도
            value: 100
          }, {
            id: 'KR-44', // 충청남도
            value: 0
          }, {
            id: 'KR-45', // 전라북도
            value: 100
          }, {
            id: 'KR-46', // 전라남도
            value: 0
          }, {
            id: 'KR-47', // 경상북도
            value: 0
          }, {
            id: 'KR-48', // 경상남도
            value: 0
          },

          // 제주도 | 세종시
          {
            id: 'KR-49', // 제주도
            value: 0
          }, {
            id: 'KR-50', // 세종시
            value: 0
          }
        ]
      },

      areasSettings: {
        autoZoom: true,
        'selectedColor': '#B2EBF4',
        'color': '#5275E7',
        'colorSolid': '#EF7D79'
      },

      valueLegend: {
        right: 10,
        minValue: 'Good',
        maxValue: 'Bad'
      }
    })
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

#mapdiv {
  margin-top: 32px;
  margin-left: -36px;
}
</style>

<template>
  <div class="rs-mr-api-section-content">
    <div id="mapdiv" style="width: 140%; background-color:#F3F7FB; height: 90%;"></div>
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-section-content',
  components: { },
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
  data: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-section-content{
  left: 0;
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
  padding-left: 20%;
  padding-right: 20%;

}
#mapdiv{
  margin-left: -20%;
}
</style>

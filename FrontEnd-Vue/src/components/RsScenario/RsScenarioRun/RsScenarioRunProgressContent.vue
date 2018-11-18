<template>
  <div class="rs-scenario-run-progress-content">
    <!--<chartjs-line-->
      <!--:labels="labels"-->
      <!--:data="dataset"-->
      <!--:bind="true"-->
      <!--:datalabel="'Response Time'"-->
      <!--:linetension="0"-->
      <!--:bordercolor="'#2bbee8'"-->
      <!--:pointborderwidth="5"-->
      <!--:pointbordercolor="'#2bbee8'"-->
      <!--:pointbackgroundcolor="'#2bbee8'"-->
      <!--:pointhoverborderwidth="3"-->
      <!--:pointhoverbackgroundcolor="'#000000'"-->
      <!--:pointhoverbordercolor="'#ffd663'">-->
    <!--</chartjs-line>-->
    <chartjs-line :labels="mylabels" :datasets="mydatasets"></chartjs-line>

    <!--<canvas id="mycanvas" count="1"></canvas>-->
    <!--<chartjs-line-->
      <!--:labels="labels" :data="dataset1" :datalabel="'TPS'" :bind="true"-->
      <!--:linetension="0" :bordercolor="'#4966eb'" :backgroundcolor="'#4966eb'"-->
      <!--:pointborderwidth="5" :pointbordercolor="'#4966eb'" :pointbackgroundcolor="'#4966eb'"-->
      <!--:pointhoverborderwidth="3" :pointhoverbackgroundcolor="'#4966eb'"-->
      <!--:pointhoverbordercolor="'#ffd663'"-->
      <!--target="mycanvas"></chartjs-line>-->
    <!--&lt;!&ndash;<button @click="runrun"><span>결과보기</span></button>&ndash;&gt;-->
    <!--<chartjs-line-->
      <!--:labels="labels" :data="dataset2" :bind="true" :datalabel="'Response Time'"-->
      <!--:linetension="0" :bordercolor="'#2bbee8'" :backgroundcolor="'#2bbee8'"-->
      <!--:pointborderwidth="5" :pointbordercolor="'#2bbee8'" :pointbackgroundcolor="'#2bbee8'"-->
      <!--:pointhoverborderwidth="3" :pointhoverbackgroundcolor="'#2bbee8'"-->
      <!--:pointhoverbordercolor="'#ffd663'"-->
      <!--target="mycanvas"></chartjs-line>-->
    <!--<chartjs-line-->
      <!--:labels="labels" :data="dataset3" :bind="true" :datalabel="'VUs'"-->
      <!--:linetension="0" :bordercolor="'#77c61f'" :backgroundcolor="'#77c61f'"-->
      <!--:pointborderwidth="5" :pointbordercolor="'#77c61f'" :pointbackgroundcolor="'#77c61f'"-->
      <!--:pointhoverborderwidth="3" :pointhoverbackgroundcolor="'#77c61f'"-->
      <!--:pointhoverbordercolor="'#ffd663'"-->
      <!--target="mycanvas"></chartjs-line>-->
    <!--<chartjs-line-->
      <!--:labels="labels" :data="dataset4" :bind="true" :datalabel="'Failures'"-->
      <!--:linetension="0" :bordercolor="'#eb9e49'" :backgroundcolor="'#eb9e49'"-->
      <!--:pointborderwidth="5" :pointbordercolor="'#eb9e49'" :pointbackgroundcolor="'#eb9e49'"-->
      <!--:pointhoverborderwidth="3" :pointhoverbackgroundcolor="'#eb9e49'"-->
      <!--:pointhoverbordercolor="'#ffd663'"-->
      <!--target="mycanvas"></chartjs-line>-->
    <!--<chartjs-line-->
      <!--:labels="labels" :data="dataset5" :bind="true" :datalabel="'Failures/s'"-->
      <!--:linetension="0" :bordercolor="'#ebd249'" :backgroundcolor="'#ebd249'"-->
      <!--:pointborderwidth="5" :pointbordercolor="'#ebd249'" :pointbackgroundcolor="'#ebd249'"-->
      <!--:pointhoverborderwidth="3" :pointhoverbackgroundcolor="'#ebd249'"-->
      <!--:pointhoverbordercolor="'#ffd663'"-->
      <!--target="mycanvas"></chartjs-line>-->
    <!--<chartjs-line :datalabel="'first'" :backgroundcolor="'rgba(75,192,192,0.1)'" :bordercolor="'#00c853'" target="mycanvas"></chartjs-line>-->
    <!--<chartjs-line :datalabel="'second'" :data="[50, 40, 90, 60]" target="mycanvas"></chartjs-line>-->
    <button id="btn-run" @click="gotoreport"><span>결과보기</span></button>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'rs-scenario-run-progress-content',
  methods: {
    gotoreport () {
      this.$router.push({name: 'RsReport'})
      // this.$router.push({name: 'RsScenarioDetail', params: { name: item }})
    },
    runrun () {
      this.dataset1.push(0)
    }
  },
  created: function () {
    this.dataset1 = [12, 59, 80, 81, 56, 55, 40]
    this.dataset1.push(33)
  },
  data () {
    return {
      labels: ['00:00', '00:01', '00:02', '00:03', '00:04', '00:05', '00:06', '00:07', '00.08'],
      dataset1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      dataset2: [32, 9, 1, 33, 97, 11, 32, 55, 12, 7],
      dataset3: [86, 25, 28, 63, 39, 1, 22, 7, 97, 54],
      dataset4: [10, 10, 10, 10, 10, 7, 7, 10, 10, 7],
      dataset5: [75, 54, 24, 56, 24, 86, 22, 44, 96, 30],
      mylabels: ["January", "February", "March", "April", "May", "June", "July"],
      mydatasets:[{
        label: "My first dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
        spanGaps: false,
      },
        {
          label: "My second dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 20, 40, 41, 66, 25, 80],
          spanGaps: false,
        },]
    }
  },
  watch: {
    // dataset1: function () {
    //   // this.dataset1 =
    // }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
.rs-scenario-run-progress-content {
  position: relative;
  top: 10%;
  width: 100%;
  height: 90%;
  font-family: 'Titillium Web', sans-serif;
  /*background-color: cornflowerblue;*/
}
#btn-run{
  width: 130px;
  height: 35px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 #c6d5e9;
  background-color: #39496d;
  /*position: absolute;*/
  position: absolute;
  left: 73%;
  bottom: 5%;
}
#btn-run span{
  font-family: 'Noto Sans KR', sans-serif;
  width: 31.5px;
  height: 21px;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 8px;
}
</style>

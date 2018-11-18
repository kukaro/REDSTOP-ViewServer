<template>
  <div class="rs-scenario-run-progress-content">
    <canvas id="mycanvas2" count="2"></canvas>
    <chartjs-line :datalabel="'TPS'" :data="dataset" :bind="true" :backgroundcolor="'#4966eb'" :bordercolor="'#4966eb'" target="mycanvas2"></chartjs-line>
    <chartjs-line :datalabel="'Response Time'" :data="dataset2" target="mycanvas2"></chartjs-line>
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
    addData () {
      // this.dataset.push(this.dataentry)
      this.$http
        .get(this.$conf.apiServer+'/api/v2/number')
        .then(response => {
          this.dataset.push(response.data.number)
          this.dataset2.push(response.data.number2)
          // this.apiCnt = response.data.count;
          // console.log('count : ' + response.data.count)
        });

      // this.dataset.push(26)
      // this.labels.push(this.datalabel)
      this.datalabel = ''
      this.dataentry = ''
    }
  },
  created: function () {
    this.addData();
    this.timer = setInterval(this.addData, 5000) // 5초
  },
  data () {
    return {
      timer: '',
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      dataset: [30],
      dataset2: [20]
    }
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

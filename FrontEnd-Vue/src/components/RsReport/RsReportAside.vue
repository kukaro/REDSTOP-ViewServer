<template>
  <div class="rs-report-aside">
    <aside>
      <div class="rs-report-body">

        <div class="hr"></div>

        <h1><b>SK Broadband Internal App</b></h1>
        <h6 class="time">2018.11.21</h6>

        <h5 class="test-pro">Test Properties</h5>
        <div class="hr-dec"></div>

        <table>
          <tr>
            <td><h6>•  Project name</h6></td>
            <td><h6>SK Broadband Internal App</h6></td>
          </tr>
          <tr>
            <td><h6>•  Project description</h6></td>
            <td><h6>SK Broadband 사내 직원 앱</h6></td>
          </tr>
          <tr>
            <td><h6>•  Test name</h6></td>
            <td><h6>Load Test1</h6></td>
          </tr>
          <tr>
            <td><h6>•  Test duration</h6></td>
            <td><h6>10:00</h6></td>
          </tr>
          <tr>
            <td><h6>•  Warm-up time</h6></td>
            <td><h6>0sec</h6></td>
          </tr>
        </table>

        <h5 class="test-pro">Load test overview</h5>
        <div class="hr-dec"></div>

        <table>
          <tr>
            <td><h6>•  Scenario in the test</h6></td>
            <td><h6>1</h6></td>
          </tr>
          <tr>
            <td><h6>•  Load agent used</h6></td>
            <td><h6>0</h6></td>
          </tr>
          <tr>
            <td><h6>•  Cloud agent used</h6></td>
            <td><h6>0</h6></td>
          </tr>
        </table>

        <h5 class="test-pro">Scenario Details</h5>
        <div class="hr-dec"></div>

        <table>
          <tr>
            <td><h6>•  Base VUs</h6></td>
            <td><h6>10</h6></td>
          </tr>
          <tr>
            <td><h6>•  Wait time</h6></td>
            <td><h6>1 seconds(s)</h6></td>
          </tr>
          <tr>
            <td><h6>•  Target test case(s)</h6></td>
            <td><h6>16</h6></td>
          </tr>
          <tr>
            <td><h6>•  Load type</h6></td>
            <td><img class="load-type-img" src="../../assets/img/chart-baseline.png"></td>
          </tr>
        </table>

        <h5 class="test-pro">Load test result</h5>
        <div class="hr-dec"></div>

        <img class="result" src="../../assets/img/load_test_result.png">
        <img class="face" src="../../assets/img/api_status_good.png">
        <br>
        <h5 class="status">API Status : 매우 좋음</h5>
      </div>
    </aside>
  </div>
</template>

<script>

// 부하 템플릿
// Stress | Soak | Default | Baseline | Peak | Spike

export default {
  name: 'rs-report-aside',
  components: {

  },
  data: function () {
    return {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    margin-top: 48px;
  }

  .api-status > img {
    width: 10%;
  }

  .rs-report-aside {
    background-color: #F2F7FB;
    width: 100%;
  }

  .load-type-img {
    width: 60%;
  }

  aside {
    position: absolute;
    padding-top: 100px;
    padding-left: 20px;
    top: 70px;
    width: 100%;
    font-family: TitilliumWeb;
    font-size: 12px;
    height: 1200px;
    background-color: #F2F7FB;
  }

  .hr {
    height: 10px;
    background-color: #DB585A;
    margin-bottom: 20px;
  }

  .rs-report-body {
    position: absolute;
    border: 1px solid #E8EBEF;
    padding: 32px;
    top: 70px;
    width: 60%;
    z-index: 1;
    background-color: #ffffff;
    /*left: 50%;*/
    transform: translateX(-50%);
  }

  table {
    width: 95%;
    margin-top: 36px;
    margin-left: 2.5%;
  }

  td {
    width: 33.3%;
  }

  img {
    width: 25%;
  }

  h1 > b {
    color: #EC4C55;
  }

  .dec {
    color: #5D5D5D;
  }

  .test-pro {
    margin-top: 40px;
  }

  .hr-dec {
    height: 2px;
    background-color: #bbb;
    margin-bottom: -20px;
  }

  .time {
    color: #777;
    position: absolute;
    top: 72px;
    right: 32px;
  }

  .result {
    margin-top: 36px;
    width: 60%;
  }

  .face {
    width: 20%;
    margin-left: 10%;
  }

  .status {
    position: absolute;
    right: 12%;
    margin-top: -30px;
  }
</style>

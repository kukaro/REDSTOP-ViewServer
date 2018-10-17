<template>
  <div class="rs-report-aside">
    <aside>
      <h3>Load Test Results</h3>
      <p style="font-size: 12px; text-align: right; padding-right: 10px">2018.09.30 13:02:32</p>
      <p class="title">Test Properties</p>
      <table>
        <tr>
          <td class="colored">Project name</td>
          <td>SK Broadband Internal App</td>
        </tr>
        <tr>
          <td class="colored">Project description</td>
          <td >SK Broadband 사내 직원 앱</td>
        </tr>
        <tr>
          <td class="colored">Test name</td>
          <td>Load Test1</td>
        </tr>
        <tr>
          <td class="colored">Test duration</td>
          <td>10:00</td>
        </tr>
        <tr>
          <td class="colored">Warm-up time</td>
          <td>15sec</td>
        </tr>
      </table>
      <br>
      <p class="title">Load test overview</p>
      <table>
        <tr>
          <td class="colored">Scenario in the test</td>
          <td>1</td>
        </tr>
        <tr>
          <td class="colored">Load agent used</td>
          <td>0</td>
        </tr>
        <tr>
          <td class="colored">Cloud agent used</td>
          <td>0</td>
        </tr>
      </table>
      <br>
      <p class="title">Scenario Details</p>
      <p style="padding-left: 10px; font-style: italic">Login scenario 1</p>
      <table>
        <tr>
          <td class="colored">Load type</td>
          <td> <img class="load-type-img" src="../../assets/img/chart-baseline.png"></td>
        </tr>
        <tr>
          <td class="colored">Base VUs</td>
          <td>1000</td>
        </tr>
        <tr>
          <td class="colored">Wait time</td>
          <td>1 seconds(s)</td>
        </tr>
        <tr>
          <td class="colored">Target test case(s)</td>
          <td>4</td>
        </tr>
      </table>
      <img class="blocks-img" src="../../assets/img/blocks4.png" style="padding-left: 20px">

      <br>
    </aside>
  </div>
</template>

<script>

export default {
  name: 'rs-report-aside',
  components: { }
}
</script>

<style scoped>
aside {
  position: absolute;
  padding-top: 100px;
  padding-left: 20px;
  top: 70px;
  left: 25%;
  width: 50%;
  height: 100%;
  /*background-color: #ffffff;*/
  background-color: #ffffff;
  /*z-index: 0;*/
  font-family: TitilliumWeb;
  font-size: 12px;
  /*font-weight: 600;*/
}
table{
  margin-left: 20px;
}

td{
  width: 300px;

}
.title{
  font-weight: bolder;
  font-size: 15px;
}
.load-type-img{
  width: 200px;
  height: 65px;
}
.blocks-img{
  width: 280px;
  height: 100px;
}
.colored{
  font-weight: bolder;
  color: rgba(0, 7, 25, 0.88);
}
</style>

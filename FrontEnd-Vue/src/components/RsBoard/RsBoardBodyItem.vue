<template>
  <div class="rs-board-body-item" @click="mouseClick(project)">
    <span class="item-title">{{title}}</span><br>
    <span class="item-test-case">{{cntTest}} Test Cases</span><br><br>
    <div class="item-div-table">
      <table class="item-table">
        <tr>
          <td class="table-top-left"><span class="gray-font">Success</span><br><span class="success-font">{{success}}%</span></td>
          <td class="table-top-right"><span class="gray-font">Fail</span><br><span class="fail-font">{{fail}}%</span></td>
        </tr>
        <tr>
          <td class="table-bottom" colspan="2" align="center">
            <img v-if="type==='baseline'" class="load-type-img" src="../../assets/img/chart-baseline.png">
            <img v-else-if="type==='peak'" class="load-type-img" src="../../assets/img/chart-peak.png">
            <img v-else-if="type==='stress'" class="load-type-img" src="../../assets/img/chart-stress.png">
            <img v-else-if="type==='spike'" class="load-type-img" src="../../assets/img/chart-spike.png">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['initProject'],
  name: 'rs-board-body-item',
  data: function () {
    return {
      project: this.initProject,
      title: this.initProject['title'],
      cntTest: this.initProject['cntTest'],
      success: this.initProject['success'],
      fail: this.initProject['fail'],
      type: this.initProject['type']
    }
  },
  methods: {
    mouseClick: function (project) {
      this.$router.push('test-block')
    }
  }
}
</script>

<style scoped>
.rs-board-body-item {
  padding: 20px;
  margin: 10px;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
}
.item-title {
  font-size: 18px;
}
.item-test-case {
  font-size: 12px;
  color: rgba(50, 60, 71, 0.5);
}
.item-div-table {
  /*background-color: black;*/
  width: 100%;
  height: 70%;
  border: 2px solid #DFEEF5;
  border-radius: 10px;
}
.item-table {
  width: 100%;
  height: 100%;
}
.table-top-left {
  border-bottom: 2px solid #DFEEF5;
  border-right: 2px solid #DFEEF5;
}
table {
  table-layout: fixed;
}
td {
  word-break:break-all;
}
.load-type-img{
  width: 200px;
  height: 65px;
}
.gray-font {
  font-size: 11px;
  color: #8f9091;
  padding-left: 20px;
}
.success-font {
  font-size: 20px;
  color: #1577e5;
  padding-left: 20px;
}
.fail-font {
  font-size: 20px;
  color: #ff384f;
  padding-left: 20px;
}
</style>

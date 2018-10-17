<template>
  <div class="rs-mr-api-aside-table">
    <p>Test Result</p>
    <table>
      <rs-mr-api-aside-table-header :initTableHeaderList="Object.keys(tableValue[0])"></rs-mr-api-aside-table-header>
      <rs-mr-api-aside-table-body :initTableValue="tableValue"></rs-mr-api-aside-table-body>
    </table>
  </div>
</template>

<script>
import RsMrApiAsideTableHeader from './RsMrApiAsideTable/RsMrApiAsideTableHeader'
import RsMrApiAsideTableBody from './RsMrApiAsideTable/RsMrApiAsideTableBody'

export default {
  name: 'rs-mr-api-aside-table',
  components: { RsMrApiAsideTableBody, RsMrApiAsideTableHeader },
  created: function () {
  },
  data: function () {
    return {
      tableValue: [
        {
          'Time': '2018.07.12 18:34:11',
          'Region': '서울특별시 강남구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'KT',
          'Platform': 'iOS'
        },
        {
          'Time': '2018.07.12 20:12:09',
          'Region': '서울특별시 강남구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'LG',
          'Platform': 'iOS'
        },
        {
          'Time': '2018.07.12 20:12:09',
          'Region': '경기도 수원시 장안구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'LG',
          'Platform': 'iOS'
        },
        {
          'Time': '2018.07.12 20:12:09',
          'Region': '경기도 수원시 장안구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'LG',
          'Platform': 'iOS'
        },
        {
          'Time': '2018.07.12 20:12:09',
          'Region': '경기도 수원시 장안구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'LG',
          'Platform': 'iOS'
        },
        {
          'Time': '2018.07.12 20:12:09',
          'Region': '경기도 수원시 장안구',
          'Status': '200',
          'ResponseTime': '7384ms',
          'Deviation': '23ms',
          'Size': '435B',
          'ISP': 'LG',
          'Platform': 'iOS'
        }
      ]
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
.rs-mr-api-aside-table {
  /*position: absolute;*/
   width: 100%;
   height: 30%;
  padding-top: 100px;
  padding-right: 5px;
  padding-left: 10px;
}
table{
  width: 100%;
  font-size: 5px;
}
p{
  font-family: TitilliumWeb;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
}
</style>

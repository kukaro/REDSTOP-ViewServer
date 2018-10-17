<template>
    <div class="rs-tb-aside-gblock-table">
      <table>
        <rs-tb-aside-gblock-table-header :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-gblock-table-header>
        <rs-tb-aside-gblock-table-body :initTableValue="tableValue"></rs-tb-aside-gblock-table-body>
      </table>
    </div>
</template>

<script>
import RsTbAsideGblockTableHeader from './RsTbAsideGblockTable/RsTbAsideGblockTableHeader'
import RsTbAsideGblockTableBody from './RsTbAsideGblockTable/RsTbAsideGblockTableBody'

export default {
  name: 'rs-tb-aside-gblock-table',
  components: { RsTbAsideGblockTableBody, RsTbAsideGblockTableHeader },
  data: function () {
    return {
      tableValue: [
        {
          'Name': 'Sign Up',
          'URLCount': '10',
          'SuccessCount': '10(100%)',
          'FailCount': '0(0%)'
        },
        {
          'Name': 'Verify Email',
          'URLCount': '6',
          'SuccessCount': '5(83%)',
          'FailCount': '1(17%)'
        },
        {
          'Name': 'Sign in',
          'URLCount': '22',
          'SuccessCount': '11(50%)',
          'FailCount': '11(50%)'
        },
        {
          'Name': 'Sign Out',
          'URLCount': '100',
          'SuccessCount': '99(99%)',
          'FailCount': '1(1%)'
        }
      ]
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
  font-size: 5px;
}
</style>

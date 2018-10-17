<template>
    <div class="rs-tb-aside-ablock-request-body-tab-table">
      <table>
          <rs-tb-aside-ablock-request-body-tab-table-header :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-ablock-request-body-tab-table-header>
          <rs-tb-aside-ablock-request-body-tab-table-body :initTableValue="tableValue"></rs-tb-aside-ablock-request-body-tab-table-body>
      </table>
    </div>
</template>

<script>
import RsTbAsideAblockRequestBodyTabTableHeader
  from './RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableHeader'
import RsTbAsideAblockRequestBodyTabTableBody
  from './RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableBody'
export default {
  name: 'rs-tb-aside-ablock-request-body-tab-table',
  components: {
    RsTbAsideAblockRequestBodyTabTableBody, RsTbAsideAblockRequestBodyTabTableHeader},
  created: function () {
    console.log('여기는 rs-tb-aside-ablock-request-body-tab-table')
    console.log(this.globalTableValue)
    this.tableValue = this.globalTableValue
  },
  data: function () {
    return {
      tableValue: this.globalTableValue
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
}
</style>

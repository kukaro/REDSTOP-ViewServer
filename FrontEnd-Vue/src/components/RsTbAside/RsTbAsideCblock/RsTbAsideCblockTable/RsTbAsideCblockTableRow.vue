<template>
    <tr class="rs-tb-aside-cblock-table-row">
      <td v-for="(value,key) in tableRowData" :key="key" :class="{'last-row-success':key===6 && (Math.ceil(value/100)===2 || Math.ceil(value/100)===3),'name-row':key===1,'url-row':key===2,'last-row-fail':key===6 && (Math.ceil(value/100)===4 || Math.ceil(value/100)===5)}">
        <span v-if="value!=null">{{value}}</span>
        <span v-else>-</span>
      </td>
    </tr>
</template>

<script>
export default {
  props: ['initTableRowData'],
  name: 'rs-tb-aside-cblock-table-row',
  created: function () {
    var values = Object.keys(this.tableRowData).map(key => this.tableRowData[key])
    this.tableRowData = values
  },
  watch: {
    initTableRowData: function () {
      this.tableRowData = this.initTableRowData
      var values = Object.keys(this.tableRowData).map(key => this.tableRowData[key])
      this.tableRowData = values
    }
  },
  data: function () {
    return {
      tableRowData: this.initTableRowData
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
    padding: 7px;
  }
  .name-row{
    word-break:break-all;
  }
  .url-row{
    word-break:break-all;
  }
  .last-row-success{
    color: #00c292;
  }
  .last-row-fail{
    color: #FF777A;
  }
</style>

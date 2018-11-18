<template>
    <tr class="rs-tb-aside-cblock-table-row">
      <td v-for="(value,key) in tableRowData" :key="key" :class="{'last-row':key==6,'name-row':key==1,'url-row':key==2}">
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
    width: 10%;
    color: red;
  }
  .url-row{
    word-break:break-all;
    width: 5%;
    color: blue;
  }
  .last-row{
    color: #00c292;
  }
</style>

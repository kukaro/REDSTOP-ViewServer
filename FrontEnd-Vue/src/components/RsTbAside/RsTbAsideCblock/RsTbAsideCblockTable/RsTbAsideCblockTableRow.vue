<template>
    <tr class="rs-tb-aside-cblock-table-row">
      <td v-for="(value,key) in tableRowData" :key="key" :class="{'last-row':key==6}">
        <span v-if="value!=null">{{(typeof(value) === 'string' && value.length <= 20) ? value : ('...' + value.substr(value.length-20, value.length))}}</span>
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
  .last-row{
    color: #00c292;
  }
</style>

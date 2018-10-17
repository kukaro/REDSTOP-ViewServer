<template>
    <tr class="rs-mr-card-mini-table-row">
      <td v-for="(value,key) in tableRowData" :key="key">
        <span v-if="value!=null" :class="{'dangerous': dangerous===key}">{{value}}</span>
        <span v-else>-</span>
      </td>
    </tr>
</template>

<script>
export default {
  props: ['initTableRowData', 'initDangerous'],
  name: 'rs-mr-card-mini-table-row',
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
      tableRowData: this.initTableRowData,
      dangerous: this.initDangerous
    }
  }
}
</script>

<style scoped>
  td{
    /*padding: 5px;*/
    font-size: 13px;
    text-align: center;
  }
  .dangerous{
    color: #ff0000;
  }
</style>

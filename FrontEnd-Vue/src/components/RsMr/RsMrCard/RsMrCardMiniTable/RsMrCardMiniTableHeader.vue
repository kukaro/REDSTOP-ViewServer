<template>
    <thead class="rs-mr-card-mini-table-header">
      <tr>
        <td v-for="item in tableHeaderList" :key="item.id">
          <b>{{item}}</b>
        </td>
      </tr>
    </thead>
</template>

<script>
export default {
  props: ['initTableHeaderList'],
  name: 'rs-mr-card-mini-table-header',
  watch: {
    initTableHeaderList: function () {
      this.tableHeaderList = this.initTableHeaderList
    }
  },
  data: function () {
    return {
      tableHeaderList: this.initTableHeaderList
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 2px solid #8B95AC;
    text-align: center;
    font-size: 10px;
    /*width: 33%;*/
  }
</style>

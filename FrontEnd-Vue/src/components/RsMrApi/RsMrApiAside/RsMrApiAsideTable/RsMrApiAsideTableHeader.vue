<template>
    <thead class="rs-mr-api-aside-table-header">
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
  name: 'rs-mr-api-aside-table-header',
  data: function () {
    return {
      tableHeaderList: this.initTableHeaderList
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 2px solid #616161;
    text-align: center;
    width: 33%;
  }
</style>

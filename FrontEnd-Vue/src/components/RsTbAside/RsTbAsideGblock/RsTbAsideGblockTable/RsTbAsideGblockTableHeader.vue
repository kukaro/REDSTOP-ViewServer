<template>
    <thead class="rs-tb-aside-gblock-table-header">
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
  name: 'rs-tb-aside-gblock-table-header',
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
  td::after{
    /*content: url("../../../../assets/img/sort.png");*/
    content: url("../../../../assets/img/sort.png");
  }
</style>

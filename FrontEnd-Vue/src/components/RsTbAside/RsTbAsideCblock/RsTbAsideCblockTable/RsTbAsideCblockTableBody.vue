<template>
    <tbody class="rs-tb-aside-cblock-table-body">
      <rs-tb-aside-cblock-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-tb-aside-cblock-table-row>
    </tbody>
</template>

<script>
import RsTbAsideCblockTableRow from './RsTbAsideCblockTableRow'
export default {
  components: {RsTbAsideCblockTableRow},
  props: ['initTableValue'],
  name: 'rs-tb-aside-cblock-table-body',
  data: function () {
    return {
      tableValue: this.initTableValue
    }
  }
}
</script>

<style scoped>
</style>

<template>
    <tbody class="rs-tb-aside-gblock-table-body">
      <rs-tb-aside-gblock-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-tb-aside-gblock-table-row>
    </tbody>
</template>

<script>
import RsTbAsideGblockTableRow from './RsTbAsideGblockTableRow'
export default {
  components: {RsTbAsideGblockTableRow},
  props: ['initTableValue'],
  name: 'rs-tb-aside-glock-table-body',
  watch: {
    initTableValue: function () {
      console.log('aside gblock tablerow')
      console.log(this.initTableValue)
      this.tableValue = this.initTableValue
    }
  },
  data: function () {
    return {
      tableValue: this.initTableValue
    }
  }
}
</script>

<style scoped>
</style>

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
  created: function (){
    this.tableValue = this.initTableValue
  },
  watch: {
    initTableValue: function () {
      console.log('변신한다값')
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

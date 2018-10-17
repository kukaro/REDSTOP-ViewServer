<template>
    <tbody class="rs-tb-aside-ablock-request-body-tab-table-body">
      <rs-tb-aside-ablock-request-body-tab-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-tb-aside-ablock-request-body-tab-table-row>
    </tbody>
</template>

<script>
import RsTbAsideAblockRequestBodyTabTableRow from './RsTbAsideAblockRequestBodyTabTableRow'
export default {
  components: {RsTbAsideAblockRequestBodyTabTableRow},
  props: ['initTableValue'],
  name: 'rs-tb-aside-ablock-request-body-tab-table-body',
  data: function () {
    return {
      tableValue: this.initTableValue
    }
  }
}
</script>

<style scoped>
</style>

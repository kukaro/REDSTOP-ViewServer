<template>
    <tbody class="rs-mr-card-mini-table-body">
      <!--<rs-tb-aside-ablock-request-body-tab-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-tb-aside-ablock-request-body-tab-table-row>-->
      <rs-mr-card-mini-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id" :init-dangerous="dangerous"/>
    </tbody>
</template>

<script>
import RsMrCardMiniTableRow from './RsMrCardMiniTableRow'
export default {
  components: {RsMrCardMiniTableRow},
  props: ['initTableValue', 'initDangerous'],
  name: 'rs-mr-card-mini-table-body',
  watch: {
    initTableValue: function () {
      this.tableValue = this.initTableValue
    }
  },
  data: function () {
    return {
      tableValue: this.initTableValue,
      dangerous: this.initDangerous
    }
  }
}
</script>

<style scoped>
</style>

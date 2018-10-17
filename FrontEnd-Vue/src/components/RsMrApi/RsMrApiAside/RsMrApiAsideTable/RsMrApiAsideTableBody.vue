<template>
    <tbody class="rs-mr-api-aside-table-body">
      <rs-mr-api-aside-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-mr-api-aside-table-row>
    </tbody>
</template>

<script>
import RsMrApiAsideTableRow from './RsMrApiAsideTableRow'
export default {
  components: {RsMrApiAsideTableRow},
  props: ['initTableValue'],
  name: 'rs-mr-api-aside-table-body',
  data: function () {
    return {
      tableValue: this.initTableValue
    }
  }
}
</script>

<style scoped>
</style>

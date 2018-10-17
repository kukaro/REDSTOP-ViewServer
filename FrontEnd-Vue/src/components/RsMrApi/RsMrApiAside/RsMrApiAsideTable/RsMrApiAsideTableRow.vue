<template>
    <tr class="rs-mr-api-aside-table-row">
      <td v-for="(value,key) in tableRowData" :key="key" :class="{'last-row':key==7}" @click="mouseClick">
        <rs-mr-api-modal :initIsModal="isModal"/>
        <span v-if="value!=null">{{value}}</span>
        <span v-else>-</span>
      </td>
    </tr>
</template>

<script>
import RsMrApiModal from '../../RsMrApiModal'
export default {
  components: {RsMrApiModal},
  props: ['initTableRowData'],
  name: 'rs-mr-api-aside-table-row',
  created: function () {
    var values = Object.keys(this.tableRowData).map(key => this.tableRowData[key])
    this.tableRowData = values
  },
  data: function () {
    return {
      tableRowData: this.initTableRowData,
      isModal: false
    }
  },
  methods: {
    mouseClick: function () {
      this.isModal = !this.isModal
      console.log('클릭했다')
    }
  }
}
</script>

<style scoped>
  td{
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
    padding: 4px;

    font-family: TitilliumWeb;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.08;
    letter-spacing: normal;
    color: #000000;

  }
  /*.last-row{*/
    /*color: #00c292;*/
  /*}*/
</style>

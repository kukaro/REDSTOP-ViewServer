<template>
  <div class="rs-tb-aside-gblock">
    <img src="../../assets/img/group.png" width="18px" height="16px">
    <span>Sign</span>
    <rs-tb-aside-gblock-table></rs-tb-aside-gblock-table>
    <br><br>
    <img src="../../assets/img/group.png" width="18px" height="16px">
    <span>Preferences</span>
    <rs-tb-aside-gblock-table></rs-tb-aside-gblock-table>
  </div>
</template>
<script>
import RsTbAsideGblockTable from './RsTbAsideGblock/RsTbAsideGblockTable'
export default {
  props: ['initCurrentBlock'],
  name: 'rs-tb-aside-gblock',
  components: {RsTbAsideGblockTable},
  created: function () {
    console.log('aside gblock')
    let treeDataSerial = this.$store.state.app.treeDataSerial
    console.log(treeDataSerial)
  },
  watch: {
    initCurrentBlock: function () {
      this.currentBlock = this.initCurrentBlock
      console.log(this.currentBlock)
    }
  },
  data: function () {
    return {
      currentBlock: this.initCurrentBlock
    }
  }
}
</script>

<style scoped>
</style>

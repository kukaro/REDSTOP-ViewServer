<template>
  <div class="rs-tb-aside-gblock">
    <div v-for="(value,key) in childBlocks" :key>
      <img src="../../assets/img/group.png" width="18px" height="16px">
      <span>{{value.name}}</span>
      <rs-tb-aside-gblock-table></rs-tb-aside-gblock-table>
      <br><br>
    </div>
  </div>
</template>
<script>
/*eslint-disable */
import RsTbAsideGblockTable from './RsTbAsideGblock/RsTbAsideGblockTable'
export default {
  props: ['initCurrentBlock'],
  name: 'rs-tb-aside-gblock',
  components: {RsTbAsideGblockTable},
  created: function () {
    // console.log('aside gblock')
    let treeDataSerial = this.$store.state.app.treeDataSerial
    for(let atom of treeDataSerial){
      if(atom.parentBlockId === this.currentBlock.id){
        this.childBlocks.push(atom)
      }
    }
    console.log(this.childBlocks)
  },
  watch: {
    initCurrentBlock: function () {
      console.log('tree당')
      this.currentBlock = this.initCurrentBlock
      this.childBlocks = []
      let treeDataSerial = this.$store.state.app.treeDataSerial
      let treeData = this.$store.state.app.treeData
      for(let atom of treeDataSerial){
        if(atom.parentBlockId === this.currentBlock.id){
          this.childBlocks.push(atom)
        }
      }
      console.log(treeData)
    }
  },
  data: function () {
    return {
      currentBlock: this.initCurrentBlock,
      childBlocks: []
    }
  }
}
</script>

<style scoped>
</style>

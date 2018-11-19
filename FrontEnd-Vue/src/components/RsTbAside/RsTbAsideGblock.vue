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
import Queue from 'queuejs'
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
      let q = new Queue()
      let objList = []
      for(let atom of treeData){
        q.enq(atom)
      }
      while(!q.isEmpty()){
        let tmp = q.peek()
        q.deq()
        if(tmp.parentBlockId === this.currentBlock.id){
          objList.push(tmp)
        }
        // console.log(tmp)
        if(tmp.children !== undefined){
          for(let atom of tmp.children){
            q.enq(atom)
          }
        }
      }
      console.log(objList)
      // console.log(treeData)
      // console.log(treeDataSerial)
    }
  },
  data: function () {
    return {
      currentBlock: this.initCurrentBlock,
      childBlocks: []
    }
  },
}
</script>

<style scoped>
</style>

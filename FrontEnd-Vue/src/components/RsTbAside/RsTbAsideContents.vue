<template>
  <div class="rs-tb-aside-contents">
    <div v-if="currentBlock.type=='group'">
      <rs-tb-aside-gblock></rs-tb-aside-gblock>
    </div>
    <div v-else-if="currentBlock.type=='case'">
      <rs-tb-aside-cblock></rs-tb-aside-cblock>
    </div>
    <div v-else-if="currentBlock.type=='api'">
      <rs-tb-aside-ablock :initCurrentBlock="currentBlock"></rs-tb-aside-ablock>
    </div>

  </div>
</template>
<script>
  import RsTbAsideAblock from './RsTbAsideAblock'
  import RsTbAsideCblock from './RsTbAsideCblock'
  import RsTbAsideGblock from './RsTbAsideGblock'

  export default {
    props: ['initBlockId'],
    name: 'rs-tb-aside-contents',
    components: {RsTbAsideAblock, RsTbAsideCblock, RsTbAsideGblock},
    watch: {
      initBlockId: function () {
        // console.log('여기는 rs-tb-aside-content watch')
        let treeDataSerial = this.$store.state.app.treeDataSerial
        let currentBlockID = this.$store.state.app.currentBlockId
        let currentBlock = null
        if (treeDataSerial !== null) {
          for (let atom of treeDataSerial) {
            if (atom.id === currentBlockID) {
              currentBlock = atom
              break;
            }
          }
          this.currentBlock = currentBlock
          // console.log(currentBlock)
        }
      }
    },
    created: function () {
      // console.log('여기는 rs-tb-aside-content created')
      let treeDataSerial = this.$store.state.app.treeDataSerial
      let currentBlockID = this.$store.state.app.currentBlockId
      let currentBlock = null
      if (treeDataSerial !== null) {
        for (let atom of treeDataSerial) {
          if (atom.id === currentBlockID) {
            currentBlock = atom
            break;
          }
        }
        this.currentBlock = currentBlock
        // console.log(currentBlock)
      }
    },
    data: function () {
      return {
        currentBlock: {id: 'default', name: 'default', parentBlockId: null, type: 'api'}
      }
    }
  }
</script>

<style scoped>
</style>

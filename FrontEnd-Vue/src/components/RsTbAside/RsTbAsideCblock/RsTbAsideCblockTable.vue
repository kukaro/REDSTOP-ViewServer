<template>
    <div class="rs-tb-aside-cblock-table">
      <table>
        <rs-tb-aside-cblock-table-header :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-cblock-table-header>
        <rs-tb-aside-cblock-table-body :initTableValue="tableValue"></rs-tb-aside-cblock-table-body>
      </table>
    </div>
</template>

<script>
import RsTbAsideCblockTableHeader from './RsTbAsideCblockTable/RsTbAsideCblockTableHeader'
import RsTbAsideCblockTableBody from './RsTbAsideCblockTable/RsTbAsideCblockTableBody'

export default {
  props: ['initCurrentBlock'],
  name: 'rs-tb-aside-cblock-table',
  created: function () {
    console.log('aside cblock table')
    console.log(this.currentBlock)
    this.makeTableValue()

  },
  watch: {
    initCurrentBlock: function () {
      this.currentBlock = this.initCurrentBlock
      console.log('aside cblock table')
      console.log(this.currentBlock)
      this.makeTableValue()
    }
  },
  components: { RsTbAsideCblockTableBody, RsTbAsideCblockTableHeader },
  data: function () {
    return {
      currentBlock: this.initCurrentBlock,
      childBlocks: [],
      tableValue: [
        {
          'Method': 'POST',
          'Name': 'ChangePW',
          'URL': '/redstop.com/changepw',
          'StartTime': '18-06-22 16:19:23:396',
          'FinishTime': '18-06-22 16:19:23:396',
          'TimeTaken': '21ms',
          'Status': 'PASS'
        },
        {
          'Method': 'GET',
          'Name': 'GetPW',
          'URL': '/redstop.com/getpw',
          'StartTime': '18-06-22 16:19:23:396',
          'FinishTime': '18-06-22 16:19:23:396',
          'TimeTaken': '13ms',
          'Status': 'PASS'
        },
        {
          'Method': 'POST',
          'Name': 'ChangeContact',
          'URL': '/redstop.com/chagecontact',
          'StartTime': '18-06-22 16:19:23:396',
          'FinishTime': '18-06-22 16:19:23:396',
          'TimeTaken': '10ms',
          'Status': 'PASS'
        }
      ]
    }
  },
  methods: {
    makeTableValue (){
      let treeDataSerial = this.$store.state.app.treeDataSerial;
      console.log('makeTableValue')
      // console.log(treeDataSerial)
      this.childBlocks = []
      for(let atom of treeDataSerial){
        if(atom.parentBlockId === this.currentBlock.id){
          let tmpBlockData = {
            'Method': atom.method,
            'Name': atom.url,
            'URL': atom.url,
            'StartTime': atom.startTime,
            'FinishTime': atom.endTime,
            'TimeTaken': atom.time,
            'Status': atom.status
          }
          this.childBlocks.push(tmpBlockData)
        }
      }
      console.log(this.childBlocks)
    }
  }
}
</script>

<style scoped>
table{
  width: 100%;
  font-size: 5px;
}
</style>

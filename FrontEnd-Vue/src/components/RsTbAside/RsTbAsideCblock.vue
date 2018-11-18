<template>
  <div class="rs-tb-aside-cblock">
    <rs-tb-aside-cblock-table :init-current-block="currentBlock"></rs-tb-aside-cblock-table>
    <rs-tb-aside-cblock-button></rs-tb-aside-cblock-button>
  </div>
</template>
<script>
import RsTbAsideCblockTable from './RsTbAsideCblock/RsTbAsideCblockTable'
import RsTbAsideCblockButton from './RsTbAsideCblock/RsTbAsideCblockButton'

export default {
  components: {RsTbAsideCblockButton, RsTbAsideCblockTable},
  props: ['initCurrentBlock'],
  name: 'rs-tb-aside-cblock',
  created: function () {
    console.log('aside cblock')
    console.log(this.currentBlock)
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

<template>
  <div class="rs-tb-aside-cblock">
    <rs-tb-aside-cblock-table></rs-tb-aside-cblock-table>
    <rs-tb-aside-cblock-button></rs-tb-aside-cblock-button>
  </div>
</template>
<script>
import RsTbAsideCblockTable from './RsTbAsideCblock/RsTbAsideCblockTable'
import RsTbAsideCblockButton from './RsTbAsideCblock/RsTbAsideCblockButton'

export default {
  name: 'rs-tb-aside-cblock',
  components: {RsTbAsideCblockButton, RsTbAsideCblockTable},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
</style>

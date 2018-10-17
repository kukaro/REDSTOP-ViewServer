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
  name: 'rs-tb-aside-gblock',
  components: {RsTbAsideGblockTable},
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
</style>

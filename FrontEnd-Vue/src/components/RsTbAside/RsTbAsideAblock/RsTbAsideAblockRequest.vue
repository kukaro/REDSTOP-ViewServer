<template>
    <div class="rs-tb-aside-ablock-request">
      <rs-tb-aside-ablock-request-title></rs-tb-aside-ablock-request-title>
      <rs-tb-aside-ablock-request-tab></rs-tb-aside-ablock-request-tab>
      <rs-tb-aside-ablock-request-body-tab-table></rs-tb-aside-ablock-request-body-tab-table>
      <br><br>
    </div>
</template>

<script>
import RsTbAsideAblockRequestTitle from './RsTbAsideAblockRequest/RsTbAsideAblockRequestTitle'
import RsTbAsideAblockRequestTab from './RsTbAsideAblockRequest/RsTbAsideAblockRequestTab'
import RsTbAsideAblockRequestBodyTabTable from './RsTbAsideAblockRequest/RsTbAsideAblockRequestBodyTabTable'
export default {
  name: 'rs-tb-aside-ablock-request',
  components: {
    RsTbAsideAblockRequestBodyTabTable, RsTbAsideAblockRequestTab, RsTbAsideAblockRequestTitle}
}
</script>

<style scoped>
</style>

<template>
    <div class="rs-tb-aside-ablock-response">
      <rs-tb-aside-ablock-response-title :initResponseData="responseData"></rs-tb-aside-ablock-response-title>
      <rs-tb-aside-ablock-response-tab></rs-tb-aside-ablock-response-tab>
      <rs-tb-aside-ablock-response-body></rs-tb-aside-ablock-response-body>
    </div>
</template>

<script>
import RsTbAsideAblockResponseTitle from './RsTbAsideAblockResponse/RsTbAsideAblockResponseTitle'
import RsTbAsideAblockResponseTab from './RsTbAsideAblockResponse/RsTbAsideAblockResponseTab'
import RsTbAsideAblockResponseBody from './RsTbAsideAblockResponse/RsTbAsideAblockResponseBody'
export default {
  props: ['initApiTestResult'],
  name: 'rs-tb-aside-ablock-response',
  components: {
    RsTbAsideAblockResponseBody,
    RsTbAsideAblockResponseTab,
    RsTbAsideAblockResponseTitle
  },
  watch: {
    initApiTestResult: function () {
      this.apiTestResult = this.initApiTestResult
      var json = {'status': this.apiTestResult.status, 'time': this.apiTestResult.time, 'size': this.apiTestResult.size}
      this.responseData = json
    }
  },
  data: function () {
    return {
      responseData: {'status': 200, 'time': 4127, 'size': 529}
    }
  }
}
</script>

<style scoped>
</style>

<template>
    <div class="rs-tb-aside-ablock-response-body">
      <br>
        <rs-tb-aside-ablock-response-body-item v-for="(value, key) in responseBodyData" :key="key" :initKey="key" :initValue="value"></rs-tb-aside-ablock-response-body-item>
    </div>
</template>

<script>
import RsTbAsideAblockResponseBodyItem from './RsTbAsideAblockResponseBodyItem'
export default {
  props: ['initApiTestResult'],
  name: 'rs-tb-aside-ablock-response-body',
  components: {
    RsTbAsideAblockResponseBodyItem

  },
  created: function () {
    this.$http.get('http://localhost:3000/api/dbkk').then((response) => {
      this.responseBodyData = response.data
    })
  },
  watch: {
    initApiTestResult: function () {
      this.apiTestResult = this.initApiTestResult
      this.responseBodyData = this.apiTestResult.data
    }
  },
  data: function () {
    return {
      responseBodyData: { },
      apiTestResult: this.initApiTestResult
    }
  }
}
</script>

<style scoped>
.rs-tb-aside-ablock-response-body{
  padding: 20px;
  background-color: #F3F3F3;
  width: 100%;
}
</style>

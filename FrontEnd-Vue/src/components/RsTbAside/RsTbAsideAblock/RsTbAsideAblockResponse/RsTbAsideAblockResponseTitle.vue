<template>
    <div class="rs-tb-aside-ablock-response-title">
      <img class="response-icon" src="../../../../assets/img/bullet-title.png">
      Response
      &nbsp;&nbsp;<span class="gray-font">Status : <span class="sky-font">{{responseData.status}}</span> | </span>
      &nbsp;<span class="gray-font">Time : {{responseData.time}} ms | </span>
      &nbsp;<span class="gray-font">Size : {{responseData.size}} B</span>
    </div>
</template>

<script>
export default {
  props: ['initResponseData'],
  name: 'rs-tb-aside-ablock-response-title',
  watch: {
    initResponseData: function () {
      this.responseData = this.initResponseData
    }
  },
  data: function () {
    return {
      responseData: this.initResponseData
    }
  }
}
</script>

<style scoped>
.response-icon{
  padding-right: 10px;
}
.gray-font{
  font-size: 14px;
  color: #C3C3C3;
}
.sky-font{
  color: deepskyblue;
}
</style>

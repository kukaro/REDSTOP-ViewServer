<template>
  <div class="rs-mr-card-mini-response-time-heat-map">
    <rs-mr-card-mini-response-time-item v-for="(value,key) in responseTimeList" :key="key" :init-width="100 / (xLabel.length-1)" :init-height="7" :initResponseTime="value"/>
  </div>
</template>

<script>
import RsMrCardMiniResponseTimeItem from './RsMrCardMiniResponseTimeItem'
export default {
  components: {RsMrCardMiniResponseTimeItem},
  props: ['initResponseTimeList', 'initXLabel'],
  name: 'rs-mr-card-mini-response-time-heat-map',
  watch: {
    initResponseTimeList: function () {
      this.responseTimeList = this.initResponseTimeList
    }
  },
  created: function () {
    // console.log(this.initResponseTimeList)
  },
  mounted: function () {
    // console.log(this.initResponseTimeList)
  },
  data: function () {
    return {
      responseTimeList: this.initResponseTimeList,
      xLabel: this.initXLabel
    }
  }
}
</script>

<style scoped>
  .rs-mr-card-mini-response-time-heat-map{
    position: absolute;
    margin-left: 25px;
    width: calc(100% - 70px);
    height: calc(100% - 92px);
    /*background-color: green;*/
  }
</style>

<template>
  <div class="rs-mr-card-mini-availability-chart-body">
    <rs-mr-card-mini-availability-chart-body-item v-for="(value,key) in values" :key="key" :init-value="value" :init-width="100 / values.length" :init-index="key"/>
  </div>
</template>

<script>
import RsMrCardMiniAvailabilityChartBodyItem from './RsMrCardMiniAvailabilityChartBodyItem'
export default {
  components: {RsMrCardMiniAvailabilityChartBodyItem},
  props: ['initValues'],
  name: 'rs-mr-card-mini-availability-chart-body',
  data: function () {
    return {
      values: this.initValues
    }
  }
}
</script>

<style scoped>
.rs-mr-card-mini-availability-chart-body{
  position: absolute;
  /*background-color: red;*/
  width: calc(100% - 40px);
  height: calc(100% - 80px);
}
</style>

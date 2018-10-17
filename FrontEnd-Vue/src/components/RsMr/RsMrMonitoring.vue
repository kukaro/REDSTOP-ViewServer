<template>
  <div class="rs-mr=monitoring">
    <rs-calendar></rs-calendar>
    <ul>
      <li v-for="(value,key) in apiList" :key="key">
        <RsMonitoringItem :initApi="value"></RsMonitoringItem>
      </li>
    </ul>
  </div>
</template>

<script>
import RsHeaderProject from '../RsHeader/RsHeaderProject'
import RsCalendar from './RsMrMonitoring/RsMrMonitoringCalendar'
import RsMonitoringItem from './RsMrMonitoring/RsMrMonitoringItem'
export default {
  name: 'rs-mr-monitoring',
  components: {RsHeaderProject, RsCalendar, RsMonitoringItem},
  created () {
    this.$http.get('http://localhost:3000/api/apiList')
      .then((response) => {
        this.apiList = response.data
      })
  },
  data: function () {
    return {
      apiList: []
    }
  }
}
</script>

<style scoped>
  * {
    width: 100vw;
    margin-top: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  li {
    width: 60px;
    height: 60px;
    float: left;
  }
</style>

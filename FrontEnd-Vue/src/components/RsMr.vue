<template>
  <div class="rs-mr">
    <rs-header-project></rs-header-project>
    <!--<rs-mr-board></rs-mr-board>-->
    <router-view></router-view>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsMrBoard from './RsMr/RsMrBoard'
import RsMrMonitoring from './RsMr/RsMrMonitoring'
export default {
  props: ['sub'],
  name: 'rs-mr',
  created: function () {
    var url = document.location.href.split('/')
    if (url[url.length - 1] === 'monitoring' && url[url.length - 2] === '#') {
      document.location.href = 'http://localhost:8080/#/monitoring/monitoring'
    }
  },
  beforeUpdate: function () {
    var url = document.location.href.split('/')
    if (url[url.length - 1] === 'monitoring' && url[url.length - 2] === '#') {
      document.location.href = 'http://localhost:8080/#/monitoring/monitoring'
    }
  },
  components: {RsMrMonitoring, RsMrBoard, RsHeaderProject}
}
</script>

<style scoped>
</style>

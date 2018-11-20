<template>
  <div class="rs-report">
    <rs-header-project></rs-header-project>
    <rs-date-picker></rs-date-picker>
    <rs-report-aside></rs-report-aside>
  </div>
</template>

<script>
/* eslint-disable */
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsDatePicker from './RsReport/RsDatePicker'
import RsReportAside from './RsReport/RsReportAside'

export default {
  name: 'rs-report',
  components: { RsHeaderProject, RsDatePicker, RsReportAside, RsReportNav },
  methods: {
    click: function () {
      //
    }
  },
  created: function () {

  },
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>

</style>

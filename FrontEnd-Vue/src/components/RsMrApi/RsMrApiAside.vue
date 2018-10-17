<template>
  <div class="rs-mr-api-aside">
    <aside>
      <rs-mr-api-aside-summary></rs-mr-api-aside-summary>
      <rs-mr-api-aside-policy></rs-mr-api-aside-policy>
      <rs-mr-api-aside-heatmap></rs-mr-api-aside-heatmap><br><br><br><br><br><br><br>
      <rs-mr-api-aside-table></rs-mr-api-aside-table>
    </aside>
  </div>
</template>

<script>
import RsMrApiAsideSummary from './RsMrApiAside/RsMrApiAsideSummary'
import RsMrApiAsidePolicy from './RsMrApiAside/RsMrApiAsidePolicy'
import RsMrApiAsideHeatmap from './RsMrApiAside/RsMrApiAsideHeatmap'
import RsMrApiAsideTable from './RsMrApiAside/RsMrApiAsideTable'

export default {
  name: 'rs-mr-api-aside',
  components: { RsMrApiAsideSummary, RsMrApiAsidePolicy, RsMrApiAsideHeatmap, RsMrApiAsideTable }
}
</script>

<style>
aside {
  position: absolute;
  top: 70px;
  left: 50%;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
  /*z-index: 0;*/
}

</style>

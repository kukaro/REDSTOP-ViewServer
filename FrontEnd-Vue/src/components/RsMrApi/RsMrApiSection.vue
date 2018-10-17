<template>
  <div class="rs-mr-api-section">
    <section>
      <rs-mr-api-section-title></rs-mr-api-section-title>
      <rs-mr-api-section-title2></rs-mr-api-section-title2>
      <rs-mr-api-section-content></rs-mr-api-section-content>
      <rs-mr-api-section-selector></rs-mr-api-section-selector>
    </section>
  </div>
</template>

<script>
import RsMrApiSectionTitle from './RsMrApiSection/RsMrApiSectionTitle'
import RsMrApiSectionTitle2 from './RsMrApiSection/RsMrApiSectionTitle2'
import RsMrApiSectionContent from './RsMrApiSection/RsMrApiSectionContent'
import RsMrApiSectionSelector from './RsMrApiSection/RsMrApiSectionSelector'

export default {
  name: 'rs-mr-api-section',
  components: { RsMrApiSectionTitle, RsMrApiSectionContent, RsMrApiSectionSelector, RsMrApiSectionTitle2 }
}
</script>

<style>
section {
  position: absolute;
  top: 70px;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #f2f7fb;
  /*border-right: 1px solid #F2F7FB;*/
}
</style>

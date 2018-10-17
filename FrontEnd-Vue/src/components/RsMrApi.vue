<template>
  <div class="rs-mr-api">
    <rs-header-project></rs-header-project>
    <rs-mr-api-section></rs-mr-api-section>
    <rs-mr-api-aside></rs-mr-api-aside>
    <router-view></router-view>
  </div>
</template>

<script>
import RsHeaderProject from './RsHeader/RsHeaderProject'
import RsMrApiSection from './RsMrApi/RsMrApiSection'
import RsMrApiAside from './RsMrApi/RsMrApiAside'

export default {
  name: 'rs-mr-api',
  created: function () {
  },
  updated: function () {

  },
  components: { RsHeaderProject, RsMrApiSection, RsMrApiAside },
  data: function () {
    return {
      // type이라는 변수
    }
  }
}
</script>

<style scoped>
</style>

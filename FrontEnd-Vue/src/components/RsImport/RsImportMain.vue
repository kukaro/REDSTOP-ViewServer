<template>
  <div class="rs-import-main">
    <rs-header-project></rs-header-project>
    <rs-tb-nav></rs-tb-nav>
    <router-view></router-view>
  </div>

</template>

<script>
import RsHeaderProject from '../RsHeader/RsHeaderProject'
import RsTbNav from '../RsTbNav.vue'

export default {
  name: 'rs-import-main',
  components: {RsHeaderProject, RsTbNav}
}
</script>

<style scoped>
*{
  background-color: #00B7FF;
}

</style>

<template>
  <div class="rs-tb">
    <rs-header-project></rs-header-project>
    <rs-tb-nav></rs-tb-nav>
    <rs-tb-article></rs-tb-article>
    <router-view></router-view>
  </div>
</template>

<script>
import RsTbNav from './RsTbNav'
import RsTbAside from './RsTbAside'
import RsTbArticle from './RsTbArticle'
import RsHeaderProject from './RsHeader/RsHeaderProject'
export default {
  name: 'rs-tb',
  components: {RsHeaderProject, RsTbArticle, RsTbAside, RsTbNav}
}
</script>

<style scoped>
</style>

<template>
  <div class="rs-tb-aside-contents">
    <div v-if="titleName[0]=='g'">
      <rs-tb-aside-gblock></rs-tb-aside-gblock>
    </div>
    <div v-else-if="titleName[0]=='c'">
      <rs-tb-aside-cblock></rs-tb-aside-cblock>
    </div>
    <div v-else-if="titleName[0]=='a'">
      <rs-tb-aside-ablock :init-title-name="titleName"></rs-tb-aside-ablock>
    </div>

  </div>
</template>
<script>
import RsTbAsideAblock from './RsTbAsideAblock'
import RsTbAsideCblock from './RsTbAsideCblock'
import RsTbAsideGblock from './RsTbAsideGblock'

export default {
  props: ['initTitleName', 'initApiTestResult'],
  name: 'rs-tb-aside-contents',
  components: {RsTbAsideAblock, RsTbAsideCblock, RsTbAsideGblock},
  watch: {
    initTitleName: function () {
      var temp = this.initTitleName.split('-')
      this.titleName = temp[temp.length - 1]
      console.log('바뀌었슴돠')
    }
  },
  data: function () {
    return {
      titleName: this.initTitleName
    }
  }
}
</script>

<style scoped>
</style>

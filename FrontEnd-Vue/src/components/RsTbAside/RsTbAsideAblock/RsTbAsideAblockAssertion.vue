<template>
    <div class="rs-tb-aside-ablock-assertion">
      <rs-tb-aside-ablock-assertion-title></rs-tb-aside-ablock-assertion-title>
      <rs-tb-aside-ablock-assertion-add></rs-tb-aside-ablock-assertion-add>
      <br><br>
    </div>
</template>

<script>
import RsTbAsideAblockAssertionTitle from './RsTbAsideAblockAssertion/RsTbAsideAblockAssertionTitle'
import RsTbAsideAblockAssertionAdd from './RsTbAsideAblockAssertion/RsTbAsdieAblockAssertionAdd'
export default {
  name: 'rs-tb-aside-ablock-assertion',
  components: {RsTbAsideAblockAssertionAdd, RsTbAsideAblockAssertionTitle}
}
</script>

<style scoped>
  #set-assert{
    padding-top: 30px;
  }
</style>

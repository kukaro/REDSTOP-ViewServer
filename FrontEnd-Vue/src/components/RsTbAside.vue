<template>
  <div class="rs-tb-aside">
    <aside>
      <rs-tb-aside-title :initTitleName="url"></rs-tb-aside-title>
      <rs-tb-aside-contents :initTitleName="url"></rs-tb-aside-contents>
    </aside>
  </div>
</template>

<script>
/* eslint-disable */
import RsTbAsideTitle from './RsTbAside/RsTbAsideTitle'
import RsTbAsideContents from "./RsTbAside/RsTbAsideContents"

export default {
  props: ['url'],
  name: 'rs-tb-aside',
  created: function () {
    console.log('debug 임돠')
    console.log(this.url)
  },
  updated: function () {
  },
  components: {
    RsTbAsideContents, RsTbAsideTitle
  },
  data: function () {
    return {
    }
  },
  methods: {
    // onClickChild (value) {
    //   this.apiTestResult = value
    // }
  }
}
</script>

<style scoped>
  aside {
    background-color: white;
    position: absolute;
    padding-top: 60px;
    margin-left: 60%;
    padding-left: 30px;
    padding-right: 30px;
    width: 40%;
    height: 100%;
    margin-right: 40px;
    float: right;
    z-index: 10;
    overflow: scroll;
  }
</style>

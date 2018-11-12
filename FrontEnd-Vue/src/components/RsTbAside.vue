<template>
  <div class="rs-tb-aside">
    <aside>
      <rs-tb-aside-title :initBlockId="this.$store.state.app.currentBlockId"></rs-tb-aside-title>
      <!--<rs-tb-aside-contents :initTitleName="url"></rs-tb-aside-contents>-->
    </aside>
  </div>
</template>

<script>
/* eslint-disable */
import RsTbAsideTitle from './RsTbAside/RsTbAsideTitle'
import RsTbAsideContents from "./RsTbAside/RsTbAsideContents"

export default {
  // props: ['url'],
  name: 'rs-tb-aside',
  created: function () {
    console.log('debug 임돠')
    // console.log(this.url)
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
  },
  computed: {
    asideStyle () {
      return {
        width: screen.width * 0.4 + 'px',
        left: screen.width * 0.5 + 'px'
      }
    }
  }
}
</script>

<style scoped>
  aside {
    background-color: white;
    position: absolute;
    padding-top: 60px;
    margin-left: 10%;
    padding-left: 30px;
    padding-right: 30px;
    width: 40%;
    height: 100%;
    margin-right: 40px;
    float: right;
    z-index: 1;
    overflow: scroll;
  }
</style>

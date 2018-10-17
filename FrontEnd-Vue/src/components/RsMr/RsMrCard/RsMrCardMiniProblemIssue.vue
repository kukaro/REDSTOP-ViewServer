<template>
  <div id="test" class="rs-mr-card-mini-problem-issue rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="'Problem Issue'" :init-color="'#000000'" :init-size="15"/></b><img class="rs-re" src="../../../assets/img/re-icon.png"><rs-util-text class="rs-right" :init-value="'2018.07.19 03:14:29'" :init-size="16" :init-color="'#989898'"/> <br>
      <rs-mr-card-mini-problem-issue-body/>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'
import RsMrCardMiniProblemIssueBody from './RsMrCardMiniProblemIssue/RsMrCardMiniProblemIssueBody'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initApiCnt'],
  name: 'rs-mr-card-mini-problem-issue',
  created: function () {
  },
  mounted: function () {
  },
  components: {RsMrCardMiniProblemIssueBody, RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ffffff'
    }
  }
}
</script>

<style scoped>
.rs-mr-card {
  z-index: 4;
  position: absolute;
  padding: 10px;
}
.inner{
  padding: 13px;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px 0 #a6b7cd;
  border-radius: 8px;
}
.rs-re {
  margin-left: 10px;
  width: 17px;
  height: 17px;
  float: right;
}
.rs-right{
  float: right;
}
</style>

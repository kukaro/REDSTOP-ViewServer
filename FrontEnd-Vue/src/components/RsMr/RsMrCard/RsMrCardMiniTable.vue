<template>
  <div class="rs-mr-card-mini-table rs-mr-card" :style="{'margin': '20px', 'width': width, 'height': height+'px', 'left': left, 'top': top + 'px'}">
    <div class="inner" :style="{'background-color': backgroundColor}">
      <b><rs-util-text :init-value="title" :init-size="15"/></b><span class="more">MORE ></span><br><br>
      <table>
        <rs-mr-card-mini-table-header :initTableHeaderList="Object.keys(tableValue[0])"/>
        <rs-mr-card-mini-table-body  :initTableValue="tableValue" :init-dangerous="dangerous"/>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import RsUtilText from '../../RsUtil/RsUtilText'
import RsMrCardMiniTableHeader from './RsMrCardMiniTable/RsMrCardMiniTableHeader'
import RsMrCardMiniTableBody from './RsMrCardMiniTable/RsMrCardMiniTableBody'

export default {
  props: ['initWidth', 'initHeight', 'initXPos', 'initYPos', 'initBackgroundColor', 'initTitle', 'initDangerous', 'initTableValue'],
  name: 'rs-mr-card-mini-table',
  created: function () {
    // TODO
  },
  mounted: function () {
  },
  watch: {
    initTableValue : function() {
      this.tableValue = this.initTableValue
    }
  },
  components: {RsMrCardMiniTableBody, RsMrCardMiniTableHeader, RsUtilText},
  data: function () {
    return {
      width: 100 / 6 * (this.initWidth ? this.initWidth : 1) + '%',
      height: 130 * (this.initHeight ? this.initHeight : 1),
      left: 100 / 6 * (this.initXPos - 1) + '%',
      top: 130 * (this.initYPos - 1) + 70,
      backgroundColor: this.initBackgroundColor ? this.initBackgroundColor : '#ffffff',
      title: this.initTitle,
      dangerous: this.initDangerous,
      tableValue: this.initTableValue
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
  overflow: scroll;
}
.more {
  width: 60px;
  height: 6px;
  float: right;
  font-size: 12px;
  color: #989898;
}
table{
  width: 100%;
}
</style>

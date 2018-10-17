<template>
  <div class="rs-tb-aside-ablock-request-tab-item">
    <b><a href="#/test-block/test" :class="{'active':isOver | isClick}" @mouseover="mouseOver" @mouseleave="mouseLeave">{{headerName}}</a></b>&nbsp;&nbsp;&nbsp;
  </div>
</template>

<script>
export default {
  props: ['name', 'initIsClick'],
  name: 'rs-tb-aside-ablock-request-tab-item',
  created: function () {

  },
  watch: {
    initIsClick: function () {
      this.isClick = this.initIsClick
    }
  },
  data: function () {
    return {
      headerName: this.name,
      isOver: false,
      isClick: this.initIsClick
    }
  },
  methods: {
    mouseOver: function (e) {
      this.isOver = true
    },
    mouseLeave: function (e) {
      this.isOver = false
    }
  }
}
</script>

<style scoped>
  @import '../../../../assets/css/RsTbAside/RsTbAsideAblockRequest/RsTbAsideAblockRequestTabItem.css'
</style>

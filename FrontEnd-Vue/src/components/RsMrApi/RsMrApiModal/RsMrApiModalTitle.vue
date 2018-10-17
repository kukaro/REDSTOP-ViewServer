<template>
  <div class="rs-mr-api-modal-title">
    <span class="rs-board-body-modal-title">BoardList</span><br>
    <span class="rs-board-body-modal-method">GET</span>
    <span class="rs-board-body-modal-url">https://redstop.com/board/list</span><br><br>
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-modal-title',
  created: function () {
    // alert(this.initIsModal)
  },
  data: function () {
    return {

    }
  }
}
</script>

<style scoped>
.rs-mr-api-modal-title{
  padding-top: 10px;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 0;
  line-height: 1.5;
}
.rs-board-body-modal-title {
  font-size: 20px;
}
.rs-board-body-modal-url {
  font-size: 13px;
}
.rs-board-body-modal-method{
  font-size: 13px;
  color: #84c7c1;
}
</style>

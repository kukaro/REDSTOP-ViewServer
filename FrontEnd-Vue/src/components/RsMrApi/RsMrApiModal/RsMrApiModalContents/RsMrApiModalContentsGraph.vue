<template>
  <div class="rs-mr-api-modal-contents-graph">
    <p id="title">지연 시간 변화 추이</p>
    <img id="map" src="../../../../assets/img/graph.png" width="700px" height="100px">
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-modal-contents-graph',
  watch: {
  },
  components: { },
  created: function () {
    // alert(this.initIsModal)
  },
  data: function () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-modal-contents-graph{
  background-color: #ffffff;
  width: 100%;
  height: 32%;
  float: left;
  line-height: 1.00;
}
#title{
  padding-top: 5px;
  padding-left: 20px;
  width: auto;
  height: 22px;
  font-family: NotoSansCJKkr;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
}
img{
  padding-left: 20px;
}
</style>

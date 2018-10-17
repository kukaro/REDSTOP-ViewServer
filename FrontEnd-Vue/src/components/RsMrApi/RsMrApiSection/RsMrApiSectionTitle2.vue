<template>
  <div class="rs-mr-api-section-title2">
    <div style="width: 5%; float: left" >
      <p id="method">GET</p>
    </div>
    <div style="float: left; left: 10%" >
      <p id="url">https://redstop.com/board/list</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'rs-mr-api-section-title2',
  components: { },
  created: function () {
  },
  data: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-section-title2{
  left: 0;
  width: 100%;
  height: 5%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
  box-sizing: unset;
}
#method{
  width: 23px;
  height: 13px;
  font-family: TitilliumWeb;
  font-size: 13px;
  line-height: 1;
  color: #0a8ba9;
}
#url{
  width: 194px;
  height: 13px;
  font-family: TitilliumWeb;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #000000;
}
</style>

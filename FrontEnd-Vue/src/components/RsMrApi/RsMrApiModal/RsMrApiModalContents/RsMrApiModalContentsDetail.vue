<template>
  <div class="rs-mr-api-modal-contents-detail">
    <div class="first" style="width: 50%;float: left">
      <span>Status</span><br>
      <span>Response Time</span><br>
      <span>ISP</span><br>
      <span>Platform</span><br>
      <span>Region</span><br>
      <span>Request</span><br>
      <span>User-Agent</span><br>
      <span>Host</span><br>
      <span>Received Header</span><br>
    </div>
    <div class="second" style="width: 50%;float: right">
      <span style="color: #d0021b">HTTPS Error 500</span><br>
      <span style="color: #d0021b">1034ms</span><br>
      <span>KT</span><br>
      <span>Android</span><br>
      <span>대한민국 경상북도</span><br>
      <span>GET / HTTP / 1.0</span><br>
      <span>http://redstop.com</span><br>
      <span>www.yourservice.com</span><br>
      <span style="color: #d0021b">500 Internal Server Error</span><br>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rs-mr-api-modal-contents-datail',
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
.rs-mr-api-modal-contents-detail{
  width: 50%;
  height: 70%;
  float: right;
  line-height: 1.00;
  margin-right: 10px;
  padding-left: 20px;
}
.row{

}
.first{
  width: 123px;
  height: 405px;
  font-size: 13px;
  font-weight: bold;
  line-height: 2.85;
  color: #323c47;
  /*margin-right: 10px;*/
}
.second{
  font-family: NotoSansCJKkr;
  font-size: 13px;
  line-height: 2.85;
  color: #000000;
}
</style>

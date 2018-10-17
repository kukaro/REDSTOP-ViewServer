<template>
  <div class="rs-mr-api-modal-contents-map">
    <img id="map" src="../../../../assets/img/kbmap.png" width="280px" height="250px">
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-modal-contents-map',
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
.rs-mr-api-modal-contents-map{
  margin-left: 10px;
  width: 45%;
  height: 70%;
  float: left;
  line-height: 1.00;
}
img{
  padding-top: 30px;
  padding-left: 40px;
}
</style>

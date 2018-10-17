<template>
  <div class="rs-mr-card-mini-availability-chart-body-item" :style="{'width': 'calc('+ width +'% - 1px', 'left': width * index + '%'}">
    <div class="upper" :style="{'height': (100 - value) + '%'}">

    </div>
    <div class="lower" :style="{'top': (100 - value) + '%','height': value + '%'}">

    </div>
  </div>
</template>

<script>
export default {
  props: ['initValue', 'initWidth', 'initIndex'],
  name: 'rs-mr-card-mini-availability-chart-body-item',
  created: function () {
  },
  data: function () {
    return {
      value: this.initValue,
      width: this.initWidth,
      index: this.initIndex
    }
  }
}
</script>

<style scoped>
.rs-mr-card-mini-availability-chart-body-item{
  position: absolute;
  height: 100%;
  background-color: black;
}
.upper{
  position: absolute;
  background-color: #ff7575;
  width: 100%;

}
.lower{
  position: absolute;
  background-color: #4f73ef;
  width: 100%;
}
</style>

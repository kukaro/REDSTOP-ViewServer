<template>
  <div id="test" class="rs-mr-card-mini-response-time-item" :style="{'width': width+'%', 'height': height+'px', 'left': width * (time - 1) + '%', 'bottom': 'calc(' + responseTime * 10 + '%)', 'background-color': color}">

  </div>
</template>

<script>
export default {
  props: ['initWidth', 'initHeight', 'initResponseTime', 'initColor'],
  name: 'rs-mr-card-mini-response-time-item',
  created: function () {
    if (this.status === 'b') {
      this.color = '#4f73ef'
    } else if (this.status === 'w') {
      this.color = '#f49360'
    } else if (this.status === 'd') {
      this.color = '#ff0000'
    }
  },
  data: function () {
    return {
      width: this.initWidth,
      height: this.initHeight,
      responseTime: this.initResponseTime.responseTime,
      time: this.initResponseTime.time,
      status: this.initResponseTime.status,
      color: this.initColor ? this.initColor : '#000000'
    }
  }
}
</script>

<style scoped>
div{
  position: absolute;
  border: 1px solid white;
}
</style>

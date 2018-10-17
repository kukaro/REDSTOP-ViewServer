<template>
  <div class="rs-mr-card-mini-response-time-y-label-item outer" :style="{'font-size': size + 'px'}">
    <div class="inner">
        {{value}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['initValue', 'initSize'],
  name: 'rs-mr-card-mini-response-time-y-label-item',
  data: function () {
    return {
      value: this.initValue,
      size: this.initSize
    }
  }
}
</script>

<style scoped>
.outer{
  display: table;
  height: 100%;
  width: 100%;
}
.inner{
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-align: right;
}
</style>

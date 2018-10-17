<template>
  <div class="rs-mr-card-mini-response-time-x-label-item" :style="{'font-size': size+'px'}">
    {{value}}
  </div>
</template>

<script>
export default {
  props: ['initValue', 'initSize'],
  created: function () {
  },
  name: 'rs-mr-card-mini-response-time-x-label-item',
  data: function () {
    return {
      value: this.initValue,
      size: this.initSize
    }
  }
}
</script>

<style scoped>
div{
  text-align: center;
  height: 100%;
}
</style>

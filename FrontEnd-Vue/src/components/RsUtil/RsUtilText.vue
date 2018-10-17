<template>
  <span class="rs-util-text" :style="{'color':color, 'font-size':size+'px'}" >
    {{value}}
  </span>
</template>

<script>
export default {
  props: ['initValue', 'initColor', 'initSize'],
  name: 'rs-util-text',
  watch: {
    initValue: function () {
      this.value = this.initValue
    },
    initColor: function () {
      this.color = this.initColor
    },
    initSize: function () {
      this.size = this.initSize
    }
  },
  data: function () {
    return {
      value: this.initValue,
      color: this.initColor ? this.initColor : '#000000',
      size: this.initSize ? this.initSize : 14
    }
  }
}
</script>

<style scoped>
.rs-util-text {

}
</style>

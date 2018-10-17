<template>
  <li class="rs-tb-nav-header-item" :class="{'active':isOver | isClick}" @mouseover="mouseOver" @mouseleave="mouseLeave">
    <a href="#" :class="{'active-color':isOver | isClick}"><b>{{name}}</b></a>
  </li>
</template>

<script>
export default {
  props: ['initName', 'initIsClick'],
  name: 'rs-tb-nav-header-item',
  watch: {
    initIsClick: function () {
      this.isClick = this.initIsClick
    }
  },
  data: function () {
    return {
      name: this.initName,
      isOver: false,
      isClick: this.initIsClick
    }
  },
  methods: {
    mouseOver: function (e) {
      this.isOver = true
    },
    mouseLeave: function (e) {
      this.isOver = false
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    float: left;
    width: 50%;
    height: 60px;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    cursor: pointer;
  }
  a{
    color: #8B95AC;
    text-decoration: none;
  }
  .active-color{
    color: #000000;
  }
  .active{
    border-bottom:3px solid red;
  }
</style>

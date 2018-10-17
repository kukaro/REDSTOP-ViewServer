<template>
  <div class="rs-header-project-body-item">
    <a :href="'#/'+itemKebabName" :class="{'active':isOver | isClick}" @mouseover="mouseOver" @mouseleave="mouseLeave">{{itemName}}
      <div id="submenu" v-show="false">
        <ul>
          <li><a href="#/monitoring/board">Board</a></li>
          <li><a href="#/monitoring/monitoring">Monitoring</a></li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
/* eslint-disable no-new,no-undef */

import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initItemName', 'initIsClick'],
  name: 'rs-header-project-body-item',
  watch: {
    initIsClick: function () {
      this.isClick = this.initIsClick
    }
  },
  created: function () {
    this.itemKebabName = casing.getConverter('kebab-case')(this.itemKebabName)
  },
  data: function () {
    return {
      itemName: this.initItemName,
      itemKebabName: this.initItemName,
      isOver: false,
      isClick: this.initIsClick
    }
  },
  methods: {
    mouseOver: function (e) {
      this.isOver = true
      if (this.itemName === 'Monitoring') {
        $('#submenu').show()
      }
    },
    mouseLeave: function (e) {
      this.isOver = false
      $('#submenu').mouseleave(function () {
        if (!$('#submenu').hasClass('active')) {
          $('#submenu').hide()
        }
      })
    }
  }
}
</script>

<style scoped>

a {
  float: left;
  width: 140px;
  font-size: 18px;
  text-align: center;
  line-height: 70px;
  color: #8B95AC;
  text-decoration: none;
}

.active {
  color: white;
}

#submenu {
  z-index: 9999999999999999;
  position: absolute;
  width: 160px;
  height: 120px;
  top: 70px;
  left: calc(35.7% - 130px);
  background-color: #8b8b8b;
}

li > a {
  z-index: 9999999999999999;
  display: block;
  line-height: 60px;
  width: 160px;
  height: 60px;
  color: #fff;
  text-align: center;
}

li>a:hover {
  color: #C2C2C2;
  background-color: #686868;
}
</style>

<template>
  <div class="rs-tb-nav-header">
    <ul>
      <li v-for="(value,key) in navHeaderList" :key="key" @click="mouseClick(key)">
        <rs-tb-nav-header-item :initName="value" :initIsClick="clickNumber==key"></rs-tb-nav-header-item>
      </li>
    </ul>
    <br>
  </div>
</template>

<script>
import RsTbNavHeaderItem from './RsTbNavHeaderItem'
export default {
  props: ['initNavHeaderList'],
  name: 'rs-tb-nav-header',
  components: {RsTbNavHeaderItem},
  created: function () {
  },
  data: function () {
    return {
      navHeaderList: this.initNavHeaderList,
      clickNumber: 0
    }
  },
  methods: {
    mouseClick: function (key) {
      this.clickNumber = key
      // console.log(this.clickNumber)
    }
  }
}
</script>

<style scoped>

</style>

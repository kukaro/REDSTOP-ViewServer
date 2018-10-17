<template>
  <div class="rs-header-project-body">
    <div class="menuDiv">
      <ul>
        <li v-for="(value, key) in itemList" :key="key" @click="mouseClick(key)">
          <rs-header-project-body-item :initItemName="value" :initIsClick="clickNumber==key"></rs-header-project-body-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RsHeaderProjectBodyItem from './RsHeaderProjectBodyItem'
export default {
  name: 'rs-header-poject-body',
  components: {RsHeaderProjectBodyItem},
  created: function () {
    this.$http.get('http://localhost:3000/api/header').then((response) => {
      this.itemList = response.data
    })
  },
  data: function () {
    return {
      clickNumber: 0,
      itemList: []
    }
  },
  methods: {
    mouseClick: function (key) {
      console.log(key)
      this.clickNumber = key
    },
    mouseOver: function (value) {
      console.log('flag ' + value)
    }
  }
}
</script>

<style>
  .menuDiv {
    position: absolute;
    left: 20%;
    width: 80%;
    height: 70px;
    background-color: #536285;
  }
</style>

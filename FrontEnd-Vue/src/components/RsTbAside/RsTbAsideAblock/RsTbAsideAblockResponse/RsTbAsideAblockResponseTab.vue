<template>
    <div class="rs-tb-aside-ablock-request-tab">
      <ul>
        <li v-for="(value, key) in headerNames" :key="key" @click="mouseClick(key)">
          <rs-tb-aside-ablock-response-tab-item :name="value" :initIsClick="clickNumber==key"/>
        </li>
      </ul>
      <br><br>
    </div>
</template>

<script>
import RsTbAsideAblockResponseTabItem from './RsTbAsideAblockResponseTabItem'
export default {
  name: 'rs-tb-aside-ablock-response-tab',
  components: {RsTbAsideAblockResponseTabItem},
  created: function () {

  },
  data: function () {
    return {
      clickNumber: 0,
      headerNames: ['Body', 'Headers', 'Cookies']
    }
  },
  methods: {
    mouseClick: function (key) {
      this.clickNumber = key
    }
  }
}
</script>

<style scoped>
li {
  float: left;
}
</style>

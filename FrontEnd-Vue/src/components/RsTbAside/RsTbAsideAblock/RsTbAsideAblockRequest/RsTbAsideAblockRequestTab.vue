<template>
    <div class="rs-tb-aside-ablock-request-tab">
      <ul>
        <li v-for="(value, key) in headerNames" :key="key" @click="mouseClick(key)">
          <rs-tb-aside-ablock-request-tab-item :name="value" :initIsClick="clickNumber==key"/>
        </li>
      </ul>
    </div>
</template>

<script>
import RsTbAsideAblockRequestTabItem from './RsTbAsideAblockRequestTabItem'
export default {
  name: 'rs-tb-aside-ablock-request-tab',
  components: {RsTbAsideAblockRequestTabItem},
  created: function () {

  },
  data: function () {
    return {
      clickNumber: 0,
      headerNames: ['Body', 'Headers', 'Auth']
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
@import '../../../../assets/css/RsTbAside/RsTbAsideAblockRequest/RsTbAsideAblockRequestTab.css'
</style>

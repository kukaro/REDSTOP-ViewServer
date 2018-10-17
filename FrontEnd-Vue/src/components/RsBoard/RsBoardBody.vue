<template>
  <div class="rs-board-body">
    <span class="board-title">Projects</span>
      <div class="board-btn-div"><rs-board-body-create-button/></div>
    <br><br>
    <ul>
      <li v-for="(value,key) in projectList" :key="key">
        <rs-board-body-item :initProject="value"></rs-board-body-item>
      </li>
    </ul>
  </div>
</template>

<script>
import RsBoardBodyItem from './RsBoardBodyItem'
import RsBoardBodyCreateButton from './RsBoardBodyCreateButton'
export default {
  name: 'rs-board-body',
  components: {RsBoardBodyCreateButton, RsBoardBodyItem},
  data: function () {
    return {
      projectList: [{'title': 'SK Tech X', 'cntTest': 25, 'success': 72, 'fail': 28, 'type': 'baseline'},
        {'title': 'NAVER Corp', 'cntTest': 83, 'success': 85, 'fail': 15, 'type': 'peak'},
        {'title': 'Coupang Payment', 'cntTest': 74, 'success': 70, 'fail': 30, 'type': 'stress'},
        {'title': 'Onycom', 'cntTest': 56, 'success': 50, 'fail': 50, 'type': 'spike'},
        {'title': 'SK Telecom', 'cntTest': 98, 'success': 87, 'fail': 13, 'type': 'baseline'},
        {'title': 'Netbarble', 'cntTest': 125, 'success': 34, 'fail': 66, 'type': 'spike'},
        {'title': 'Nexon Maplestory', 'cntTest': 111, 'success': 98, 'fail': 2, 'type': 'stress'},
        {'title': 'Red Stop', 'cntTest': 55, 'success': 76, 'fail': 24, 'type': 'peak'}]
    }
  }
}
</script>

<style scoped>
.rs-board-body {
  width: 100%;
  height: 100%;
}
li{
  float: left;
}
.board-title {
  float: left;
  font-size: 30px;
}
.board-btn-div {
  float: right;
  width: 90%;
}
</style>

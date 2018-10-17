<template>
  <div class="rs-board">
    <rs-header-board></rs-header-board>
    <rs-board-body></rs-board-body>
  </div>
</template>

<script>
import RsBoardBody from './RsBoard/RsBoardBody'
import RsHeader from './RsHeader'
import RsHeaderBoard from './RsHeader/RsHeaderBoard'
export default {
  name: 'rs-board',
  components: {RsHeaderBoard, RsHeader, RsBoardBody}
}
</script>

<style scoped>
.rs-board-body {
  height: 100%;
  padding: 50px;
  overflow: scroll;

}

</style>

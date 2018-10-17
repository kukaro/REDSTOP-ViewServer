<template>
  <div class="rs-header-board">
    <header>
      <div class="logo-div">
        <a href="#/"><img src="../../assets/img/rs-full-logo.png" alt="logo"></a>
      </div>
      <rs-header-board-body></rs-header-board-body>
      <rs-header-board-setting></rs-header-board-setting>
    </header>
  </div>
</template>

<script>
import RsHeaderBoardBody from './RsHeaderBoard/RsHeaderBoardBody'
import RsHeaderBoardSetting from './RsHeaderBoard/RsHeaderBoardSetting'
export default {
  name: 'rs-header-board',
  components: {RsHeaderBoardSetting, RsHeaderBoardBody}
}
</script>

<style>
  @import '../../assets/css/rs-header.css';
  header {
    position: relative;
    height: 60px;
    z-index: 2;
  }
</style>

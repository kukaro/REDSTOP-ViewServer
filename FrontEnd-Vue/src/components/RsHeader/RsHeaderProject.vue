<template>
  <div class="rs-header-project">
    <header>
      <div class="logo-div">
        <a href="#/"><img src="../../assets/img/rs-full-logo.png" alt="logo"></a>
      </div>
      <rs-header-project-body></rs-header-project-body>
    </header>
  </div>
</template>

<script>
import RsHeaderProjectBody from './RsHeaderProject/RsHeaderProjectBody'
export default {
  name: 'rs-header-project',
  components: {RsHeaderProjectBody}
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

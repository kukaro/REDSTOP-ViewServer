<template>
  <div class="rs-scenario-section-title">
    <p id="title">{{ $props.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-section-title',
  components: { },
  props: ['name']
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

.rs-scenario-section-title{
  position: relative;
  width: 100%;
  height: 8%;
  z-index: 0;
}
#title{
  padding-top: 20px;
  padding-left: 20px;
  width: 129px;
  height: 31px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}

</style>

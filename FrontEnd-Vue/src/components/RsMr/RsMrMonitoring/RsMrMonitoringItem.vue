<template>
  <div class="rs-monitoring-item" @click="mouseClick(project)">
    <img v-if="state==='default'" src="../../../assets/img/monitoring-block_default.png">

    <img v-if="state==='warning'" src="../../../assets/img/monitoring-warning.png">

    <img v-if="state==='dangerous'" src="../../../assets/img/monitoring-dangerous.png">
  </div>
</template>

<script>
export default {
  props: ['initApi'],
  name: 'rs-monitoring-item',
  data: function () {
    return {
      project: this.initApi,
      title: this.initApi['title'],
      state: this.initApi['state'],
      stateFigure: this.initApi['stateFigure']
    }
  },
  methods: {
    mouseClick: function (project) {
      this.$router.push('/monitoring/' + this.initApi['title'])
    }
  }
}
</script>

<style scoped>
  .rs-monitoring-item {
    width: 60px;
    height: 60px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  img:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.07);
    -moz-transform: scale(1.07);
    -ms-transform: scale(1.07);
    -o-transform: scale(1.07);
    box-shadow: 0 0 20px -5px rgba(0, 0, 0, 0.8);
  }
</style>

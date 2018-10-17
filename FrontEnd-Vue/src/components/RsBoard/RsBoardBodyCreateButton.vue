<template>
  <div class="rs-board-body-create-button">
    <img class="btn-project-create" src="../../assets/img/btn-project-create.png" @click="mouseClick">
    <rs-board-body-modal-create-button :initIsModal="isModal"/>
  </div>
</template>

<script>
import RsBoardBodyModalCreateButton from './RsBoardBodyModalCreateButton'
export default {
  name: 'rs-board-body-create-button',
  components: {RsBoardBodyModalCreateButton},
  methods: {
    mouseClick: function () {
      this.isModal = !this.isModal
    }
  },
  data: function () {
    return {
      isModal: false
    }
  }
}
</script>

<style scoped>
  .btn-project-create {
    float: right;
    width: 40px;
    height: 40px;
  }
</style>

<template>
  <div class="rs-board-body-modal-create-button">
    <div :class="[{'rs-modal':isModal}]" :style="{display:isModal?'block':'none'}">
      <div class="rs-modal-content">
        <span class="rs-board-body-modal-title">Create Project</span><br>
        <span class="rs-board-body-modal-main">Please tell me your project name</span><br><br>
        <input class="rs-input-project-name" type="text" placeholder="Project name"><br><br>
        <div style="text-align: center">
          <input class="rs-btn-submit" type="button" value="SUBMIT">
          <input class="rs-btn-cancle" type="button" value="CANCLE">
        </div>
      </div>
      <img class="rs-board-body-modal-close" src="../../assets/img/create-proejct-close.png" @click="mouseClick">
    </div>
  </div>
</template>

<script>
export default {
  props: ['initIsModal'],
  name: 'rs-board-body-modal-create-button',
  watch: {
    initIsModal: function () {
      this.isModal = this.initIsModal
    }
  },
  created: function () {
    // alert(this.initIsModal)
  },
  data: function () {
    return {
      isModal: this.initIsModal
    }
  },
  methods: {
    mouseClick: function () {
      this.isModal = !this.isModal
    }
  }
}
</script>

<style scoped>
.rs-modal {
  position: absolute; /* Stay in place */
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
}
.rs-modal-content {
  position: fixed;
  z-index: 4; /* Sit on top */
  width: 350px;
  height: 220px;
  top: calc(50% - 110px);
  left: calc(50% - 175px);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
}
.rs-board-body-modal-title {
  font-size: 20px;
}
.rs-board-body-modal-main {
  font-size: 13px;
}
.rs-input-project-name {
  width: 99%;
  height: 45px;
  border-radius: 8px;
  border: 2px solid #A5B0C0;
  outline: none;
  padding-left: 10px;
}
.rs-btn-submit {
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 20px;
  background-color: #d7354d;
  color: white;
  box-shadow: 0 2px 4px 0 #c6d5e9;
}

.rs-btn-cancle {
  width: 120px;
  height: 45px;
  border: none;
  border-radius: 20px;
  background-color: #1c1f28;
  color: white;
  box-shadow: 0 2px 4px 0 #c6d5e9;
}

.rs-board-body-modal-close{
  position: fixed;
  top: calc(50% - 110px);
  left: calc(50% + 175px);
  margin-left: 5px;
  width: 44px;
  height: 44px;
}
</style>

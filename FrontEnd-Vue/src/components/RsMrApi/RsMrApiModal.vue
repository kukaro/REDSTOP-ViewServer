<template>
  <div class="rs-mr-api-modal">
    <div :class="[{'rs-modal':isModal}]" :style="{display:isModal?'block':'none'}">
      <div class="rs-modal-content">
        <rs-mr-api-modal-title></rs-mr-api-modal-title>
        <rs-mr-api-modal-contents></rs-mr-api-modal-contents>
      </div>
      <img class="modal-close" src="../../assets/img/create-proejct-close.png" @click="mouseClick">
    </div>
  </div>
</template>

<script>
import RsMrApiModalTitle from './RsMrApiModal/RsMrApiModalTitle'
import RsMrApiModalContents from './RsMrApiModal/RsMrApiModalContents'

export default {
  props: ['initIsModal'],
  name: 'rs-mr-api-modal',
  watch: {
    initIsModal: function () {
      this.isModal = this.initIsModal
    }
  },
  components: { RsMrApiModalTitle, RsMrApiModalContents },
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
.rs-mr-api-modal{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: left;
}
.rs-modal {
  position: absolute; /* Stay in place */
  /*text-align: left;*/
  z-index: 3; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  /*background-color: rgb(0,0,0); !* Fallback color *!*/
  /*background-color: rgba(0,0,0,0.5); !* Black w/ opacity *!*/
}
.rs-modal-content {
  position: fixed;
  z-index: 4; /* Sit on top */
  width: 700px;
  height: 550px;
  top: calc(50% - 250px);
  left: calc(50% - 350px);
  background-color: #f2f7fb;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.54);
  margin-bottom: 0;
  /*padding-left: 20px;*/
  /*padding-right: 20px;*/
  /*padding-top: 12px;*/
}
.modal-close{
  position: fixed;
  top: calc(50% - 250px);
  left: calc(50% + 350px);
  margin-left: 5px;
  width: 30px;
  height: 30px;
}
</style>

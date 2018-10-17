<template>
  <div class="rs-mr-api-modal-contents">
    <rs-mr-api-modal-contents-map></rs-mr-api-modal-contents-map>
    <rs-mr-api-modal-contents-detail></rs-mr-api-modal-contents-detail>
    <rs-mr-api-modal-contents-graph></rs-mr-api-modal-contents-graph>
  </div>
</template>

<script>
import RsMrApiModalContentsMap from './RsMrApiModalContents/RsMrApiModalContentsMap'
import RsMrApiModalContentsDetail from './RsMrApiModalContents/RsMrApiModalContentsDetail'
import RsMrApiModalContentsGraph from './RsMrApiModalContents/RsMrApiModalContentsGraph'

export default {
  name: 'rs-mr-api-modal-contents',
  watch: {
  },
  components: { RsMrApiModalContentsMap, RsMrApiModalContentsDetail, RsMrApiModalContentsGraph },
  created: function () {
    // alert(this.initIsModal)
  },
  data: function () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-modal-contents{
  width: 100%;
  height: 85%;
  line-height: 1.00;
}
.rs-modal {
  position: absolute; /* Stay in place */
  text-align: left;
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
  width: 350px;
  height: 500px;
  top: calc(50% - 220px);
  left: calc(50% - 175px);
  background-color: #f2f7fb;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
}
.rs-board-body-modal-title {
  font-size: 20px;
}
.rs-board-body-modal-url {
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
.modal-close{
  position: fixed;
  top: calc(50% - 220px);
  left: calc(50% + 175px);
  margin-left: 5px;
  width: 30px;
  height: 30px;
}
.rs-board-body-modal-method{
  font-size: 13px;
  color: #84c7c1;
}
</style>

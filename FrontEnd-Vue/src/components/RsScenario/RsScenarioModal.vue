<template>
  <div class="rs-import-modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="rs-modal-header">
              <slot name="header">
                <span id="titleText" class="label label-default">Import API Specification from</span>
                <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAYFBMVEUAAABUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwBUfwB0lzB/n0BfhxBpjyC0x4////+qv4CJp1D09++ft3C/z5/K16/U379UfwDf58/q79+Ur2D2RCk9AAAAHXRSTlMAEEAwn9//z3Agv4/vYID/////////////////UMeji1kAAAD8SURBVHgBlZMFAoQwDATRxbXB7f+vPKnlXAZn6k2cf3A9z/PfOC8IIYni5FmmABM8FMhwT17c9hnhiZL1CwvEL1tmPD0qSKq6gaStW/kMXanVmAVRDUlH1OvuuTINo6k90Sxf8qsOtF6g4ff1osP3OnMcV7d4pzdIUtu1oA4V0DZoKmxmlEYvtDUjjS3tmKmqB+pYy8pD1VPf7jPE0I40HHcaBwnue6fGzgyS5tXIU96PV7rkDWHNLV0DK4FkoKmFpN5oUnvi8KoeA2/JXsmXQuokx0siR1G8tLkN6eB9sLwJp/yymcyaP/TrP+RPmbMMixcJVgTR1aUZ93oGXsgXQAaG6EwAAAAASUVORK5CYII=" alt="Swagger UI">
                <span class="logo">swagger</span>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <p style="font-size: 13px">Swagger UI의 Base URL을 입력해주세요.</p>
                <form class="form-inline">
                  <div class="form-group has-success">
                    <input type="text" class="form-control" v-model="swaggerURL" id="swaggerURL">
                  </div>
                  <button id="submit" @click="submitted"><span class="minitext">ENTER</span></button>
                </form>
              </slot>
            </div>

            <div class="rs-modal-footer">
              <slot name="footer">
                <span id="successMsg" v-if="isSubmittted"><span class="logo">swagger</span>{{msg}}</span> <br>
                <button id="back" class="modal-default-button" @click="$emit('close')"><span class="minitext">EXIT</span></button>
              </slot>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'rs-import-modal',
  data () {
    return {
      isSubmittted: false,
      msg: '',
      swaggerURL: ''
    }
  },
  methods: {
    submitted () {
      this.$http.put('http://52.79.221.114:3000/api/v1/import', {swaggerURL: this.swaggerURL})
        .then(response => {
          // console.log(response.data.success)
          this.isSubmittted = true
          if (response.data.success === true) {
            this.msg = '로부터 API 정보를 성공적으로 가져왔습니다!'
            // console.log(response.data)
          } else {
            this.msg = '로부터 API 정보를 가져오는데 실패했습니다. 다시 시도해주세요'
          }
        })
    }
  }
}
</script>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 500px;
    height: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .rs-modal-header {
    text-align: center;
  }

  .rs-modal-header h3 {
    color: #39496d;
    display: flex;
    padding-left: 50px;
    text-align: center;
  }
  .rs-modal-footer {
    padding-left: 1rem;
  }
  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  #header01{
    display: flex;
    justify-content: center;
  }
  #titleText{
    width: 185px;
    height: 31px;
    font-family: TitilliumWeb;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
  }
  .logo{
    font-size: 1.5em;
    font-weight: 700;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    /*max-width: 300px;*/
    text-decoration: none;
    font-family: sans-serif;
    color: #73932c;
  }
  #back{
    width: 100px;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 #c6d5e9;
    background-color: #1c1f28;
  }
  .minitext{
    width: 28px;
    height: 21px;
    font-family: TitilliumWeb;
    font-size: 14px;
    color: #ffffff;
  }
  #swaggerURL{
    width: 305px;
    height: 38px;
  }
  #submit{
    width: 100px;
    height: 40px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 #c6d5e9;
    background-color: #39496d;
  }
  #successMsg{
    text-align: center;
    margin: auto;
    width: 318px;
    height: 19px;
    font-family: NotoSansCJKkr;
    font-size: 13px;
    color: #2482cf;
  }
</style>

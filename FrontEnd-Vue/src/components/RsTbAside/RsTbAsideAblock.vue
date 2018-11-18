<template>
  <div class="rs-tb-aside-ablock">
    <!--<rs-tb-aside-ablock-api :init-title-name="titleName"></rs-tb-aside-ablock-api>-->
    <div class="input-group">
      <div class="input-group-prepend">
        <button class="btn btn-outline-secondary dropdown-toggle rs-api-sel" type="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">{{currentBlock.method}}
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#" @click="aClick('GET')">GET</a>
          <a class="dropdown-item" href="#" @click="aClick('POST')">POST</a>
          <a class="dropdown-item" href="#" @click="aClick('PUT')">PUT</a>
          <a class="dropdown-item" href="#" @click="aClick('DELETE')">DELETE</a>
        </div>
      </div>
      <input type="text" class="form-control rs-api-input" aria-label="Text input with dropdown button"
             :value="currentBlock.url">&nbsp;&nbsp;
      <div width="20%" style="float: right;">
        <img id="play-icon" src="../../assets/img/play.png" width="35" height="35" @click="clickPlay">
      </div>
    </div>
    <br>

    <rs-tb-aside-ablock-assertion></rs-tb-aside-ablock-assertion>

    <!--<rs-tb-aside-ablock-request></rs-tb-aside-ablock-request>-->
    <rs-tb-aside-ablock-request-title></rs-tb-aside-ablock-request-title>
    <rs-tb-aside-ablock-request-tab></rs-tb-aside-ablock-request-tab>
    <!--<rs-tb-aside-ablock-request-body-tab-table></rs-tb-aside-ablock-request-body-tab-table>-->
    <table>
      <rs-tb-aside-ablock-request-body-tab-table-header
        :initTableHeaderList="Object.keys(tableValue[0])"></rs-tb-aside-ablock-request-body-tab-table-header>
      <!--<rs-tb-aside-ablock-request-body-tab-table-body :initTableValue="tableValue"></rs-tb-aside-ablock-request-body-tab-table-body>-->
      <!--<rs-tb-aside-ablock-request-body-tab-table-row v-for="item in tableValue" :initTableRowData="item" :key="item.id"></rs-tb-aside-ablock-request-body-tab-table-row>-->
      <!--<div id="temp" v-for="(value,key) in tableValue" :initTableRowData="item" :key="item.id">-->
      <tr v-for="(outer,outKey) in tableValue" :key="outKey">
        <td v-for="(value,key) in Object.keys(outer)" :key="key" :class="{'color-row':key%2==0}">
          <input type="text" size="100" v-model="tableValue[outKey][value]"
                 style="width:100%;border: 0;background-color: transparent">
        </td>
      </tr>
      <!--</div>-->

    </table>
    <br><br>
    <!--<rs-tb-aside-ablock-response></rs-tb-aside-ablock-response>-->
    <rs-tb-aside-ablock-response-title :initResponseData="responseData"></rs-tb-aside-ablock-response-title>
    <rs-tb-aside-ablock-response-tab></rs-tb-aside-ablock-response-tab>
    <!--<rs-tb-aside-ablock-response-body></rs-tb-aside-ablock-response-body>-->
    <br>
    <rs-tb-aside-ablock-response-body-item v-for="(value, key) in responseBodyData" :key="key" :initKey="key"
                                           :initValue="value"></rs-tb-aside-ablock-response-body-item>

  </div>
</template>
<script>
/* eslint-disable */
  import RsTbAsideAblockApi from './RsTbAsideAblock/RsTbAsideAblockApi'
  import RsTbAsideAblockAssertion from './RsTbAsideAblock/RsTbAsideAblockAssertion'
  import RsTbAsideAblockRequest from './RsTbAsideAblock/RsTbAsideAblockRequest'
  import RsTbAsideAblockResponse from './RsTbAsideAblock/RsTbAsideAblockResponse'
  import RsTbAsideAblockRequestTitle from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestTitle'
  import RsTbAsideAblockRequestTab from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestTab'
  import RsTbAsideAblockRequestBodyTabTable
    from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestBodyTabTable'
  import RsTbAsideAblockResponseTitle from './RsTbAsideAblock/RsTbAsideAblockResponse/RsTbAsideAblockResponseTitle'
  import RsTbAsideAblockResponseTab from './RsTbAsideAblock/RsTbAsideAblockResponse/RsTbAsideAblockResponseTab'
  import RsTbAsideAblockResponseBody from './RsTbAsideAblock/RsTbAsideAblockResponse/RsTbAsideAblockResponseBody'
  import RsTbAsideAblockResponseBodyItem
    from './RsTbAsideAblock/RsTbAsideAblockResponse/RsTbAsideAblockResponseBodyItem'
  import RsTbAsideAblockRequestBodyTabTableHeader
    from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableHeader'
  import RsTbAsideAblockRequestBodyTabTableBody
    from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableBody'
  import casing from 'eslint-plugin-vue/lib/utils/casing'
  import RsTbAsideAblockRequestBodyTabTableRow
    from './RsTbAsideAblock/RsTbAsideAblockRequest/RsTbAsideAblockRequestBodyTabTable/RsTbAsideAblockRequestBodyTabTableRow'

  export default {
    props: ['initTitleName', 'initApiTestResult', 'initCurrentBlock'],
    name: 'rs-tb-aside-ablock',
    created: function () {
      console.log('여기여기여기')
      this.currentBlock = this.initCurrentBlock
      console.log(this.initCurrentBlock)
      // console.log(this.globalTableValue)
      // this.tableValue = this.globalTableValue
      //
      for (let i = 0; i < this.tableValue.length; i++) {
        this.tableInput[i] = []
        let j = 0
        for (let atom in this.tableValue[i]) {
          this.tableInput[i][j] = this.tableValue[i][atom];
          j++;
        }
      }
    },
    watch: {
      apiTestResult: function () {
        this.apiTestResult = this.initApiTestResult
        this.responseBodyData = this.apiTestResult.data
      },
      initCurrentBlock: function () {
        this.currentBlock = this.initCurrentBlock
        console.log(this.currentBlock)
      }
    },
    components: {
      RsTbAsideAblockApi,
      RsTbAsideAblockAssertion,
      RsTbAsideAblockRequest,
      RsTbAsideAblockResponse,
      RsTbAsideAblockRequestTab,
      RsTbAsideAblockRequestBodyTabTable,
      RsTbAsideAblockRequestTitle,
      RsTbAsideAblockResponseTitle,
      RsTbAsideAblockResponseTab,
      RsTbAsideAblockResponseBody,
      RsTbAsideAblockResponseBodyItem,
      RsTbAsideAblockRequestBodyTabTableHeader,
      RsTbAsideAblockRequestBodyTabTableBody,
      RsTbAsideAblockRequestBodyTabTableRow
    },
    data: function () {
      return {
        titleName: this.initCurrentBlock.name,
        responseData: {'status': 0, 'time': 0, 'size': 0},
        curMethod: 'GET',
        responseBodyData: {},
        apiTestResult: this.initApiTestResult,
        tableValue: [
          {
            'Key': 'type',
            'Value': 'init',
            'Description': null
          },
          {
            'Key': 'side',
            'Value': 'buy',
            'Description': null
          },
          {
            'Key': 'side',
            'Value': 'buy',
            'Description': null
          }
        ],
        currentBlock: this.initCurrentBlock,
        tableInput: []
      }
    },
    methods: {
      clickPlay: function () { // 여기서 API 테스트 하기
        console.log('클릭 클릭 이벤트 탔습니다!')
        // console.log(this.$store.state.app.treeDataSerial)
        let treeDataSerial = this.$store.state.app.treeDataSerial

        for(let atom of treeDataSerial){
          let json = {
            data: {},
            url: atom.url,
            method: atom.method
          }

          json.data = this.tableValue
          console.log(json.data)

          // 받은 값 출력을 해보자

          this.$http
            .post('http://52.79.221.114:3000/api/v1/apitest', json)
            .then(response => {
              if(this.currentBlock.id === this.atom.id){
                this.responseBodyData = response.data.result.data;
                this.responseData.status = response.data.result.status;
                this.responseData.size = response.data.result.size;
                this.responseData.time = response.data.result.time;
              }
              this.atom.bodyData = response.data.result.data;
              this.atom.status = response.data.result.status;
              this.atom.size = response.data.result.size;
              this.atom.time = response.data.result.time;
              console.log('*****')
              console.log(treeDataSerial)
            })
        }

      },
      aClick: function (method) {
        this.curMethod = method
      }
    }
  }


</script>

<style scoped>
  .rs-tb-aside-ablock-response-body-item {
    /*padding: 20px;*/
    background-color: #F3F3F3;
    width: 100%;
  }

  table {
    width: 100%;
  }

  /*td{*/
  /*border-bottom: 2px solid #8B95AC;*/
  /*text-align: center;*/
  /*width: 33%;*/
  /*}*/
  td {
    border-bottom: 1px solid #8B8B8B;
    text-align: center;
    padding: 7px;
    width: 33%;
  }

  tr {
    width: 100%;
  }

  .color-row {
    background-color: #F3F3F3;
  }

  #temp {
    width: 100%;
  }

</style>

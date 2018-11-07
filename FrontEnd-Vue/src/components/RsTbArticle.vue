<template>
  <div class="rs-tb-article" :style="articleStyle">
    <div class="blockView">
      <div class="blockWrapper">
        <div id="tutorial" :style="{'visibility':tutorialAvail}">
          <img src="../assets/img/tutorial.png"><br><br>
          <p>왼쪽 블럭을 끌어다 놓으세요!</p>
        </div>

        <div id="blocklyDiv">
        </div>

        <xml id="toolbox" style="height: 100px; position: absolute; right: 0;">
          <block type="group"></block>
          <block type="case"></block>
          <block type="api"></block>
        </xml>
      </div>
    </div>
  </div>

</template>
<script>
/* eslint-disable */
  import Queue from 'queuejs'

  var navTree = []
  export default {
    name: 'rs-tb-article',
    mounted: function () {
      this.demoWorkspace = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});

      Blockly.Blocks['api'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("API")
            .appendField(new Blockly.FieldDropdown([["POST", "POST"], ["GET", "GET"], ["DELETE", "DELETE"], ["PUT", "PUT"]]), "Method")
            .appendField(new Blockly.FieldTextInput("URL"), "URL");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(50);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      };

      //legacy code
      if (false) {
        // Blockly 데이터 불러오기
        var xmlDom = null;
        xmlDom = Blockly.Xml.textToDom("<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables><block type=\"group\" id=\"]#Iq-6SP8!%I?xbxU}Pv\" x=\"35\" y=\"32\"><field name=\"GroupName\">User Management</field><statement name=\"NAME\"><block type=\"group\" id=\"3%^sv|no+;5|Hwh}{jDn\"><field name=\"GroupName\">Sign</field><statement name=\"NAME\"><block type=\"case\" id=\"_}T$%pTE|t]jA4y`D[^`\"><field name=\"TestCase\">Sign Up</field><next><block type=\"case\" id=\"j2!AL!O74RLv.@H9v5R9\"><field name=\"TestCase\">Sign In</field><next><block type=\"case\" id=\"+)[TFnGX,9Fx{41aYxD,\"><field name=\"TestCase\">Sign Out</field><next><block type=\"case\" id=\"zl~(ClIC2;P@,N[sg:Xv\"><field name=\"TestCase\">Verify Email</field></block></next></block></next></block></next></block></statement><next><block type=\"group\" id=\"h4GjUC/yQ?|(~WR[y6pI\"><field name=\"GroupName\">Preferences</field><statement name=\"NAME\"><block type=\"case\" id=\"?B/J%Z(4253@J`X/q)}(\"><field name=\"TestCase\">Change User Info</field><statement name=\"NAME\"><block type=\"api\" id=\"T+qmKRS9=eKEyMkF;H`l\"><field name=\"Method\">Post</field><field name=\"URL\">http://localhost:4000/post</field><next><block type=\"api\" id=\"=18KCT2z#_R@{1]a-%jx\"><field name=\"Method\">Get</field><field name=\"URL\">http://localhost:4000/verifyemail</field><next><block type=\"api\" id=\"iZ6On~%r+@NK0~IU6(u^\"><field name=\"Method\">Post</field><field name=\"URL\">http://localhost:4000/signin</field></block></next></block></next></block></statement></block></statement></block></next></block></statement></block></xml>");
        if (xmlDom) {
          this.demoWorkspace.clear()
          Blockly.Xml.domToWorkspace(xmlDom, this.demoWorkspace)
        }
        this.demoWorkspace.addChangeListener(this.onFirstComment)
      } else {
        this.$http
          .get(this.$conf.apiServer + '/api/v1/project/kukaro')
          .then(response => {
            let {owner, is_init} = response.data[0]
            if (is_init) {
              this.loadBlocks(owner)
            } else {
              this.$http
                .put(this.$conf.apiServer + '/api/v1/project/kukaro/true')
                .then(response => {
                  // console.log('project도달')
                  // console.log(response)
                })
              this.loadUrls(owner)
            }
          })
      }
    },
    computed: {
      articleStyle() {
        return {
          width: screen.width * 0.8 + 'px',
          left: screen.width * 0.2 + 'px'
        }
      }
    },
    data: function () {
      return {
        blockIdCounter: 0,
        tutorialAvail: 'visible',
        demoWorkspace: null,
        blockScenario: []
      }
    },
    methods: {
      makeCaseBlock: function (caseName, xmlString) {
        navTree = [{name: caseName, type: 'c', children: navTree, id: 'c0', parent: 'g0'}]
        return '<block type="case"><field name="TestCase">' + caseName + '</field><statement name="NAME">' + xmlString + '</statement></block>'

      },
      makeGroupBlock: function (groupName, xmlString) {
        navTree = [{name: groupName, type: 'g', children: navTree, id: 'g0', parent: null}]
        return '<block type="group"><field name="GroupName">' + groupName + '</field><statement name="NAME">' + xmlString + '</statement></block>'
      },
      makeApiBlock: function (method, url) {
        // return '<block type="api" id="' + (this.blockIdCounter++) + '"><field name="Method">' + method + '</field><field name="URL">' + url + '</field></block>'
        return '<block type="api"><field name="Method">' + method + '</field><field name="URL">' + url + '</field></block>'
      },
      completeBlock: function (list) {
        let xmlString = ''
        for (let atom in list) {
          if (atom == 0) {
            atom = list[atom]
            xmlString = atom
          } else {
            xmlString = list[atom].substr(0, list[atom].length - 8) + '<next>' + xmlString + '</next></block>'
          }
        }
        xmlString = this.makeCaseBlock('Default Test Case', xmlString)
        xmlString = this.makeGroupBlock('Default Test Group', xmlString)
        xmlString = '<xml>' + xmlString + '</xml>'
        // console.log(xmlString)
        navTree = navTree[0]
        return xmlString
      },
      onFirstComment: function (event) {
        if (event.type === Blockly.Events.CHANGE || event.type === Blockly.Events.MOVE) {
          var xml = Blockly.Xml.workspaceToDom(this.demoWorkspace);
          var xml_text = Blockly.Xml.domToPrettyText(xml);
          this.makeBlockScenario(this.demoWorkspace.topBlocks_[0])
          this.$http.post(this.$conf.apiServer + '/api/v1/send-scenario/kukaro/2/default', {data: this.blockScenario}).then((response) => {
            console.log('test call back')
            console.log(response)
          })
          // console.log('여기있어 ㅠㅠ')
          // console.log(this.demoWorkspace.topBlocks_)
          // console.log(xml_text);
          $("#tutorial").hide();
        }

        if (event.type === Blockly.Events.DELETE) {
          var xml = Blockly.Xml.workspaceToDom(this.demoWorkspace);
          var xml_text = Blockly.Xml.domToPrettyText(xml);
          if (xml_text === "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables></xml>") {
            $("#tutorial").show();
          }
        }

        // 클릭 이벤트
        if (event.element === 'click') {
          var blockType = this.demoWorkspace.getBlockById(event.blockId).getFieldValue()
          var blockValue, blockParentValue

          if (blockType === 'Group') {
            blockType = 'g'
            blockValue = this.demoWorkspace.getBlockById(event.blockId).getFieldValue('GroupName')

            // 이동
            location.href = '#/test-block/' + blockType + blockValue
          } else if (blockType === 'Test Case') {
            // Test Case 부터는 감싸고 있는 그룹이 있는지 확인
            blockType = 'c'
            blockValue = this.demoWorkspace.getBlockById(event.blockId).getFieldValue('TestCase')
            blockParentValue = this.demoWorkspace.getBlockById(event.blockId).getParent().getFieldValue('GroupName')
            location.href = '#/test-block/g' + blockParentValue + '-' + blockType + blockValue
          } else if (blockType === 'API') {
            // API는 감싸고 있는 그룹과 Test Case가 있는지 확인
            blockType = 'a'
            blockValue = encodeURIComponent(this.demoWorkspace.getBlockById(event.blockId).getFieldValue('URL'))
            blockParentValue = this.demoWorkspace.getBlockById(event.blockId).getParent().getParent().getFieldValue('GroupName')
            var blockParentValueTC = this.demoWorkspace.getBlockById(event.blockId).getParent().getFieldValue('TestCase')
            location.href = '#/test-block/g' + blockParentValue + '-' + 'c' + blockParentValueTC + '-' + blockType + blockValue
          }

          // 감싸고 있는 그룹 확인
          function getCoverGroup() {

          }

          // 감싸고 있는 Test Case 확인
          function getCoverTestCase() {

          }
        }
      },
      makeBlockScenario: function (blocks) {
        // console.log('Enter Block')
        // console.log(blocks)
        this.blockScenario = []
        if (blocks.type === 'group' || blocks.type === 'case') {
          this.blockScenario.push(this.makeFolder(blocks.type, blocks.inputList[0].fieldRow[1].text_, blocks.id, null))
        } else {
          this.blockScenario.push(this.makeApi(null, blocks.id, null, blocks.inputList[0].fieldRow[1].text_, blocks.inputList[0].fieldRow[2].text_))
        }
        if (blocks.childBlocks_) {
          if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 2) {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
            this.travelSiblingBlock(null, blocks.childBlocks_[1])
          } else if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 1) {
            this.travelSiblingBlock(null, blocks.childBlocks_[0])
          } else {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
          }
        }
        // console.log(this.blockScenario)
      },
      travelChildBlock: function (parentBlockId, blocks) {
        if (!blocks) {
          return
        }
        if (blocks.type === 'group' || blocks.type === 'case') {
          this.blockScenario.push(this.makeFolder(blocks.type, blocks.inputList[0].fieldRow[1].text_, blocks.id, parentBlockId))
        } else {
          this.blockScenario.push(this.makeApi(null, blocks.id, parentBlockId, blocks.inputList[0].fieldRow[1].text_, blocks.inputList[0].fieldRow[2].text_))
        }
        // console.log(blocks.childBlocks_)
        // console.log(blocks.nextConnection.targetConnection)
        if (blocks.childBlocks_) {
          if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 2) {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
            this.travelSiblingBlock(parentBlockId, blocks.childBlocks_[1])
          } else if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 1) {
            this.travelSiblingBlock(parentBlockId, blocks.childBlocks_[0])
          } else {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
          }
        }
      },
      travelSiblingBlock: function (parentBlockId, blocks) {
        if (blocks.type === 'group' || blocks.type === 'case') {
          this.blockScenario.push(this.makeFolder(blocks.type, blocks.inputList[0].fieldRow[1].text_, blocks.id, parentBlockId))
        } else {
          this.blockScenario.push(this.makeApi(null, blocks.id, parentBlockId, blocks.inputList[0].fieldRow[1].text_, blocks.inputList[0].fieldRow[2].text_))
        }
        // console.log(blocks.childBlocks_)
        // console.log(blocks.nextConnection.targetConnection)
        if (blocks.childBlocks_) {
          if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 2) {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
            this.travelSiblingBlock(parentBlockId, blocks.childBlocks_[1])
          } else if (blocks.nextConnection.targetConnection && blocks.childBlocks_.length === 1) {
            this.travelSiblingBlock(parentBlockId, blocks.childBlocks_[0])
          } else {
            this.travelChildBlock(blocks.id, blocks.childBlocks_[0])
          }
        }
      },
      makeFolder: function (type, name, id, parentBlockId) {
        return {type, name, id, parentBlockId}
      },
      makeApi: function (name, id, parentBlockId, method, url) {
        return {type: 'api', id, parentBlockId, method, url}
      },
      loadBlocks: function (owner) {
        this.$http
          .get(this.$conf.apiServer + `/api/v1/send-scenario/${owner}/2/default`)
          .then(response => {
            console.log('load blocks routine')
            let data = response.data
            navTree = []
            console.log(data)
            let q = new Queue()
            for (let idx in data) {
              if (data[idx].parentBlockId === null) {
                navTree.push(data[idx])
                data[idx].children = []
                q.enq(data[idx])
                // data.splice(idx, 1)
              }
            }
            for (let idx in data) {
              let tmp = q.peek()
              q.deq()
              if (data[idx].parentBlockId === tmp.id) {
                data[idx].children = []
                tmp.children.push(data[idx])
                q.enq(data[idx])
                // data.splice(idx, 1)
              }
            }
            console.log(navTree)
            console.log(data)
            console.log(q)
          })
      },
      loadUrls: function (owner) {
        this.$http
          .get(this.$conf.apiServer + `/api/v1/urls/${owner}`)
          .then(response => {
            // console.log('axios호출이당')
            let blockList = response.data
            // console.log(response.data)
            let xmlList = []

            for (let atom in blockList) {
              navTree.push({
                name: blockList[atom].url,
                type: 'a',
                method: blockList[atom].method.toUpperCase(),
                id: 'a' + atom,
                parent: 'c0'
              })
              xmlList.push(this.makeApiBlock(blockList[atom].method.toUpperCase(), blockList[atom].url))
            }
            // console.log(navTree)
            var xml = Blockly.Xml.textToDom(this.completeBlock(xmlList))
            Blockly.Xml.domToWorkspace(xml, this.demoWorkspace);
            this.tutorialAvail = 'hidden'

            this.demoWorkspace.addChangeListener(this.onFirstComment)
            // console.log(navTree)
            this.makeBlockScenario(this.demoWorkspace.topBlocks_[0])
            /*test*/
            if (false) {
              console.log('test입니다.')
              /*case1*/
              if (false) {
                let test = this.demoWorkspace.getAllBlocks()
                for (let atom of test) {
                  // console.log(atom.id)
                  if (atom.parentBlock_ !== null) console.log(atom.parentBlock_.id)
                }
              }
              /*case2*/
              if (true) {
                let test = this.demoWorkspace.topBlocks_
                // console.log(test[0])
              }
            }
          })
      }
    }
  }
</script>

<style scoped>

  .rs-tb-article {
    position: absolute;
    top: 70px;
    left: 20%;
    width: 80%;
    height: 100%;
    background-color: #F3F7FB;
    z-index: 0;
  }

  .blockView {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: #F3F7FB;
  }

  #blocklyDiv {
    width: 100%;
    height: 100vh;
  }

  #toolbox {
    height: 100px;
  }

  #tutorial {
    position: absolute;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    top: 30vh;
    z-index: 99999999;
  }

  #tutorial img {
    width: 45px;
    height: 63px;
  }

  #tutorial p {
    color: #4c7392;
  }
</style>

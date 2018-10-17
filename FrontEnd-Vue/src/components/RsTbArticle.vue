<template>
  <div class="rs-tb-article" :style="articleStyle">
    <div class="blockView">
      <div class="blockWrapper">
        <div id="tutorial">
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
  export default {
    name: 'rs-tb-article',
    mounted: function () {
      var demoWorkspace = Blockly.inject('blocklyDiv',
        {toolbox: document.getElementById('toolbox')});

      Blockly.Blocks['api'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("API")
            .appendField(new Blockly.FieldDropdown([["Post", "Post"], ["Get", "Get"], ["Delete", "Delete"], ["Put", "Put"]]), "Method")
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
          demoWorkspace.clear();
          Blockly.Xml.domToWorkspace(xmlDom, demoWorkspace);
        }

        function onFirstComment(event) {
          if (event.type === Blockly.Events.CHANGE || event.type === Blockly.Events.MOVE) {
            var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
            var xml_text = Blockly.Xml.domToPrettyText(xml);
            console.log(xml_text);
            $("#tutorial").hide();
          }

          if (event.type === Blockly.Events.DELETE) {
            var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
            var xml_text = Blockly.Xml.domToPrettyText(xml);
            if (xml_text === "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables></xml>") {
              $("#tutorial").show();
            }
          }

          // 클릭 이벤트
          if (event.element === 'click') {
            var blockType = demoWorkspace.getBlockById(event.blockId).getFieldValue()
            var blockValue, blockParentValue

            if (blockType === 'Group') {
              blockType = 'g'
              blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('GroupName')

              // 이동
              location.href = '#/test-block/' + blockType + blockValue
            } else if (blockType === 'Test Case') {
              // Test Case 부터는 감싸고 있는 그룹이 있는지 확인
              blockType = 'c'
              blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('TestCase')
              blockParentValue = demoWorkspace.getBlockById(event.blockId).getParent().getFieldValue('GroupName')
              location.href = '#/test-block/g' + blockParentValue + '-' + blockType + blockValue
            } else if (blockType === 'API') {
              // API는 감싸고 있는 그룹과 Test Case가 있는지 확인
              blockType = 'a'
              blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('URL').replace('http://localhost:4000/', '')
              blockParentValue = demoWorkspace.getBlockById(event.blockId).getParent().getParent().getFieldValue('GroupName')
              var blockParentValueTC = demoWorkspace.getBlockById(event.blockId).getParent().getFieldValue('TestCase')
              location.href = '#/test-block/g' + blockParentValue + '-' + 'c' + blockParentValueTC + '-' + blockType + blockValue
            }

            // 감싸고 있는 그룹 확인
            function getCoverGroup() {

            }

            // 감싸고 있는 Test Case 확인
            function getCoverTestCase() {

            }
          }
        }

        demoWorkspace.addChangeListener(onFirstComment);
      } else {
        console.log('여기 블럭이에요')
        var xml = Blockly.Xml.textToDom('<xml><block type="api"><field name="Method">Post</field><field name="URL">http://localhost:4000/signin</field></block></xml>')
        Blockly.Xml.domToWorkspace(xml, demoWorkspace);
      }
    },
    computed: {
      articleStyle() {
        return {
          width: screen.width * 0.8 + 'px',
          left: screen.width * 0.2 + 'px'
        }
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

<template>
  <div class="rs-tb-article">
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

      // Blockly 데이터 불러오기
      var xmlDom = null;
      xmlDom = Blockly.Xml.textToDom("<xml xmlns=\"http://www.w3.org/1999/xhtml\"><variables></variables><block type=\"group\" id=\"]#Iq-6SP8!%I?xbxU}Pv\" x=\"35\" y=\"32\"><field name=\"GroupName\">User Management</field><statement name=\"NAME\"><block type=\"group\" id=\"3%^sv|no+;5|Hwh}{jDn\"><field name=\"GroupName\">Sign</field><statement name=\"NAME\"><block type=\"case\" id=\"_}T$%pTE|t]jA4y`D[^`\"><field name=\"TestCase\">Sign Up</field><next><block type=\"case\" id=\"j2!AL!O74RLv.@H9v5R9\"><field name=\"TestCase\">Sign In</field><next><block type=\"case\" id=\"+)[TFnGX,9Fx{41aYxD,\"><field name=\"TestCase\">Sign Out</field><next><block type=\"case\" id=\"zl~(ClIC2;P@,N[sg:Xv\"><field name=\"TestCase\">Verify Email</field></block></next></block></next></block></next></block></statement><next><block type=\"group\" id=\"h4GjUC/yQ?|(~WR[y6pI\"><field name=\"GroupName\">Preferences</field><statement name=\"NAME\"><block type=\"case\" id=\"?B/J%Z(4253@J`X/q)}(\"><field name=\"TestCase\">Change User Info</field><statement name=\"NAME\"><block type=\"api\" id=\"T+qmKRS9=eKEyMkF;H`l\"><field name=\"Method\">Post</field><field name=\"URL\">http://localhost:4000/post</field><next><block type=\"api\" id=\"=18KCT2z#_R@{1]a-%jx\"><field name=\"Method\">Get</field><field name=\"URL\">http://localhost:4000/verify-email</field><next><block type=\"api\" id=\"iZ6On~%r+@NK0~IU6(u^\"><field name=\"Method\">Post</field><field name=\"URL\">http://localhost:4000/sign-in</field></block></next></block></next></block></statement></block></statement></block></next></block></statement></block></xml>");
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

        if (event.element === 'click') {
          var blockType = demoWorkspace.getBlockById(event.blockId).getFieldValue();
          var blockValue;

          if (blockType === 'Group') {
            console.log('g')
            blockType = 'g';
            blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('GroupName');
          } else if (blockType === 'Test Case') {
            console.log('t')
            blockType = 't';
            blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('TestCase');
          } else if (blockType === 'API') {
            console.log('a')
            blockType = 'a';
            blockValue = demoWorkspace.getBlockById(event.blockId).getFieldValue('URL');
          }

          location.href = "#/test-block/" + blockType + blockValue;
          console.log(blockValue)
        }
      }

      demoWorkspace.addChangeListener(onFirstComment);
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

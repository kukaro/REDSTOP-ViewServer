<template>
  <div class="rs-scenario-nav-modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="rs-modal-header">
              <slot name="header">
                <span class="titleText label label-default">Export Scenario to</span>
                <img height="25" width="70" src="http://jmeter.apache.org/images/jmeter.png" alt="JMeter logo">
                <span class="titleText label label-default">Format</span>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <label for="scenario" style="font-size: 13px">Export할 시나리오를 선택하세요</label><br>
                <select class="form-control" id="scenario" v-model="selectedScenario">
                  <option v-for="item in scenarios" :key="item.id">{{item}}</option>
                </select>
                <br>
                <div style="text-align: right"><button id="submit" @click="submitted"><span class="minitext">OK</span></button></div>
                <br>
                <div class="jmeter-format" v-if="isSubmittted">
                  <!--<progress-bar type="line" ref="line" :options="options"></progress-bar>-->
                  <span id="successMsg">{{jmx}}</span><br>
                </div>
              </slot>
            </div>

            <div class="rs-modal-footer">
              <slot name="footer">
                <button id="back" class="modal-default-button" @click="$emit('close')"><span class="minitext">EXIT</span></button>
              </slot>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'rs-scenario-nav-modal',
  data () {
    return {
      isSubmittted: false,
      msg: '',
      swaggerURL: '',
      scenarios: ['a', 'b'],
      selectedScenario: 'default',
      options: {
        color: '#007AFF',
        strokeWidth: 1
      },
      jmx: '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<jmeterTestPlan version="1.2" properties="4.0" jmeter="4.0 r1823414">\n' +
        '  <hashTree>\n' +
        '    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Test Plan" enabled="true">\n' +
        '      <stringProp name="TestPlan.comments"></stringProp>\n' +
        '      <boolProp name="TestPlan.functional_mode">false</boolProp>\n' +
        '      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>\n' +
        '      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>\n' +
        '      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '        <collectionProp name="Arguments.arguments"/>\n' +
        '      </elementProp>\n' +
        '      <stringProp name="TestPlan.user_define_classpath"></stringProp>\n' +
        '    </TestPlan>\n' +
        '    <hashTree>\n' +
        '      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">\n' +
        '        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>\n' +
        '        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">\n' +
        '          <boolProp name="LoopController.continue_forever">false</boolProp>\n' +
        '          <intProp name="LoopController.loops">-1</intProp>\n' +
        '        </elementProp>\n' +
        '        <stringProp name="ThreadGroup.num_threads">1</stringProp>\n' +
        '        <stringProp name="ThreadGroup.ramp_time">1</stringProp>\n' +
        '        <boolProp name="ThreadGroup.scheduler">true</boolProp>\n' +
        '        <stringProp name="ThreadGroup.duration">10</stringProp>\n' +
        '        <stringProp name="ThreadGroup.delay"></stringProp>\n' +
        '      </ThreadGroup>\n' +
        '      <hashTree>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/story/get-story.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/story/get-story.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/story/get-story-info.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/story/get-story-info.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/login/login.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/login/login.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">POST</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/friend/get-friend.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/friend/get-friend.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/friend/get-friend-info.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/friend/get-friend-info.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/friend/get-friend-id.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/friend/get-friend-id.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/foot/insert-foot.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/foot/insert-foot.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/comment/insert-comment.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/comment/insert-comment.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/comment/get-comment.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/comment/get-comment.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://aeneb.com/footprint/comment/get-comment-refresh.php" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://aeneb.com/footprint/comment/get-comment-refresh.php</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/web/sign-up" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/web/sign-up</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/web/log-out" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/web/log-out</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/web/log-in" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/web/log-in</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/api/json-test/single-json" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/api/json-test/single-json</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/api/json-test/multi-json" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/api/json-test/multi-json</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="http://13.209.126.84:4000/" enabled="true">\n' +
        '          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n' +
        '            <collectionProp name="Arguments.arguments"/>\n' +
        '          </elementProp>\n' +
        '          <stringProp name="HTTPSampler.domain"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.port"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.protocol"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.path">http://13.209.126.84:4000/</stringProp>\n' +
        '          <stringProp name="HTTPSampler.method">GET</stringProp>\n' +
        '          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n' +
        '          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n' +
        '          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n' +
        '          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n' +
        '          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n' +
        '        </HTTPSamplerProxy>\n' +
        '        <hashTree/>\n' +
        '      </hashTree>\n' +
        '    </hashTree>\n' +
        '  </hashTree>\n' +
        '</jmeterTestPlan>\n  '
    }
  },
  created: function () {
    this.$http
      .get(this.$conf.apiServer + '/api/v2/scenario/2')
      .then(response => {
        let temp = []

        for (let i = 0; i < response.data.length; i++) {
          temp.push(response.data[i].scenario_name)
        }
        this.scenarios = temp
      })
  },
  mounted: function () {
    // this.$refs.line.animate(1.0)
  },
  methods: {
    submitted () {
      this.isSubmittted = true
      // this.$refs.line.animate(1.0)
      //
      // this.$http.get('http://52.79.221.114:3000/api/v2/file')
      //   .then(response => {
      //
      //     this.isSubmittted = true
      //     if (response.data.success === true) {
      //       this.msg = '.jmx 파일로 내보냈습니다.'
      //       // console.log(response.data)
      //     } else {
      //       this.msg = '실패했습니다. 다시 시도해주세요'
      //     }
      //   })

      // this.msg = '.jmx 파일로 내보냈습니다.'


      // this.$http.put('http://52.79.221.114:3000/api/v1/import', {swaggerURL: this.swaggerURL})
      //   .then(response => {
      //     // console.log(response.data.success)
      //     this.isSubmittted = true
      //     if (response.data.success === true) {
      //       this.msg = '로부터 API 정보를 성공적으로 가져왔습니다!'
      //       // console.log(response.data)
      //     } else {
      //       this.msg = '로부터 API 정보를 가져오는데 실패했습니다. 다시 시도해주세요'
      //     }
      //   })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

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
    width: 50%;
    height: 70%;
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
    height: 600px;
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
  .titleText{
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
    position: absolute;
    bottom: 18%;
    right: 27%;
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
    /*margin: auto;*/
    width: 318px;
    /*height: 19px;*/
    font-family: NotoSansCJKkr;
    font-size: 14px;
    color: #2482cf;
  }
  .jmeter-format{
    height: 40%;
    /*text-align: center;*/
    background-color: #f3f3f3;
    /*height: 20%;*/
    overflow: scroll;
  }
</style>

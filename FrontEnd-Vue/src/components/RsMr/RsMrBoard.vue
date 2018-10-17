<template>
  <div class="rs-mr-board" @click="click">
    <rs-mr-card-mini-total-apis :init-x-pos="1" :init-y-pos="1" :init-api-cnt="apiCnt"/>
    <rs-mr-card-mini-total-availability :init-x-pos="2" :init-y-pos="1" :init-percent="98"/>
    <rs-mr-card-mini-avg-p95 :init-x-pos="3" :init-y-pos="1" :init-avg="avgTime" :init-p95="4.4"/>
    <rs-mr-card-mini-check-point :init-x-pos="4" init-y-pos="1" :init-running="40" :init-false-cnt="1" :init-inactive="40" :init-total="43"/>
    <rs-mr-card-mini-response-time :init-x-pos="1" init-y-pos="2" :init-width="4" :init-height="2"/>
    <rs-mr-card-mini-availability-chart :init-x-pos="1" :init-y-pos="4" :init-width="4" :init-height="2"/>
    <rs-mr-card-mini-table :init-x-pos="1" :init-y-pos="6" :init-width="2" :init-height="2" :init-title="'Heavy Latency'" :init-dangerous="3" :init-table-value="heavyLatencyTableValue"/>
    <rs-mr-card-mini-table :init-x-pos="3" :init-y-pos="6" :init-width="2" :init-height="2" :init-title="'Error'" :init-dangerous="3" :init-table-value="errorTableValue"/>
    <rs-mr-card-mini-regional-analysis :init-x-pos="5" :init-y-pos="1" :init-height="5" :init-width="2"/>
    <rs-mr-card-mini-problem-issue :init-x-pos="5" :init-y-pos="6" :init-width="2" :init-height="2"/>
  </div>
</template>

<script>
/* eslint-disable */
import RsUtilText from '../RsUtil/RsUtilText'
import RsMrCardMiniTotalApis from './RsMrCard/RsMrCardMiniTotalApis'
import RsMrCardMiniTotalAvailability from './RsMrCard/RsMrCardMiniAvailability'
import RsMrCardMiniAvgP95 from './RsMrCard/RsMrCardMiniAvgP95'
import RsMrCardMiniCheckPoint from './RsMrCard/RsMrCardMiniCheckPoint'
import RsMrCardMiniResponseTime from './RsMrCard/RsMrCardMiniResponseTime'
import RsMrCardMiniAvailabilityChart from './RsMrCard/RsMrCardMiniAvailabilityChart'
import RsMrCardMiniTable from './RsMrCard/RsMrCardMiniTable'
import RsMrCardMiniRegionalAnalysis from './RsMrCard/RsMrCardMiniRegionalAnalysis'
import RsMrCardMiniProblemIssue from './RsMrCard/RsMrCardMiniProblemIssue'
export default {
  name: 'rs-mr-board',
  components: {
    RsMrCardMiniProblemIssue, RsMrCardMiniRegionalAnalysis, RsMrCardMiniTable, RsMrCardMiniAvailabilityChart,
    RsMrCardMiniResponseTime, RsMrCardMiniCheckPoint, RsMrCardMiniAvgP95, RsMrCardMiniTotalAvailability, RsMrCardMiniTotalApis, RsUtilText},
  methods: {
    click: function () {
      //TODO 지워야할 것
      document.location.href = 'http://localhost:8080/#/temp'
    }
  },
  created: function () {
    // 여기 project id 넘겨주는걸로 바꿔야 함!! 지금은 그냥 1로 넣어놨음
    this.$http
      .get('http://localhost:3000/api/v1/totalapis/1')
      .then(response => {
        this.apiCnt = response.data.count;
        console.log('count : ' + response.data.count)
      });

    this.$http
      .get('http://localhost:3000/api/v1/avgtime/1')
      .then(response => {
        this.avgTime = response.data.avgtime;
        console.log('avgtime : ' + response.data.avgtime)
      });

    var temp = [];
    var inst = this
    this.$http
      .get('http://localhost:3000/api/v1/latency/1')
      .then(response => {
        console.log(response.data)
        for(var i=0;i<response.data.length;i++) {
          var json = {};
          json['name'] = response.data[i].name;
          json['url'] = response.data[i].url;
          json['method'] = response.data[i].method;
          json['responsetime'] = response.data[i].responsetime;
          json['time'] = response.data[i].time;
          // console.log(json)
          temp.push(json);
          // console.log(response.data[i].responsetime);
        }
      })
      .then(function () {
        console.log("Latency")
        console.log(temp)
        console.log(inst)
        inst.heavyLatencyTableValue = temp;
      });

    var temp2 = [];
    this.$http
      .get('http://localhost:3000/api/v1/error/1')
      .then(response => {
        console.log(response.data);
        for(var i=0;i<response.data.length;i++) {
          var json = {};
          json['name'] = response.data[i].name;
          json['url'] = response.data[i].url;
          json['method'] = response.data[i].method;
          json['status'] = response.data[i].status;
          json['time'] = response.data[i].time;
          // console.log(json)
          temp2.push(json);
          // console.log(response.data[i].responsetime);
        }
      })
      .then(function () {
        console.log("Error")
        console.log(temp2)
        inst.errorTableValue = temp2;
      });
    // console.log(temp);
  },
  data: function () {
    return {
      apiCnt : 0,
      avgTime : 0.0,
      heavyLatencyTableValue: [
        {
          'name': 'BlogList',
          'url': 'redstop.com/blog/list',
          'method': 'HTTPS',
          'responsetime': 7385,
          'time': '2018.07.12 18:34:11'
        },
        {
          'name': 'SignUp',
          'url': 'redstop.com/blog/sign-up',
          'method': 'HTTP',
          'responsetime': 7543,
          'time': '2018.07.12 20:12:09'
        },
        {
          'name': 'Login',
          'url': 'redstop.com/blog/login',
          'method': 'HTTPS',
          'responsetime': 7847,
          'time': '2018.07.12 20:38:25'
        },
        {
          'name': 'Logout',
          'url': 'redstop.com/blog/logout',
          'method': 'HTTP',
          'responsetime': 7384,
          'time': '2018.07.12 21:01:00'
        },
        {
          'name': 'Upload',
          'url': 'redstop.com/blog/upload',
          'method': 'HTTPS',
          'responsetime': 7543,
          'time': '2018.07.12 21:21:14'
        },
        {
          'name': 'ImageUpload',
          'url': 'redstop.com/blog/image-upload',
          'method': 'HTTPS',
          'responsetime': 7843,
          'time': '2018.07.12 21:38:15'
        },
        {
          'name': 'VisitRank',
          'url': 'redstop.com/blog/visit-rank',
          'method': 'HTTPS',
          'responsetime': 7384,
          'time': '2018.07.12 21:47:58'
        }
      ],
      errorTableValue: [
        {
          'name': 'BlogList',
          'url': 'redstop.com/blog/list',
          'method': 'HTTPS',
          'status': 404,
          'time': '2018.07.12 18:34:11'
        },
        {
          'name': 'SignUp',
          'url': 'redstop.com/blog/sign-up',
          'method': 'HTTP',
          'status': 500,
          'time': '2018.07.12 20:12:09'
        },
        {
          'name': 'Login',
          'url': 'redstop.com/blog/login',
          'method': 'HTTPS',
          'status': 404,
          'time': '2018.07.12 20:38:25'
        },
        {
          'name': 'Logout',
          'url': 'redstop.com/blog/logout',
          'method': 'HTTP',
          'status': 500,
          'time': '2018.07.12 21:01:00'
        },
        {
          'name': 'Upload',
          'url': 'redstop.com/blog/upload',
          'method': 'HTTPS',
          'status': 404,
          'time': '2018.07.12 21:21:14'
        },
        {
          'name': 'ImageUpload',
          'URL': 'redstop.com/blog/image-upload',
          'method': 'HTTPS',
          'status': 500,
          'time': '2018.07.12 21:38:15'
        },
        {
          'name': 'VisitRank',
          'URL': 'redstop.com/blog/visit-rank',
          'method': 'HTTPS',
          'status': 404,
          'time': '2018.07.12 21:47:58'
        }
      ]
    }
  }
}
</script>

<style scoped>
.rs-mr-board {
  margin-top: 10px;
}
</style>

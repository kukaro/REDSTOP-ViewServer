<template>
  <div class="rs-mr-card-mini-problem-issue-body">
    <div class="inner">
      <rs-mr-card-mini-problem-issue-body-item v-for="(value,key) in problemIssueList" :key="key" :init-problem-issue="value" :init-top="key"/>
    </div>
  </div>
</template>

<script>
import RsMrCardMiniProblemIssueBodyItem from './RsMrCardMiniProblemIssueBodyItem'
export default {
  name: 'rs-mr-card-mini-problem-issue-body',
  components: {RsMrCardMiniProblemIssueBodyItem},
  data: function () {
    return {
      problemIssueList: [
        {
          date: '2018.07.18 23:09:11',
          status: '500 Server Error',
          apiTitle: 'BoardList',
          api: 'https://redstop.com/board/list'
        },
        {
          date: '2018.07.18 23:10:03',
          status: '500 Server Error',
          apiTitle: 'BlogList',
          api: 'https://redstop.com/blog/list'
        },
        {
          date: '2018.07.18 23:14:51',
          status: '500 Server Error',
          apiTitle: 'SignIn',
          api: 'https://redstop.com/user/sign-in'
        },
        {
          date: '2018.07.18 23:40:00',
          status: '500 Server Error',
          apiTitle: 'VisitRank',
          api: 'https://redstop.com/rank/visit-rank'
        }
      ]
    }
  }
}
</script>

<style scoped>
.inner{
  position: absolute;
  width: 100%;
  height: calc(100% - 70px);
  /*background-color: red;*/
}
</style>

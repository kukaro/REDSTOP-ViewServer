<template>
  <table class="rs-mr-card-mini-problem-issue-body-item" :style="{'top':25 * top + '%'}">
    <tr>
      <td style="width: 30%">
        <rs-util-text :init-value="date" :init-color="'#555555'" :init-size="13"/>
      </td>
      <td style="width: 50%">
        <rs-util-text :init-value="apiTitle" :init-color="'#555555'" :init-size="13"/>
      </td>
      <td rowspan="2">
        <rs-util-text :init-value="'DETAIL > '" :init-color="'#858585'" :init-size="12"/>
      </td>
    </tr>
    <tr>
      <td>
        <b><rs-util-text :init-value="status" :init-color="'#ff0000'" :init-size="16"/></b>
      </td>
      <td>
        <rs-util-text :init-value="api" :init-color="'#000000'" :init-size="13"/>
      </td>
    </tr>
  </table>
</template>

<script>
import RsUtilText from '../../../RsUtil/RsUtilText'
export default {
  components: {RsUtilText},
  props: ['initProblemIssue', 'initTop'],
  name: 'rs-mr-card-mini-problem-issue-body-item',
  created: function () {
  },
  data: function () {
    return {
      date: this.initProblemIssue.date ? this.initProblemIssue.date : '-',
      status: this.initProblemIssue.status ? this.initProblemIssue.status : '-',
      apiTitle: this.initProblemIssue.apiTitle ? this.initProblemIssue.apiTitle : '-',
      api: this.initProblemIssue.api ? this.initProblemIssue.api : '-',
      top: this.initTop
    }
  }
}
</script>

<style scoped>
.rs-mr-card-mini-problem-issue-body-item{
  position: absolute;
  width: 100%;
  height: 25%;
}
</style>

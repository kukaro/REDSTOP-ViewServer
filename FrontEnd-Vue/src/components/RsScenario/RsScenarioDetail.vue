<template>
  <div class="rs-scenario-detail">
    <rs-scenario-section :name="$route.params.name"></rs-scenario-section>
    <rs-scenario-aside></rs-scenario-aside>
  </div>
</template>

<script>
import RsScenarioNav from './RsScenarioNav'
import RsScenarioSection from './RsScenarioSection'
import RsScenarioAside from './RsScenarioAside'

export default {
  name: 'rs-scenario-detail',
  // components: { RsHeaderProject, RsScenarioNav, RsScenarioSection, RsScenarioAside }
  components: { RsScenarioNav, RsScenarioSection, RsScenarioAside },
  props: ['name'],
  created: function () {
    console.log(this.$route.params.name)
  }
  // watch: {
  //   '$route': function (to) {
  //     this.name123 = to.params.name
  //   }
  // },
  // data () {
  //   return {
  //     name123: this.$route.params.name
  //   }
  // }
}
</script>

<style scoped>
</style>

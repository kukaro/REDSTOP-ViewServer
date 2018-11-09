<template>
  <div class="rs-tb-nav-body">
    <div>
      <ul>
        <rs-tb-nav-body-tree :initTreeData="treeData" :initPath="'/test-block/' + treeData.type + treeData.name"></rs-tb-nav-body-tree>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import RsTbNavBodyTree from './RsTbNavBodyTree'
export default {
  props:['initTreeData'],
  name: 'rs-tb-nav-body',
  components: {RsTbNavBodyTree},
  watch: {
    initTreeData: function () {
      console.log('변화')
      console.log(this.treeData)
      console.log(this.$store.state.app.treeData)
    }
  },
  mounted: function () {
  },
  created: function () {
    var store = this.$store
    var vm = this
    console.log('야호')
    console.log(this.$store)
    // this.$http
    //   .get(this.$conf.apiServer + '/api/v1/treeinit')
    //   .then(function (response) {
    //     store.commit('app/treeData', response.data.data)
    //   })
    //   .then(function () {
    //     // TODO 여기서 값 제대로 들어간다! treeData 맞추서 넣으면 잘 돌아갈듯..
    //     console.log('야야호')
    //     vm.treeData = store.state.app.treeData
    //     console.log(vm.treeData)
    //   })
  },
  data: function () {
    return {
      // treeData: {
      //   name: 'User Management',
      //   type: 'g',
      //   children: [{
      //     name: 'Sign',
      //     type: 'g',
      //     children: [{
      //       name: 'Sign Up',
      //       type: 'c'
      //     },
      //     {
      //       name: 'Sign In',
      //       type: 'c'
      //     },
      //     {
      //       name: 'Sign Out',
      //       type: 'c'
      //     },
      //     {
      //       name: 'Verify Email',
      //       type: 'c'
      //     }]
      //   },
      //   {
      //       name: 'Preferences',
      //       type: 'g',
      //       children: [{
      //         name: 'Change User Info',
      //         type: 'c',
      //       children: [{
      //         name: 'Post',
      //         type: 'a',
      //         method: 'post'
      //       },
      //       {
      //         name: 'VerifyEmail',
      //         type: 'a',
      //         method: 'get'
      //       },
      //       {
      //         name: 'Signin',
      //         type: 'a',
      //         method: 'post'
      //       }
      //       ]
      //     }]
      //   }]
      // }
      treeData: this.initTreeData
    }
  }
}
</script>

<style>
.rs-tb-nav-body{
  padding-left: 20px;
  padding-top: 50px;
}
</style>

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
  name: 'rs-tb-nav-body',
  components: {RsTbNavBodyTree},
  data: function () {
    return {
      treeData: {
        name: 'User Management',
        type: 'g',
        children: [{
          name: 'Sign',
          type: 'g',
          children: [{
            name: 'Sign Up',
            type: 'c'
          },
          {
            name: 'Sign In',
            type: 'c'
          },
          {
            name: 'Sign Out',
            type: 'c'
          },
          {
            name: 'Verify Email',
            type: 'c'
          }]
        },
        {
            name: 'Preferences',
            type: 'g',
            children: [{
              name: 'Change User Info',
              type: 'c',
            children: [{
              name: 'Post',
              type: 'a',
              method: 'post'
            },
            {
              name: 'VerifyEmail',
              type: 'a',
              method: 'get'
            },
            {
              name: 'Signin',
              type: 'a',
              method: 'post'
            }
            ]
          }]
        }]
      }
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

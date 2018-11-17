<template>
  <div class="rs-tb-nav-body-tree">
    <li>
      <div :class="{bold: isFolder}" @click="toggle">
        <img v-if="treeData.type=='group'" src="../../assets/img/group.png"/>
        <img v-else-if="treeData.type=='case'" src="../../assets/img/case.png"/>
        <img v-else-if="treeData.type=='api'" src="../../assets/img/api.png"/>
        {{treeData.name}}
        <img v-show="isFolder && open" class="arrow" src="../../assets/img/arrow-bottom.png">
        <img v-show="isFolder && !open" class="arrow" src="../../assets/img/arrow-right.png">
      </div>
      <ul v-show="open" v-if="isFolder">
        <rs-tb-nav-body-tree class="item" v-for="atom in treeData.children" :initTreeData="atom" :key="atom.id" :initPath="path + '-' + atom.type + atom.name">
        </rs-tb-nav-body-tree>
        <li class="add" @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['initTreeData', 'initPath'],
  name: 'rs-tb-nav-body-tree',
  watch: {
    initTreeData: function () {
      this.treeData = this.initTreeData
    }
  },
  created: function () {
  },
  data: function () {
    return {
      treeData: this.initTreeData,
      open: false,
      path: this.initPath
    }
  },
  computed: {
    isFolder: function () {
      return (this.treeData.type === 'group' || this.treeData.type === 'case')
    }
  },
  methods: {
    toggle: function () {
      // document.location.href = '#/test-block/' + this.path;
      console.log('호롤롤로')
      this.$store.commit('app/currentBlockId', this.treeData.id)
      this.$router.push('/aside')
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    addChild: function () {
      this.treeData.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>

<style scoped>
  .bold {
    font-weight: bold;
  }
  ul {
    width: 100%;
    padding-left: 16px;
    line-height: 1.5em;
  }

  .arrow {
    width: 9px;
    height: 9px;
  }

</style>

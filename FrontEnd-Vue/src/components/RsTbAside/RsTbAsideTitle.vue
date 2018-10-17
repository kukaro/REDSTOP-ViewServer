<template>
    <div class="rs-tb-aside-title">
      <div width="80%" style="float: left;">
        <img v-if="titleName[0]=='g'" class='title-icon' src="../../assets/img/group.png">
        <img v-else-if="titleName[0]=='c'" class='title-icon' src="../../assets/img/case.png">
        <img v-else class='title-icon' src="../../assets/img/api.png">
        {{titleName.slice(1)}}&nbsp;
        <img id="edit-icon" src="../../assets/img/edit.png" width="15" height="15">
      </div>
      <!--<div width="20%" style="float: right;">-->
        <!--<img id="play-icon" src="../../assets/img/play.png" width="35" height="35" @click="clickPlay">-->
      <!--</div>-->
      <br><br>
    </div>
</template>

<script>
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initTitleName'],
  name: 'rs-tb-aside-title',
  watch: {
    initTitleName: function () {
      var temp = this.initTitleName.split('-')
      this.titleName = temp[temp.length - 1]
      this.curUrl = this.baseUrl + casing.getConverter('kebab-case')(this.titleName.slice(1))
      // console.log('여기는 rs-tb-aside-title')
      // this.tableValue = this.globalTableValue
      // console.log(this.tableValue)
    }
  },
  created: function () {
    var temp = this.initTitleName.split('-')
    this.titleName = temp[temp.length - 1]
    this.curUrl = this.baseUrl + casing.getConverter('kebab-case')(this.titleName.slice(1))
    // console.log(this.curUrl)
    // console.log('여기는 rs-tb-aside-title')
    this.tableValue = this.globalTableValue
    console.log(this.tableValue)
  },
  data: function () {
    return {
      titleName: this.initTitleName,
      curMethod: 'GET',
      baseUrl: 'https://www.naver.com',
      curUrl: this.baseUrl,
      tableValue: this.globalTableValue
    }
  },
  methods: {
    clickPlay: function () { // 여기서 API 테스트 하기
      console.log('클릭 클릭 이벤트 탔습니다!')
      this.$http
        .get('http://localhost:3000/api')
        .then(response => {
          console.log(response)
        })
      // var param = {
      //   url: this.curUrl,
      //   method: this.curMethod,
      //   data: this.tableValue
      // }
      // 서버에 테스트 보내기 !!
      //
      // this.$http.post('http://localhost:3000/api').then((response) => {
      //   // this.$emit('apiTestResultEvent', response.data)// 받아온 데이터로 이벤트 트리거
      //   console.log('함수탓습니다!')
      //   console.log(response)
      // })
    }
  }
}
</script>

<style scoped>
.title-icon{
  padding-right: 10px;
}
</style>

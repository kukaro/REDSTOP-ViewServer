<template>
  <div class="rs-mr-api-aside-summary">
   <p>Summary</p>
    <div class="card">
      <rs-util-text :init-value="'평균응답시간'" :init-color="'#5e5e5e'" :init-size="12"/>
      <img src="../../../assets/img/function-icon.png" width="18px" height="4px"> <br>
      <div class="inner">
        <rs-util-text :init-value="2520" :init-color="'#000000'" :init-size="30"/>
        <rs-util-text :init-value="'ms'" :init-color="'#000000'" :init-size="10"/>
      </div>
    </div>

    <div class="card">
      <rs-util-text :init-value="'최대응답시간'" :init-color="'#5e5e5e'" :init-size="12"/>
      <img src="../../../assets/img/function-icon.png" width="18px" height="4px"> <br>
      <div class="inner">
        <rs-util-text :init-value="5893" :init-color="'#000000'" :init-size="30"/>
        <rs-util-text :init-value="'ms'" :init-color="'#000000'" :init-size="10"/>
      </div>
    </div>

    <div class="card">
      <rs-util-text :init-value="'중간값'" :init-color="'#5e5e5e'" :init-size="12"/>
      <img src="../../../assets/img/function-icon.png" width="18px" height="4px"> <br>
      <div class="inner">
        <rs-util-text :init-value="3894" :init-color="'#000000'" :init-size="30"/>
        <rs-util-text :init-value="'ms'" :init-color="'#000000'" :init-size="10"/>
      </div>
    </div>

    <div class="card">
      <rs-util-text :init-value="'표준편차'" :init-color="'#5e5e5e'" :init-size="12"/>
      <img src="../../../assets/img/function-icon.png" width="18px" height="4px"> <br>
      <div class="inner">
        <rs-util-text :init-value="1232" :init-color="'#000000'" :init-size="30"/>
        <rs-util-text :init-value="'ms'" :init-color="'#000000'" :init-size="10"/>
      </div>
    </div>

    <div class="card">
      <rs-util-text :init-value="'가용성'" :init-color="'#5e5e5e'" :init-size="12"/>
      <img src="../../../assets/img/function-icon.png" width="18px" height="4px"> <br>
      <div class="inner">
        <rs-util-text :init-value="98" :init-color="'#ff0000'" :init-size="30"/>
        <rs-util-text :init-value="'%'" :init-color="'#ff0000'" :init-size="10"/>
      </div>
    </div>
  </div>
</template>

<script>
import RsUtilText from '../../RsUtil/RsUtilText'
export default {
  name: 'rs-mr-api-aside-summary',
  components: { RsUtilText },
  created: function () {
  },
  data: function () {
    // return {
    //   navHeaderList: ['Explorer', 'History'],
    //   clickNumber: 0
    // }
  },
  methods: {
    // mouseClick: function (key) {
    //   this.clickNumber = key
    //   // console.log(this.clickNumber)
    // }
  }
}
</script>

<style scoped>
.rs-mr-api-aside-summary {
  width: 100%;
  height: 15%;
  padding-left: 10px;
  padding-right: 10px;
  /*margin-bottom: 10px;*/
  margin-top: 10px;
  font-family: TitilliumWeb;
}
p{
  /*width: 405px;*/
  /*height: 23px;*/
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0;
}
.card{
  /*width: 441px;*/
  width: 18%;
  box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76);
  /*margin-right: 3px;*/
  padding: 10px 10px 10px 10px;
  height: 90px;
  border-radius: 8px;
  background-color: #f8f8f8;
  border: solid 1px #f1f1f1;
  margin-left: 4px;
  margin-right: 10px;
  float: left;
  position: relative
}
img{
  position: absolute;
  left: 80%;
  float: right;
}
.inner{
  width: 100%;
  height: 100%;
  font-family: TitilliumWeb;
  font-style: inherit;
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: normal;
  color: #000000;
}
</style>

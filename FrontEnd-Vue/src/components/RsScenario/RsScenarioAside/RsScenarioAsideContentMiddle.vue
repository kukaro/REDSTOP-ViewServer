<template>
  <div class="rs-scenario-aside-content-middle">
     <div class="title"><img src="../../../assets/img/bullet-title.png"><span class="titleText">Load Test Setting</span></div>
      <ul>
        <li v-for="item in testItems" :key="item.id" style="">
          <label for="testInput" style="font-size: 13px;">
            <img src="../../../assets/img/lnb-bullet.png">
            <span id="minititle">{{item.text}}</span>
            <input id="testInput" type="text" style=" width: 45px; height: 25px; border-radius: 5px; border: solid 1px #bababa; background-color: #ffffff;">
            <span id="unit">{{item.unit}}</span>
          </label>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-aside-content-middle',
  data () {
    return {
      testItems: [
        {
          text: 'Warm-up time',
          unit: 's'
        },
        {
          text: 'Duration',
          unit: 'm'
        },
        {
          text: 'Virtual Users',
          unit: 'VUs'
        }
      ]
    }
  }

}
</script>

<style scoped>
.rs-scenario-aside-content-middle{
  position: absolute;
  padding-left: 20px;
  top: 50%;
  height: 10%;
  width: 100%;
}
li{
  float: left;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 8px;
}
.titleText{
  padding-left: 5px;
  /*width: 405px;*/
  /*height: 23px;*/
  /*font-family: 'Titillium Web', sans-serif;*/
  font-size: 15px;
  font-weight: 900;
  color: #000000;
}
#minititle{
  font-size: 13px;
  font-weight: bold;
  line-height: 2.46;
  color: #000000;
}
#unit{
  color: #565656;
}
</style>

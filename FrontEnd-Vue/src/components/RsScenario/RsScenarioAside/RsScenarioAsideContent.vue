<template>
  <div class="rs-scenario-aside-content">
   <div id="templates">
     <div class="title"><img src="../../../assets/img/bullet-title.png"><span class="titleText">Load Templates</span></div>
     <ul>
       <li class="rect" v-for="item in templates" :key="item.id" @click="typeSelected(item)" :style="item.myStyle">
       <img :src="item.graph" style="width:150px; height:75px; padding-left: 10px; padding-top: 10px">
         <p style="text-align: center; font-size: 12px; margin-top: 5px">{{item.name}}</p>
       </li>
     </ul>
     <p></p>
   </div>

    <div class="testSetting">
      <div class="title"><img src="../../../assets/img/bullet-title.png"><span class="titleText">Load Test Setting</span></div>
      <ul>
        <li v-for="item in testItems" :key="item.id" style="width: 33%">
          <label for="testInput" style="font-size: 13px">
            <img src="../../../assets/img/lnb-bullet.png">
            <span id="minititle">{{item.text}}</span>
            <input id="testInput" type="text" style=" width: 60px; height: 25px; border-radius: 5px; border: solid 1px #bababa; background-color: #ffffff;">
            <span id="unit">{{item.unit}}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-aside-content',
  components: { },
  data () {
    return {
      templates: [
        { id: 0,
          name: 'Default',
          graph: require('@/assets/img/object-type-00.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 1,
          name: 'Disetime',
          graph: require('@/assets/img/object-type-01.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 2,
          name: 'Peak',
          graph: require('@/assets/img/object-type-02.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 3,
          name: 'Stress',
          graph: require('@/assets/img/object-type-03.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 4,
          name: 'Seale',
          graph: require('@/assets/img/object-type-04.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 5,
          name: 'Spike',
          graph: require('@/assets/img/object-type-05.png'),
          params: ['a', 'b', 'c'],
          isSelected: false,
          myStyle: this.defaultStyle
        }
      ],
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
      ],
      selectedStyle: 'border-radius: 17px; box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76); border: solid 1px #ff384f;background-color: #ffffff;',
      defaultStyle: 'border-radius: 17px;border: solid 1px #e2e2e2;background-color: #fdfdfd'
    }
  },
  methods: {
    typeSelected (item) {
      if (item.isSelected === false) { // 하나 선택하면 나머지는 전부 false 되도록
        item.isSelected = true
        item.myStyle = this.selectedStyle

        for (let i = 0; i < this.templates.length; i++) {
          if (i !== item.id) {
            this.templates[i].isSelected = false
            this.templates[i].myStyle = this.defaultStyle
          }
        }
      } else if (item.isSelected === true) {
        item.isSelected = false
        item.myStyle = this.defaultStyle
      }
    }
  }
}
</script>

<style scoped>
.rs-scenario-aside-content {
  position: relative;
  top: 10%;
  width: 100%;
  height: 90%;
  font-family: 'Titillium Web', sans-serif;
  /*background-color: #ffeb2f;*/
}
.titleText{
  padding-left: 5px;
  width: 405px;
  height: 23px;
  /*font-family: 'Titillium Web', sans-serif;*/
  font-size: 15px;
  font-weight: 900;
  color: #000000;
}
#templates{
  margin-left: 20px;
}
li{
  /*width: 30%;*/
  float: left;
}
.rect{
  width: 30%;
  height: 110px;
  border-radius: 17px;
  border: solid 1px #e2e2e2;
  background-color: #fdfdfd;
  margin-right: 5px;
  margin-top: 8px;
}
/*#title{*/
  /*margin-top: 10px;*/
  /*margin-left: 20px;*/
  /*width: 93.1px;*/
  /*height: 22px;*/
  /*font-family: 'Noto Sans KR', sans-serif;*/
  /*font-size: 15px;*/
  /*font-weight: bold;*/
  /*color: #000000;*/
/*}*/
.testSetting {
  clear: both;
  margin-left: 20px;
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

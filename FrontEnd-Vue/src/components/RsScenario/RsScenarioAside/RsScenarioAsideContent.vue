<template>
  <div class="rs-scenario-aside-content">
   <div id="templates">
     <div class="title"><img src="../../../assets/img/bullet-title.png"><span class="titleText">Load Templates</span></div>
     <ul>
       <li class="rect" v-for="item in templates" :key="item.id" @click="typeSelected(item)" :style="item.myStyle">
       <img :src="item.graph" style="">
         <p style="text-align: center; font-size: 12px; margin-top: 5px">{{item.name}}</p>
       </li>
     </ul>
   </div>
    <rs-scenario-aside-content-middle></rs-scenario-aside-content-middle>
    <div class="assertions">
      <div class="title"><img src="../../../assets/img/bullet-title.png"><span class="titleText">Assertions</span></div>
      <ul style="margin-left: 20px">
        <li v-for="item in templates[selectedID].assertions" :key="item.id">
          <img src="../../../assets/img/lnb-bullet.png">
          <span id="minititle">{{item.text}}</span>
          <input id="testInput" type="text" :value="item.value" style="font-size: 11px; text-align:center; width: 45px; height: 25px; border-radius: 5px; border: solid 1px #bababa; background-color: #ffffff;">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RsScenarioAsideContentMiddle from './RsScenarioAsideContentMiddle'
export default {
  name: 'rs-scenario-aside-content',
  components: { RsScenarioAsideContentMiddle },
  data () {
    return {
      templates: [
        {
          id: 0,
          name: 'Stress',
          graph: require('@/assets/img/object-type-03.png'),
          assertions: [
            {
              text: 'Time Taken',
              value: 'Average'
            },
            {
              text: 'Running VU',
              value: 10
            },
            {
              text: 'Assertion failures per',
              value: 'second'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 1,
          name: 'Soak',
          graph: require('@/assets/img/object-type-04.png'),
          assertions: [
            {
              text: 'Time Taken',
              value: 'Average'
            },
            {
              text: 'Time Taken',
              value: 'Median'
            },
            {
              text: 'Assertion failures per',
              value: 'second'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        { id: 2,
          name: 'Default',
          graph: require('@/assets/img/object-type-00.png'),
          assertions: [
            {
              text: 'Time Taken',
              value: 'Median'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 3,
          name: 'Baseline',
          graph: require('@/assets/img/object-type-01.png'),
          assertions: [
            {
              text: 'Time Taken',
              value: 'Max'
            },
            {
              text: 'Time Taken',
              value: 'Average'
            },
            {
              text: 'Assertion failures per',
              value: 'second'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 4,
          name: 'Peak',
          graph: require('@/assets/img/object-type-02.png'),
          assertions: [
            {
              text: 'Time Taken',
              value: 'Max'
            },
            {
              text: 'Time Taken',
              value: 'Average'
            },
            {
              text: 'Assertion failures per',
              value: 'second'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        },
        {
          id: 5,
          name: 'Spike',
          graph: require('@/assets/img/object-type-05.png'),
          assertions: [
            {
              text: 'Assertion failures per',
              value: 'second'
            },
            {
              text: 'Time Taken',
              value: 'Average'
            },
            {
              text: 'Time Taken',
              value: 'Max'
            }
          ],
          isSelected: false,
          myStyle: this.defaultStyle
        }
      ],
      selectedID: 0,
      selectedStyle: 'border-radius: 17px; box-shadow: 0 2px 4px 0 rgba(163, 182, 198, 0.76); border: solid 1px #ff384f;background-color: #ffffff;',
      defaultStyle: 'border-radius: 17px;border: solid 1px #e2e2e2;background-color: #fdfdfd'
    }
  },
  methods: {
    typeSelected (item) {
      if (item.isSelected === false) { // 하나 선택하면 나머지는 전부 false 되도록
        item.isSelected = true
        item.myStyle = this.selectedStyle
        this.selectedID = item.id

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

.rect{
  float: left;
  width: 30%;
  height: 110px;
  border-radius: 17px;
  border: solid 1px #e2e2e2;
  background-color: #fdfdfd;
  margin-right: 5px;
  margin-top: 8px;
}
.rect img{
  margin: 0 auto;
  width:100%; height:80%; padding-left: 10px; padding-top: 10px
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
.assertions {
  clear: both;
  margin-left: 20px;
  position: absolute;
  top: 60%;
  margin-top: 20px;
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

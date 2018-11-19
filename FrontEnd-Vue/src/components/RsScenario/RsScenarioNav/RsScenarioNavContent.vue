<template>
  <div class="rs-scenario-nav-content">
    <ul>
      <li v-for="item in items" :key="item.id" @click="selected(item)">
        <img src="../../../assets/img/lnb-bullet.png"/>
        {{item}}
      </li>
    </ul>
    <div class="exportButton">
      <button id="e-button">Export to JMeter</button>
    </div>
    <!--<div class="exportButton">-->
      <!--<button id="i-button" @clck="showModal = true" style="text-align: center">Import APIs from Swagger</button>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'rs-scenario-nav-content',
  data () {
    return {
      items: ['a', 'b', 'c']
    }
  },
  methods: {
    selected (item) {
      this.$store.commit('app/scenarioName', item)
      // store.commit('app/scenarioName', item)
      console.log('이건 시나리오 이름이야')
      console.log(this.$store.state.app.scenarioName)

      this.$router.push({name: 'RsScenarioDetail', params: { name: item }})

      // console.log(this.$)
    }
  },
  created: function () {
    // 시나리오 ID 2
    this.$http
      .get(this.$conf.apiServer + '/api/v2/scenario/2')
      .then(response => {
        let temp = []
        // console.log('이거야이거')
        // console.log(response)

        for (let i = 0; i < response.data.length; i++) {
          temp.push(response.data[i].scenario_name)
        }
        this.items = temp
      })
  }
}
</script>

<style scoped>
.rs-scenario-nav-content{
  position: absolute;
  font-family: 'Titillium Web', sans-serif;
  top: 8%;
  width: 100%;
  height: 100%;
}
li {
  margin-left: 28px;
  margin-bottom: 6px;
  width: 64px;
  height: 20px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #233539;
}
#e-button {
  width: 100%;
  height: 43px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 #c6d5e9;
  background-color: #39496d;
  color: white;
  font-family: TitilliumWeb;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
/*.exportButton{*/
   /*position: absolute;*/
   /*right: 10%;*/
   /*left: 10%;*/
   /*display:flex;*/
   /*align-items:center;*/
   /*justify-content:center;*/
   /*bottom: 8%;*/
 /*}*/
.exportButton{
  position: absolute;
  right: 10%;
  left: 10%;
  display:flex;
  align-items:center;
  justify-content:center;
  bottom: 20%;
}
</style>

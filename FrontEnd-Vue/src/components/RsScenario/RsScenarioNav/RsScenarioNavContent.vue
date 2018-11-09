<template>
  <div class="rs-scenario-nav-content">
    <ul>
      <li v-for="item in items" :key="item.id" @click="selected(item)">
        <img src="../../../assets/img/lnb-bullet.png"/>
        {{item}}
      </li>
    </ul>
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
      this.$router.push({name: 'RsScenarioDetail', params: { name: item }})
    }
  },
  created: function () {
    // 시나리오 ID 2
    this.$http
      .get(this.$conf.apiServer + '/api/v2/scenario/2')
      .then(response => {
        let temp = []
        console.log('이거야이거')
        console.log(response)

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
</style>

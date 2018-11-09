<template>
  <div class="rs-scenario-nav-content">
    <ul>
      <li v-for="item in items" :key="item.id" @click="selected">
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
    selected () {
      console.log('테스트 하나 선택. 여기 서버 처리 해야 함')
    }
  },
  created: function () {
    // 시나리오 ID 2
    // this.$http
    //   .get(this.$conf.apiServer + '/api/v2/scenario/2')
    //   .then(response => {
    //     console.log('이거야이거')
    //     console.log(response)
    //   })
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

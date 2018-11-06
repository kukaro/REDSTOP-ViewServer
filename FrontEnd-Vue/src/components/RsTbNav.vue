<template>
  <div class="rs-tb-nav">
    <nav :style="navStyle">
      <rs-tb-nav-header></rs-tb-nav-header>
      <rs-tb-nav-body></rs-tb-nav-body>
      <div style="text-align: center">
        <button id="i-button" @click="showModal = true" style="text-align: center">Import APIs from Swagger</button>
      </div>
      <rs-import-modal v-if="showModal" @close="showModal = false"></rs-import-modal>
    </nav>
  </div>
</template>

<script>
/* eslint-disable vue/no-dupe-keys */
import RsImportModal from './RsImport/RsImportModal'
import RsTbNavHeader from './RsTbNav/RsTbNavHeader'
import RsTbNavBody from './RsTbNav/RsTbNavBody'

export default {
  name: 'rs-tb-nav',
  components: { RsTbNavBody, RsTbNavHeader, RsImportModal },
  computed: {
    navStyle () {
      return {
        width: screen.width * 0.2 + 'px'
      }
    }
  },
  data () {
    return {
      windowWidth: window.innerWidth,
      showModal: false
    }
  },
  methods: {
    handleWindowResize (event) {
      this.windowWidth = event.currentTarget.innerWidth
      this.navStyle()
    },
    navStyle () {
      return {
        width: screen.width * 0.2 + 'px'
      }
    }
    // moveToimport: function () {
    //   this.$router.push({path: 'import', component: RsImportMain})
    //   // let inputStr = prompt('Swagger UI의 URL을 입력해주세요!')
    //   //
    //   // this.$http
    //   //   // .put(this.$conf.apiServer + '/api/v1/import', {swaggerUTL: inputStr})
    //   //   .put('http://52.79.221.114:3000/api/v1/import', {swaggerURL: inputStr})
    //   //   .then(response => {
    //   //     console.log('HEeeeeeeeee')
    //   //     console.log(response.data)
    //   //   })
    //   // alert('API spec을 연동하였습니다.')
    // }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  mounted () {
    window.addEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style scoped>
  nav {
    position: absolute;
    top: 50px;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #ffffff;
    border-right: 1px solid #F2F7FB;
  }
  #i-button {
    width: 250px;
    height: 43px;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 #c6d5e9;
    background-color: #39496d;
    color: white;
    font-family: TitilliumWeb;
    font-size: 14px;
    font-weight: bold;
  }
</style>

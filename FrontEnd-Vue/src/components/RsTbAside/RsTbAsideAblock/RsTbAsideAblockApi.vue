<template>
    <div class="rs-tb-aside-ablock-api">
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary dropdown-toggle rs-api-sel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{curMethod}}</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#" @click="aClick('GET')">GET</a>
            <a class="dropdown-item" href="#" @click="aClick('POST')">POST</a>
            <a class="dropdown-item" href="#" @click="aClick('PUT')">PUT</a>
            <a class="dropdown-item" href="#" @click="aClick('DELETE')">DELETE</a>
          </div>
        </div>
        <input type="text" class="form-control rs-api-input" aria-label="Text input with dropdown button" :value="'http://localhost:3000/'+titleName">
      </div>
      <br>
    </div>
</template>

<script>
/* eslint-disable */
import casing from 'eslint-plugin-vue/lib/utils/casing'

export default {
  props: ['initTitleName'],
  name: 'rs-tb-aside-ablock-api',
  watch: {
    initTitleName: function () {
      this.titleName = casing.getConverter('kebab-case')(this.initTitleName)
      //TODO DEBUG CASE
      if(this.titleName === 'verify-email'){
        this.curMethod = 'GET'
      }else {
        this.curMethod = 'POST'
      }
    }
  },
  created: function () {
    this.titleName = casing.getConverter('kebab-case')(this.initTitleName)
    // console.log(this.titleName)
  },
  data: function () {
    return {
      api: '',
      titleName: this.initTitleName,
      curMethod: 'POST'
    }
  },
  methods: {
    aClick: function (method) {
      this.curMethod = method
    }
  }
}
</script>

<style scoped>
.rs-api-sel{
  width: 100px;
}
</style>

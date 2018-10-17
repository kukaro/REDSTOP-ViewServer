<template>
  <div class="rs-mr-api-aside-policy">
   <p>Policy</p>
    <div class="selector" style="text-align: center">
      <select id="policy" name="policy">
        <option value="1" selected="selected">Samsung Android Rest 용 Policy</option>
        <option value="2">Web REST API Policy</option>
        <option value="3">iOS Internal Policy</option>
        <option value="4">Web Project Common Policy</option>
        <option value="5">Mobile 한국 Policy</option>
        <option value="6" id="last">+ Add New Policy</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-aside-policy',
  components: { },
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
.rs-mr-api-aside-policy {
  width: 100%;
  height: 10%;
  margin-bottom: 10px;
  padding-left: 10px;
}
select {
  /*padding-left: 100px;*/
  width: 90%;
  height: 46px;
  border-radius: 20px;
  font-size: 14px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #a6b7cd;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 100% 100%;
  padding-left: 20px;
}
p {
  width: 405px;
  height: 23px;
  font-family: TitilliumWeb;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 0;
}
.selector{
  margin-right: 20px;
}
#last{
  background-color: #f2f7fb;
}
</style>

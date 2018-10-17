<template>
  <div class="rs-mr-api-section-title">
    <div width="80%" style="float: left;">
      <span id="title">Board List</span>
    </div>
    <div width="20%" style="float: right;">
      <select id="region" name="region">
        <option value="1" selected="selected">South Korea</option>
        <option value="2">Japan</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rs-mr-api-section-title',
  components: { },
  created: function () {
  },
  data: function () {
  },
  methods: {
  }
}
</script>

<style scoped>
.rs-mr-api-section-title{
  left: 0;
  width: 100%;
  height: 5%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 10px;
}
#title{
  width: 185px;
  height: 31px;
  font-family: TitilliumWeb;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
}
select {
  padding-left: 16px;
  border-radius: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  height: 32px;
  background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 90% 50%;
  background-size: 20px;
  background-color: #ffffff;
  border: solid 1px #c7c7c7;

  font-family: TitilliumWeb;
  font-size: 14px;
}
</style>

<template>
    <div class="rs-tb-aside-cblock-button">
      <input type="button" value="Add API Test" class="btn">
    </div>
</template>

<script>

export default {
  name: 'rs-tb-aside-cblock-button',
  data: function () {
    return { }
  }
}
</script>

<style scoped>
  div.rs-tb-aside-cblock-button{
    margin: auto;
    width: 30%;
    padding: 10px;
  }
  .btn {
    width: 192px;
    height: 43px;
    border-radius: 20px;
    background-color: #39496d;
    box-shadow: 0 2px 4px 0 #c6d5e9;
    color: white;
  }
  .btn:hover {
    background-color: #ffc875;
    color: white;
  }

</style>

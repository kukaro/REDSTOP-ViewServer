<template>
  <div class="rs-calendar">
    <select id="days" name="days">
      <option value="7">7 Days</option>
      <option value="6">6 Days</option>
      <option value="5">5 Days</option>
      <option value="4">4 Days</option>
      <option value="3">3 Days</option>
      <option value="2">2 Days</option>
      <option value="1">1 Days</option>
    </select>

    <span>From</span>
    <select id="from" name="from">
      <option value="7">november 15</option>
      <option value="6">november 16</option>
      <option value="5">november 17</option>
      <option value="4">november 18</option>
      <option value="3">november 19</option>
      <option value="2">november 20</option>
      <option value="1">november 21</option>
    </select>

    <span>To</span>
    <select id="to" name="to">
      <option value="7">november 21</option>
      <option value="6">november 20</option>
      <option value="5">november 19</option>
      <option value="4">november 18</option>
      <option value="3">november 17</option>
      <option value="2">november 16</option>
      <option value="1">november 15</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'rs-calendar'
}
</script>

<style scoped>
  .rs-calendar {
    margin-top: 10px;
    width: 100%;
    height: 100px;
    padding-top: 32px;
    text-align: center;
    background-color: #ffffff;
    z-index: -1;
  }

  span {
    color: #000000;
    font-size: 14px;
    margin-left: 40px;
    margin-right: 8px;
  }

  select {
    padding-left: 16px;
    font-family: inherit;
    border: 1px solid #E1E1E1;
    border-radius: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  #days {
    width: 203px;
    height: 32px;
    background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg) no-repeat 90% 50%;
    background-size: 20px;
  }

  #from {
    width: 203px;
    height: 32px;
    background: url(../../../assets/img/calendar.png) no-repeat 90% 50%;
    background-size: 15px;
  }

  #to {
    width: 203px;
    height: 32px;
    background: url(../../../assets/img/calendar.png) no-repeat 90% 50%;
    background-size: 15px;
  }
</style>

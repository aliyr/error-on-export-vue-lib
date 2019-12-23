<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VueDateRangePicker
      label="تاریخ"
      v-model="date"
      :range="true"
      format="YY/MM/D HH:mm"
      min="1388/12/23"
      max="1432/6/23"
      :time="false"
    ></VueDateRangePicker>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueDateRangePicker from "vue-persian-range-date-picker";

export default {
  name: 'app',
  components: {
    HelloWorld,
      VueDateRangePicker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

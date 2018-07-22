<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans';
  text-align: center;
  margin-top: 60px;
}
</style>

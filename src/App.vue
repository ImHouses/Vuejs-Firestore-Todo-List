<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <main-component msg="Vue.js Todo list powered by Firebase"/>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue'

export default {
  name: 'app',
  components: {
    MainComponent
  }
}
</script>

<style>
body {
  background-color: #f9f9f9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

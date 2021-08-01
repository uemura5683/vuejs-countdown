<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="text">IE11 end of support countdown</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: black;
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
#app img {
  width: 200px;
}
#app .text {
  margin: 0 0 20px;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  // 測試是否有正確載入環境變數
  created () {
    console.log(process.env.VUE_APP_API_URL)
    console.log(process.env.VUE_APP_MODE)
  }
}
</script>

<style lang="scss">
@import './assets/scss/all';
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'index',
    data () {
      return {
        msg: 'welcome liker !',
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
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
  }
</style>

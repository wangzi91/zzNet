<template>
  <div>
    <div class="index-top">{{msg}}</div>
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
  .index-top {
    color: #409EFF;
    margin-top: 20%;
  }
</style>

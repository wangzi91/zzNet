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
    mounted () {
      this.getUserList()
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      getUserList () {
        console.log(this.$store)
        this.$store.dispatch('getUserLists').then(res => {
          console.log('111', res)
        })
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

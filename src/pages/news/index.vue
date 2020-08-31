<template>
  <div>
    <!--    <el-page-header @back="goBack" content="news">-->
    <!--    </el-page-header>-->
    <div class="index-top">this is news</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    methods: {
      goBack () {
        console.log('go back')
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .index-top {
    color: #409EFF;
    /*margin-top: 20%;*/
  }
</style>

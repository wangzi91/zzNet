<template>
  <div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goindex">首页</el-menu-item>
        <el-menu-item index="2" @click="gonews">消息中心</el-menu-item>
        <el-menu-item>退出</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headers',
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect () {
        console.log(1)
      },
      goindex () {
        this.$router.push('/index')
      },
      gonews () {
        this.$router.push('/news')
      }
    }
  }
</script>

<style scoped>

</style>

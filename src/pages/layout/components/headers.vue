<template>
  <div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="goindex">首页</el-menu-item>
        <el-menu-item index="2" @click="gonews">消息中心</el-menu-item>
        <el-menu-item @click="gologin">退出</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  import {removeToken} from '../../../utils/user'

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
      },
      gologin () {
        this.$confirm('确认退出吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          removeToken()
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>

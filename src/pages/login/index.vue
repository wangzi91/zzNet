<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-input type="text" v-model="ruleForm.userName" autocomplete="off" placeholder="userName"
                class="index-input"></el-input>
      <el-input type="password" v-model="ruleForm.passWord" autocomplete="off" placeholder="password"
                class="index-input"></el-input>
      <el-button type="primary" @click="submitForm('ruleForm')" class="index-input">login</el-button>
      <!--        <el-button @click="resetForm('ruleForm')">重置</el-button>-->
    </el-form>
  </div>
</template>

<script>
  import {setToken} from '../../utils/user'

  export default {
    name: 'login',
    data () {
      return {
        ruleForm: {
          userName: '',
          passWord: ''
        }
      }
    },
    methods: {
      submitForm () {
        console.log('点击确认了')
        let token = '111222333'
        setToken(token)
        this.$router.push({path: '/'})
      },
      resetForm () {
        this.ruleForm = {
          userName: '',
          passWord: ''
        }
      }
    }
  }
</script>

<style scoped>
  .login {
    width: 30%;
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
  }

  .index-input {
    width: 300px;
    margin-bottom: 20px;
  }
</style>

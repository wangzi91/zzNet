<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="userName" prop="pass">
        <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="passWord" prop="checkPass">
        <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
        this.$router.push('./index')
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
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<template>
  <div>
    <div id="login-title">
      欢迎登录!
    </div>
    <el-form id="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-row :gutter="100">
          <el-col :span="6">
            <el-button type="primary" @click="btnLogin()">登录</el-button>
          </el-col>
          <el-col :span="6">
            <router-link to="/register">
              <el-button type="primary">注册</el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, getCurrentInstance} from 'vue'
import {login} from '../apis/login'
import {ElMessage} from 'element-plus'

const {proxy} = getCurrentInstance()
const form = reactive({
  username: '',
  password: '',
})
const success = () => {
  ElMessage({
    message: '登录成功',
    type: 'success'
  })
}
const btnLogin = () => {
  login(form).then(res => {
    if (res.code == 200) {
      success();
      proxy.$router.push('/home')
      window.localStorage.setItem('accessToken', 'Bearer ' + res.body)
      window.localStorage.setItem('username', form.username)
    }
  });
}
const btnRegister = () => {
  console.log("注册")
  // proxy.$router.push('/register')
}
</script>
<style scoped>
#form {
  width: 400px;
  margin: 0 auto;
}

#login-title {
  text-align: center;
  font-size: 30px;
  margin: 0 auto 50px auto;
}
</style>

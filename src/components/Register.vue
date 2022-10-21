<template>
  <div>
    <div>注册</div>
    <el-form id="form" :model="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"/>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.repeatPassword"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="btnRegister()">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import {reactive, getCurrentInstance} from 'vue'
import {login, register} from '../apis/login'
import {ElMessage} from 'element-plus'

const {proxy} = getCurrentInstance()
const form = reactive({
  username: '',
  password: '',
  repeatPassword: '',
})
const success = () => {
  ElMessage({
    message: '注册成功',
    type: 'success'
  })
}
const btnRegister = () => {
  form.repeatPassword == form.password ? register(form).then(res => {
    if (res.code == 200) {
      success();
      proxy.$router.push('/login')
    }
  }) : ElMessage({
    message: '两次密码不一致',
    type: 'error'
  });
}
</script>
<style scoped>
#form {
  width: 400px;
  margin: 0 auto;
}
</style>

<template>
  <el-row :gutter="30">
    <el-col :span="20">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
      >
        <el-menu-item index="/home">
          <router-link to="/home">首页</router-link>
        </el-menu-item>
        <el-menu-item index="/student">
          <router-link to="/student">学生管理</router-link>
        </el-menu-item>
        <el-menu-item index="3">教室管理</el-menu-item>
        <el-menu-item index="4">课程管理</el-menu-item>
        <el-menu-item index="5">教师管理</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="4">
      <el-dropdown>
    <span class="el-dropdown-link">
      {{ username }}
      <el-icon class="el-icon--right">
      </el-icon>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {getCurrentInstance} from "vue";
import {ElMessage} from "element-plus";

const {proxy} = getCurrentInstance()
const activeIndex = ref('/home')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const username = window.localStorage.getItem('username')

const logout = () => {
  window.localStorage.removeItem('accessToken')
  window.localStorage.removeItem('username')
  proxy.$router.push('/login')
  success('退出登录成功!');
}

const success = (str) => {
  ElMessage({
    message: str,
    type: 'success'
  })
}

</script>
<style scoped lang="css">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>

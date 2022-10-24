<template>
  <el-row :gutter="30">
    <el-col :span="20">
      <el-menu
          :default-active="$route.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
      > <!--绑定vue-route的路由-->
        <el-menu-item index="/home" route="/home">
          首页
        </el-menu-item>
        <el-menu-item index="/student" route="/student">
          学生管理
        </el-menu-item>
        <el-menu-item index="/classRoom" route="/classRoom">
          教室管理
        </el-menu-item>
        <el-menu-item index="/teacher" route="/teacher">
          教师管理
        </el-menu-item>
        <el-menu-item index="/menuManagement" route="/menuManagement">
          菜单管理
        </el-menu-item>
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
import {getCurrentInstance} from "vue";
import {ElMessage} from "element-plus";

const {proxy} = getCurrentInstance()
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
</style>

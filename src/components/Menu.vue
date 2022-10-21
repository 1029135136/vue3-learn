<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/home">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/student">学生管理</router-link>
    </el-menu-item>
    <el-menu-item index="3">教室管理</el-menu-item>
    <el-menu-item index="4">课程管理</el-menu-item>
    <el-menu-item index="5">教师管理</el-menu-item>
  </el-menu>

</template>

<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped lang="css">
.el-menu-demo {
}
</style>

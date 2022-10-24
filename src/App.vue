<template>
  <div id="nav">
    <Menu/>
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
import {getCurrentInstance} from "vue";
import {useRoute} from "vue-router";
import Menu from "./components/Menu.vue";

const {proxy} = getCurrentInstance()

const init = () => {
  console.log(useRoute().path);
  if (useRoute().path == '/login' || useRoute().path == '/register') {
  } else {
    window.localStorage.getItem('accessToken') == null ? proxy.$router.push('/login') : '';
  }
};
init();
</script>
<style scoped>

</style>

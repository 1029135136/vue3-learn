<template>
  <div id="nav">
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
import {getCurrentInstance} from "vue";
import {useRoute} from "vue-router";

const {proxy} = getCurrentInstance()

const init = () => {


  console.log(useRoute().path);
  if (useRoute().path == '/') {
    proxy.$router.push('/login');
  }

  if (useRoute().path == '/login' || useRoute().path == '/register') {

  } else {
    window.localStorage.getItem('accessToken') == null ? proxy.$router.push('/login') : proxy.$router.push('/home');
  }
};
init();
</script>
<style scoped>

</style>

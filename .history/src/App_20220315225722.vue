<template>
  <div id="app">
    <!-- <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <h2>{{ $store.state.name }}</h2> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

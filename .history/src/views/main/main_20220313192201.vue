<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">Aside</el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavHeader from '@/components/nav-header'
import NavMenu from '@/component/mav-'

export default defineComponent({
  components: {},
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
}
</style>

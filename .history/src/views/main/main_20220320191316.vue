<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'"
        ><nav-menu :collapse="isCollapse"></nav-menu
      ></el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavHeader from '@/components/nav-header'
import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      console.log('handleFoldChange', isFold)
      isCollapse.value = isFold
    }

    return {
      isCollapse,
      handleFoldChange
    }
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
  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>

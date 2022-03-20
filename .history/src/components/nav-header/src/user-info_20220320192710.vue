<template>
  <div class="user-info">
    <el-dropdown>
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      />
      <span class="el-dropdown-link"> coderwhy </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出系统</el-dropdown-item>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style></style>

<template>
  <div class="user-info">
    <el-dropdown>
      div.a
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
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style></style>

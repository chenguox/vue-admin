<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        coderwhy
      </span>
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
export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    return {}
  }
})
</script>

<style></style>

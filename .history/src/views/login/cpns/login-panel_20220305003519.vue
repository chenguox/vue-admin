<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs>
      <el-tab-pane type="border-card">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        账号 密码
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        Route
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.login-panel {
  
}
</style>

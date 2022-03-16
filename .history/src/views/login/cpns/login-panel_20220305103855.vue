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
        手机
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox
        v-model="isKeepPassword"
        label="记住密码"
        size="large"
      ></el-checkbox>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const isKeepPassword = ref(true)
    return {
      isKeepPassword
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;

  .title {
    
  }
}
</style>

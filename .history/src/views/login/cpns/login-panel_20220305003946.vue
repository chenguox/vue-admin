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
    </el-tabs>
    <div class="account-control">
      <el-checkbox
        v-model="checked1"
        label="记住密码"
        size="large"
      ></el-checkbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent  } from 'vue';
export default defineComponent({
  setup(,) {

    return {
      isKeep
    }
  },
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
}
</style>

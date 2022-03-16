<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    return {
      rules
    }
  }
})
</script>

<style></style>

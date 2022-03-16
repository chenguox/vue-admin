<template>
  <div class="login-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <div class="get-code">
          <el-input></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped lang="less">
.login-phone {
  .get-code {
    display: flex;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>

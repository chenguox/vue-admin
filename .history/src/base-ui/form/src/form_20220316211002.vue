<template>
  <div class="gx-form">
    <el-row>
      <el-form label-width="100px">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="Approved by" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="Approved by" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="Approved by" />
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IFormItem from './types'

export default defineComponent({
  setup() {
    const arr: IFormItem[] = [
      {
        label:'用户名'
      }
    ]

    return {}
  }
})
</script>

<style scoped lang="less">
.gx-form {
  padding-top: 22px;
}
</style>

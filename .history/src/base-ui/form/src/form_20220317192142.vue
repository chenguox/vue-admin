<template>
  <div class="gx-form">
    <el-row>
      <el-form label-width="100px">
        <template v-for="(item, index) in formConfig" :key="index">
          <el-col :span="8">
            <el-form-item label="item.label">
              <el-input placeholder="Approved by" />
            </el-form-item>
          </el-col>
        </template>
      </el-form>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  setup() {
    const formConfig: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      }
    ]

    return {
      formConfig
    }
  }
})
</script>

<style scoped lang="less">
.gx-form {
  width: 100%;
  padding-top: 22px;
}
</style>

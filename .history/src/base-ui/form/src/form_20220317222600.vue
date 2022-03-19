<template>
  <div class="gx-form">
    <el-row>
      <el-form label-width="100px">
        <template v-for="(item, index) in formConfig" :key="index">
          <el-col :span="8">
            <el-form-item label="item.label">
              <template v-if="item.type === 'input'">
                <el-input placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select v-model="value" class="m-2" placeholder="Select">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
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
      },
      {
        type: 'select',
        label: '用户名',
        placeholder: '请输入用户名',
        option: [
          {
            value: 'Option1',
            label: 'Option1'
          },
          {
            value: 'Option1',
            label: 'Option1'
          }
        ]
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

<template>
  <div class="gx-form">
    <el-row>
      <el-form label-width="100px">
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select class="m-2" placeholder="Select">
                  <el-option
                    v-for="item2 in item.option"
                    :key="item2.value"
                    :label="item2.label"
                    :value="item2.value"
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
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'select',
        label: '状态',
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
      formItems
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

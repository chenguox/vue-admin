<template>
  <div class="gx-form">
    <el-row>
      <el-form label-width="100px">
        <template>

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
    const arr: IFormItem[] = [
      {
        type: 'input',
        label: '用户名'
      }
    ]

    return {
      arr
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

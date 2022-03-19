<template>
  <div class="gx-form">

      <el-form label-width="100px">
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select placeholder="Select">
                  <el-option
                    v-for="item2 in item.options"
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
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    formItems: {
      // 断言成 PropType,接收一个泛型
      type: Array as PropType<IFormItem[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.gx-form {
  width: 100%;
  padding-top: 22px;
}
</style>

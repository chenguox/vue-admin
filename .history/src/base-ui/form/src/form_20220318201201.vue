<template>
  <div class="gx-form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template v-if="item.type === 'input'">
                <el-input :placeholder="item.placeholder" />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="item2 in item.options"
                    :key="item2.value"
                    :label="item2.label"
                    :value="item2.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  start-placeholder="Start Date"
                  end-placeholder="End Date"
                  :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
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
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px 24/6,分成 4 个
        lg: 8, 

      })
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
  padding: 20px 20px 0;
  box-sizing: border-box;
}
</style>

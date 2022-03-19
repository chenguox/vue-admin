<template>
  <div class="gx-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
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
    // 标签的宽度
    labelWidth: {
      type: String,
      default: '100px'
    },
    // 表单内容
    formItems: {
      // 断言成 PropType,接收一个泛型
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    // 响应式
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // ≥1920px 24/6,分成4格
        lg: 8, // ≥1200px 24/8,分成3格
        md: 12, // ≥992px 24/12,分成2格
        sm: 24, // ≥768px 24/24,分成1格
        xs: 24 // <768px 24/24,分成1格
      })
    },
    // 输入xiang间距
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
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

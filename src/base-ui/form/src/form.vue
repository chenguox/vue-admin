<template>
  <div class="gx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                    v-model="formData[`${item.field}`]"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
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
    // 输入项的间距
    itemLayout: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    }
  },
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    // console.log(props)
    const formData = ref({ ...props.modelValue })
    watch(formData, (newValue) => {
      console.log(newValue)
      emit('update:modelValue', newValue)
    })

    const handleValueChange = (value: any, field: string) => {
      emit('update:modelValue', { ...props.modelValue, [field]: value })
    }
    return {
      formData,
      handleValueChange
    }
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

<template>
  <div class="page-search">
    <gx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btn">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </gx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import GxForm from '@/base-ui/form'

interface IFormData {
  [key: string]: any
}

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    GxForm
  },
  emit: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOraginData: IFormData = {}
    for (const item of formItems) {
      formOraginData[item.field] = ''
    }
    const formData = ref<IFormData>({ ...formOraginData })

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      console.log('handleResetClick')
      formData.value = formOraginData
      emit('resetBtnClick')
    }

    // 3.优化三: 当用户点击搜索
    const handleQueryClick = () => {
      console.log('handleQueryClick')
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.handle-btn {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

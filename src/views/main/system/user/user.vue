<template>
  <div class="user">
    <page-form
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-form>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>

    <el-dialog v-model="dialogVisible" title="新建用户" width="30%">
      <gx-form v-bind="modalConfig" v-model="formData"></gx-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageForm from '@/components/page-search'
import PageContent from '@/components/page-content'
import GxForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: {
    PageForm,
    PageContent,
    GxForm
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    const dialogVisible = ref(false)
    const formData = ref<any>({})

    for (const item of modalConfig.formItems) {
      formData.value[`${item.field}`] = ''
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      //--
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>

<template>
  <div class="user">
    <gx-form v-bind="searchFormConfig" v-model="formData" />

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import GxForm from '@/base-ui/form'

import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    GxForm,
    PageContent
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      realname: '',
      cellphone: '',
      statu: '',
      createTime: ''
    })

    return {
      formData,
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>

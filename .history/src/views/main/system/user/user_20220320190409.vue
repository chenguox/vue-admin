<template>
  <div class="user">
    <gx-form v-bind="searchFormConfig" :modelValue="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GxForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    GxForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      realname: '',
      cellphone: '',
      statu: '',
      createTime: ''
    })
    return {
      formData,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>

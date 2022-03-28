<template>
  <div class="page-search">
    <gx-form v-bind="searchFormConfig" v-model="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import GxForm from '@/base-ui/form'

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
      formData
    }
  }
})
</script>

<style scoped lang="less"></style>

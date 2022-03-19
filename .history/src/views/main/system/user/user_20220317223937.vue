<template>
  <div class="user">
    <gx-form :formItems="formItems"></gx-form>
    111
  </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue'
import GxForm from '@/base-ui/form'
import { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    GxForm
  },
  props:{
    formItems: {
      type
    }
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'select',
        label: '状态',
        placeholder: '请输入用户名',
        option: [
          {
            value: 'Option1',
            label: 'Option1'
          },
          {
            value: 'Option1',
            label: 'Option1'
          }
        ]
      }
    ]

    return {
      formItems
    }
  }
})
</script>

<style scoped></style>

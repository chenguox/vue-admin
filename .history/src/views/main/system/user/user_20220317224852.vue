<template>
  <div class="user">
    <gx-form :formItems="formItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GxForm from '@/base-ui/form'
import { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    GxForm
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
        options: [
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

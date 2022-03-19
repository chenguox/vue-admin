<template>
  <div class="user">
    <gx-form :formItems="formItems" :labelWidth="labelWidth" />
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
    

    return {
      formItems,
      labelWidth
    }
  }
})
</script>

<style scoped></style>

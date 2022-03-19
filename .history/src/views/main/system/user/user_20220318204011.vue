<template>
  <div class="user">
    <gx-form :formItems="formItems" :labelWidth="labelWidth" />
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
    const form

    return {

    }
  }
})
</script>

<style scoped></style>

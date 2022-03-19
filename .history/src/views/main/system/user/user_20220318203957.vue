<template>
  <div class="user">
    <gx-form :formItems="formItems" :labelWidth="labelWidth" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GxForm from '@/base-ui/form'
import { searchFormConfig } from './'

export default defineComponent({
  name: 'user',
  components: {
    GxForm
  },
  setup() {


    return {

    }
  }
})
</script>

<style scoped></style>

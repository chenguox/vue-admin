<template>
  <div class="user">
    <gx-form :v-bind="searchFormConfig" />
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
    console.log(searchFormConfig)
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>

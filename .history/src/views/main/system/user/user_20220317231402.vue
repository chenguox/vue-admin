<template>
  <div class="user">
    <gx-form :formItems="formItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GxForm from '@/base-ui/form'


export default defineComponent({
  name: 'user',
  components: {
    GxForm
  },
  setup() {


    return {
      formItems
    }
  }
})
</script>

<style scoped></style>

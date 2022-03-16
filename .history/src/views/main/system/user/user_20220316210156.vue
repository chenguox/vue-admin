<template>
  <div class="user">
    <gx-form></gx-form>
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
    return {}
  }
})
</script>

<style scoped></style>

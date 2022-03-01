<template>
  <div>
    Main
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

export default defineComponent({
  components: {
    ElButton
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

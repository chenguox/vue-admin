<template>
  <div>
    Main
    <el-button>默认按钮</el-button>
    <ElButton type="primary">主要按钮</ElButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/el-button.css'

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

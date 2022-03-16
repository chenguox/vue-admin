<template>
  <div class="user">
    <el-row>
      <el-col :span="8">
        <el-input v-model="input" placeholder="Please input"
      /></el-col>
      <el-col :span="8"> <el-input v-model="input" placeholder="Please input" /></el-col>
      <el-col :span="8"><div class="grid-content bg-purple" /></el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

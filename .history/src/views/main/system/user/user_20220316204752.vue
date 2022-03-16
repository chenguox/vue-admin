<template>
  <div class="user">
    <el-row>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-col :span="8">
        <el-form-item label="Approved by">
          <el-input v-model="" placeholder="Approved by" />
        </el-form-item>
        </el-col>
      </el-form>

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

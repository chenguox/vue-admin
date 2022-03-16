<template>
  <div class="user">
    <el-row>
      <el-form class="demo-form-inline">
        <el-col :span="8">
          <el-form-item label="用户名">
            <el-input placeholder="Approved by" />
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

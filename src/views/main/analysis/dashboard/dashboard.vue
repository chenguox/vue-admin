<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <gx-card title="分类商品数量(饼图)">
          <bar-echart></bar-echart>
        </gx-card>
      </el-col>
      <el-col :span="10">
        <gx-card title="不同城市商品销量">22</gx-card></el-col
      >
      <el-col :span="7">
        <gx-card title="分类商品数量(玫瑰图)">33</gx-card></el-col
      >
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <gx-card title="分类商品的销量">44444</gx-card></el-col
      >
      <el-col :span="12">
        <gx-card title="分类商品的收藏">555555</gx-card></el-col
      >
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import GxCard from '@/base-ui/card'
import { BarEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    GxCard,
    BarEchart
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>

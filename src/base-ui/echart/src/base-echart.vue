<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'
import * as echarts from 'echarts'
// import { EChartsOption } from 'echarts'

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<echarts.EChartsOption>,
      default: () => ({})
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    }
  },
  setup(props) {
    const echartDivRef = ref<HTMLElement>()

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }

    onMounted(() => {
      const echartInstance = echarts.init(echartDivRef.value!)

      // 使用刚指定的配置项和数据显示图表。
      echartInstance.setOption(option)
    })

    return {
      echartDivRef
    }
  }
})
</script>

<style scoped lang="less"></style>

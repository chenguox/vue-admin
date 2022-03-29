<template>
  <div class="page-content">
    <gx-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <!-- 1、header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 2、列表中的插槽 -->
      <template #status="scope">
        <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
      </template>
      <template #createAt="scope">
        <span> {{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span> {{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
    </gx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'

import GxTable from '@/base-ui/table'

export default defineComponent({
  components: {
    GxTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    // 1、双向绑定 pageInfo
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    watch(pageInfo, () => {
      console.log('pageInfo')
      getPageData()
    })

    // 2.发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3、获取 vuex 的数据
    const dataList = computed(() => {
      return store.getters['system/pageListData'](props.pageName)
    })
    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    return {
      dataList,
      dataCount,
      getPageData,
      pageInfo
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

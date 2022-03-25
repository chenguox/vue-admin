<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <gx-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { pathMapBreadcrumb } from '@/utils/map-menus'

import GxBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    GxBreadcrumb,
    UserInfo
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      console.log('handleFoldClick', isFold.value)
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据 [{name:'',paht:''},{}]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenu = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumb(userMenu, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
  }
}
</style>

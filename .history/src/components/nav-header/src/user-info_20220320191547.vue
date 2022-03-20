<template>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import NavHeader from '@/components/nav-header'
import NavMenu from '@/components/nav-menu'

export default defineComponent({
  components: { NavHeader, NavMenu },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      console.log('handleFoldChange', isFold)
      isCollapse.value = isFold
    }

    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style>

</style>

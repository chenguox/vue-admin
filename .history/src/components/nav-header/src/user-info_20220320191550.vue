<template>

</template>

<script lang="ts">


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

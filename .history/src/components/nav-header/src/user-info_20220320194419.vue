<template>
  <div class="user-info">
    <el-dropdown>
      <div class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span class="name">{{ name }}</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close"
            >退出系统</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-location-information" divided
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-unlock">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    return {
      name
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;

  .avatar {
    width: 30px;
    height: 30px;
  }
  .name {
    margin-left: 8px;
  }
}
</style>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><postcard /></el-icon>
      <template #title>Triple Triad Card</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Postcard } from '@element-plus/icons';

export default {
  name: 'TopNav',
  components: {
    Postcard,
  },
  setup() {
    const isCollapse = ref(true);
    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style scoped></style>

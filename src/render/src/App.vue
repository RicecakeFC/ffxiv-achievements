<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-aside> aside </el-aside>
      <el-container>
        <el-header> header </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer> footer </el-footer>
      </el-container>
    </el-container>
  </el-config-provider>
</template>
<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-container>
        <el-header> header </el-header>
        <el-row>
          <top-nav />
          <el-main>
            <router-view />
          </el-main>
        </el-row>
        <el-footer> footer </el-footer>
      </el-container>
    </el-container>
  </el-config-provider>
</template>
<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import TopNav from '@/components/TopNav';

export default defineComponent({
  components: {
    TopNav,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header
          style="border-bottom: solid #d9d9d9 1px; position:fixed; z-index: 1; background-color: #ffffff; width: 100%">
        <el-row style="height: inherit; display: flex; align-items: center">
          <el-space>
            <el-image
                style="width: 40px; height: 40px"
                :src="logo"
                fit="contain"
            ></el-image>
            <div style="font-size: var(--el-font-size-extra-large)">金平糖</div>
            <el-tag>Ver.0.0.1</el-tag>
          </el-space>
        </el-row>
      </el-header>
      <el-container style="margin-top: 60px; height: 100vh">
        <el-aside width="64px" style="position:fixed;height: 100%">
          <top-nav style="height: 100%"/>
        </el-aside>
        <el-container style="margin-left: 64px">
          <el-main style="height: 2000px; background-color: #42b983">Main</el-main>
          <el-footer height="32px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </el-config-provider>
</template>
<script>
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import TopNav from '@/components/TopNav';
import logo from '../../../assets/favicon.png'

export default defineComponent({
  components: {
    TopNav,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
      logo: logo,
    };
  },
});
</script>

<style>
body {
  margin: 0;
}
</style>

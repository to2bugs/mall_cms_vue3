<template>
  <div class="app">
    <el-config-provider :size="'small'" :z-index="3000" :locale="zhCn">
      <el-button type="danger">danger</el-button>
      <router-view />
      <el-icon><CirclePlus /></el-icon>
      <el-icon><VideoCameraFilled /></el-icon>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import { ElLoading } from 'element-plus'
import { nextTick } from 'vue'
const loadingInstance = ElLoading.service({
  body: true,
  lock: true,
  background: 'rgba(0, 0, 0, .5)',
  text: '正在加载中...'
})
setTimeout(() => {
  nextTick(() => {
    loadingInstance.close()
  })
}, 5000)
</script>

<style scoped></style>

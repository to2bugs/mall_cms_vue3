<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      :stretch="true"
      v-model="activeName"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountComponentRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="remember">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLogin"
      >立即登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from '@/views/login/cpns/login-account.vue'
import LoginPhone from '@/views/login/cpns/login-phone.vue'

// 绑定el-tab-pane的name属性，表示当前选中的是哪一个el-tab-pane组件
const activeName = ref('account')

// 记住密码
const isKeepPassword = ref(true)
// 通过ref获取到login-account.vue组件的实例
// todo: 注意获取组件实例的类型InstanceType<typeof LoginAccount>
const accountComponentRef = ref<InstanceType<typeof LoginAccount>>()

const handleLogin = () => {
  // 调用组件login-account.vue中暴露给外部使用的方法loginAction()
  accountComponentRef.value?.loginAction()
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  transform: translateY(-120px);
  .title {
    text-align: center;
  }
  .demo-tabs {
    .custom-tabs-label {
      display: flex;
      align-items: center;
      span {
        margin-left: 5px;
      }
    }
  }
  .remember {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;

    .el-link {
      font-size: 12px !important;
    }
  }
  .login-btn {
    width: 100%;
  }
}
</style>

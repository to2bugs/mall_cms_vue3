<template>
  <div class="login-phone">
    <el-form
      label-position="left"
      label-width="100px"
      :rules="rules"
      :model="phone"
    >
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="phone.phoneNumber" size="large" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input class="input" v-model="phone.code" size="large" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { IPhone } from '@/types/login'
import rules from '@/views/login/config/phone-config.ts'

const phone = reactive<IPhone>({
  phoneNumber: '',
  code: ''
})
</script>

<style lang="less" scoped>
.login-phone {
  .code {
    display: flex;
    justify-content: center;
    align-items: center;

    .input {
      margin-right: 10px;
    }
  }
}
</style>

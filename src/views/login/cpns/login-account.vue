<template>
  <div class="login-account">
    <el-form
      label-width="70"
      label-position="left"
      :rules="rules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="account.name" size="large" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" size="large" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { IAccount } from '@/types/login'
import rules from '../config/account-config.ts'
import { ElForm, type FormItemProp } from 'element-plus'

const account = reactive<IAccount>({
  name: '',
  password: ''
})

// 绑定组件el-form
const formRef = ref<InstanceType<typeof ElForm>>()

// 登陆的操作
const loginAction = () => {
  // console.log('login-account 登陆操作')
  // 调用el-form组件的验证方法validate(callback)
  formRef.value?.validate((isValid: boolean) => {
    if (isValid) {
      // 验证通过
      console.log('执行登陆逻辑')
    }
  })
}

// 子组件暴露给父组件的数据
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.login-account {
}
</style>

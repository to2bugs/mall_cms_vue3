/**
 * login-account.vue 组件的配置文件
 */
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
import type { IAccount } from '@/types/login'

const rules = reactive<FormRules<IAccount>>({
  name: [
    { required: true, message: '账号是必填选项', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/i,
      message: '账号至少需要5个字符，最多10个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必填选项', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9]{3,10}$/i,
      message: '密码至少需要3个字符，最多10个字符',
      trigger: 'blur'
    }
  ]
})

export default rules

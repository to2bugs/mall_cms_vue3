/**
 * login-phone.vue 组件的配置文件
 */
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
import type { IPhone } from '@/types/login'

const rules = reactive<FormRules<IPhone>>({
  phoneNumber: [
    { required: true, message: '手机号是必填项目', trigger: 'blur' },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '手机号是必填项目', trigger: 'blur' },
    { pattern: /^\d{5}$/, message: '验证码不正确', trigger: 'blur' }
  ]
})

export default rules

## 获取组件的类型
```ts
import LoginPhone from '@/views/login/cpns/login-phone.vue'

// 通过ref获取到login-account.vue组件的实例
// 注意获取组件实例的类型InstanceType<typeof LoginAccount>
const accountComponentRef = ref<InstanceType<typeof LoginAccount>>()

// 调用组件login-account.vue中暴露给外部使用的方法loginAction()
accountComponentRef.value?.loginAction()


// 绑定组件el-form
const formRef = ref<InstanceType<typeof ElForm>>()
// 调用el-form组件的验证方法validate(callback)
formRef.value?.validate((isValid: boolean) => {
  if (isValid) {
    // 验证通过
    console.log('执行登陆逻辑')
  }
})
```
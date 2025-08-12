<template>
  <div class="login-container">
    <div class="login-box">
      <h2>注册</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="form-item">
          <input v-model="form.username" type="text" placeholder="用户名" required />
        </div>
        <div class="form-item">
          <input v-model="form.password" type="password" placeholder="密码" required />
        </div>
        <div class="form-item">
          <input v-model="form.email" type="email" placeholder="用户邮箱" required />
        </div>
        <div class="form-extra">
          <a class="register-link" @click="goToLogin">返回登录</a>
        </div>
        <button class="g-button g-button--primary">提交</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({
  username: '',
  password: '',
  email: ''
})
function handleSubmit() {
  // 注册逻辑
  alert('注册成功！')
  router.push('/')
}
function goToLogin() {
  router.push('/')
}
</script>

<style lang="scss">
@use "@/styles/views/login";
@use "@/styles/views/register";
</style>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1>欢迎登录</h1>
      <form class="login-form" @submit.prevent="handleSubmit">
        <div class="form-item">
          <input 
            type="text" 
            v-model="form.username" 
            placeholder="请输入账号"
            required
          />
        </div>
        <div class="form-item">
          <input 
            type="password" 
            v-model="form.password" 
            placeholder="请输入密码"
            required
          />
        </div>
        <div class="form-extra">
          <label class="remember-me">
            <input type="checkbox" v-model="form.remember" />
            <span>记住我</span>
          </label>
          <a href="#" class="forgot-password">忘记密码？</a>
        </div>
        <button class="login-button">登录</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const form = reactive({
      username: '',
      password: '',
      remember: false
    });

    const handleSubmit = () => {
      console.log('登录信息：', form);
      // 这里添加登录逻辑
    };

    return {
      form,
      handleSubmit
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/views/login' as *; // 直接引用 _login.scss 文件
</style>
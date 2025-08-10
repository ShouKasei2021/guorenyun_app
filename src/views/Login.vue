<template>
  <div class="login-container">
    <h1>登录</h1>
    <LoginForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '@/components/LoginForm.vue';

export default defineComponent({
  name: 'Login',
  components: {
    LoginForm
  }
});
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
<!-- <template>
  <div class="login-form">
    <el-form :model="form" ref="formRef" label-width="100px" @submit.native.prevent="handleSubmit">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    const form = ref({
      username: '',
      password: ''
    });

    const handleSubmit = () => {
      console.log('提交的表单数据:', form.value);
      // 在这里可以添加登录逻辑，例如调用API
    };

    return {
      form,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
}
</style> -->
import { ElButton, ElInput, ElForm, ElFormItem } from 'element-plus';
import { App } from 'vue';

export default {
  install(app: App) {
    app.use(ElButton);
    app.use(ElInput);
    app.use(ElForm);
    app.use(ElFormItem);
  }
};
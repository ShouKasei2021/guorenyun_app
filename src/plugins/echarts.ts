import * as echarts from 'echarts';

const install = (app) => {
  app.config.globalProperties.$echarts = echarts;
};

export default {
  install,
};
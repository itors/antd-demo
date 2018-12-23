import pageRoutes from './router.config';
// umi 配置文件 config/config.js 二选一
export default {
    plugins: [
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'my-antd',
        dll: false,
        routes: {
          exclude: [],
        },
        hardSource: false,
      }],
    ],
    cssLoaderOptions:{
      localIdentName:'[local]'
    },
     // 修改antd主题样式
    theme: {
      // "@primary-color": "#30b767", // 全局主色
      // "@link-color": '#1890ff', // 链接色
      // "@success-color": '#52c41a', // 成功色
    },
      // 路由配置
    history: 'hash',
    routes: pageRoutes,
}
  
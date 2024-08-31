export default defineAppConfig({
  pages: [
    // 路由配置，默认第一条为首页，路径和src内文件路径一致
    'pages/index/index',
    'pages/doQuestion/index',
    'pages/result/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Mbti性格测试',
    navigationBarTextStyle: 'black'
  }
})

export default [{
  name: 'edition-index',
  path: '/edition/index',
  component: resolve => require(['./edition'], resolve),
  meta: {
    title: '前端测试项目',
  },
  hidden: false,
}];

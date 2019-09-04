// 这里添加需要的模块
const apiModules = ['api'];

const mockModuleIds = {
  api: 'api',
};

const mockHost = {};
apiModules.forEach((m) => {
  mockHost[m] = `http://api.mock.com/${mockModuleIds[m]}`;
});

export default mockHost;

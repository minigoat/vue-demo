// webpack注入
/* global _WEBPACK_API_MODULES _WEBPACK_API_DOMAIN _WEBPACK_BUILD_MODE _WEBPACK_PUBLIC_PATH */
const apiHost = _WEBPACK_API_DOMAIN || {};
const apiModules = _WEBPACK_API_MODULES;

if (_WEBPACK_BUILD_MODE === 'prod') {
  apiModules.forEach((item) => {
    apiHost[item] = `${location.protocol}//${location.host}/${_WEBPACK_PUBLIC_PATH}`;
  });
}

export { apiHost };

export default apiHost;


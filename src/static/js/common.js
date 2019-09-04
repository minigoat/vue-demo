// info 全局样式
import 'nprogress/nprogress.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'static/css/common.less';
import 'static/css/base.less';

// info
import 'static/js/fetch';
import NProgress from 'nprogress';

// 为了安全起见，有人会用数组原型方法，默认加载polyfill
// http://stackoverflow.com/questions/32401513/array-find-doesnt-work-with-babel
import boundFindShim from 'array.prototype.find';

boundFindShim.shim();
import 'array.prototype.fill';

import Vue from 'vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI, { size: 'medium' });

NProgress.configure({ showSpinner: false });


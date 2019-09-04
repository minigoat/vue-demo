// import fetch from '@/static/js/fetch';
import axios from '@/static/js/axios';
// import router from '../../router';
import { Message, MessageBox } from 'element-ui';
import NProgress from 'nprogress';

function doLogin() {
  // const query = {};
  // if (router.currentRoute.path !== '/login') {
  //   query.callBackUrl = location.href;
  // } else if (router.currentRoute.path === '/login' && router.currentRoute.query.callBackUrl) {
  //   query.callBackUrl = router.currentRoute.query.callBackUrl;
  // }
  // router.replace({
  //   path: '/login',
  //   query,
  // });
}

export default (api, options = {}) => {
  const { autoLoading = true } = options;
  // const { autoToast = true } = options;

  autoLoading && NProgress.start();

  // return fetch(api, options)
  return axios(api, options)
    .then((data) => {
      autoLoading && NProgress.done();
      return Promise.resolve(data);
    }, (response) => {
      // const { status, tips } = response;
      const { status, code, message, data } = response;
      if (status === 401) {
        doLogin();
        autoLoading && NProgress.done();
        return Promise.reject('未登录');
      } else if (status === 200) {
        const FALLBACK_TEXT = '系统繁忙，请稍后再试';
        if (code === 1 || code === 3 || code === 7) {
          Message.error(message || FALLBACK_TEXT);
        } else if (code === 2 || code === 7) {
          // Message.error(message || FALLBACK_TEXT);
        } else if (code === 8) {
          MessageBox({
            title: message,
            message: data
          }).catch(() => {});
        } else {
          Message.error(message || FALLBACK_TEXT);
        }
        // if (!tips) {
        //   Message.error(FALLBACK_TEXT);
        //   autoLoading && NProgress.done();
        //   return Promise.reject(response.errMsg || FALLBACK_TEXT);
        // }
        // if (tips.type === 'default') {
        //   // fetch出错是否自动Toast，如果是false，则由调用方自己处理返回的错误
        //   if (autoToast) {
        //     Message.error(tips.content || FALLBACK_TEXT);
        //   }
        // } else if (tips.type === 'noticePage') {
        //   // 挂牌 todo
        // } else if (tips.type === 'confirm') {
        //   // todo
        //   Message.error(tips.content || FALLBACK_TEXT);
        // } else if (tips.type === 'errorPage') {
        //   // todo
        //   Message.error(tips.content || FALLBACK_TEXT);
        // }
        autoLoading && NProgress.done();
        return Promise.reject(response);
      } else if (status >= 300) {
        Message.error(`网络异常，status:${status}`);
      }
      autoLoading && NProgress.done();
      return Promise.reject(`网络异常，status:${status}`);
    });
};

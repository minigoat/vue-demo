/*
  @example
  const res = await fetch(reqUrl, {
    method: 'GET',    // 请求方法，GET 或者 POST，默认为 GET
    body: para,   // 请求参数，格式为json，如 { id: 2, name: 'xxx' }
  });
*/
import { isEmoji } from './emoji';
import stringify from 'qs/lib/stringify';

export default (api, options = {}) => {
  if (options.body) {
    for (const k in options.body) {
      if (isEmoji(options.body[k])) {
        return Promise.reject('不支持Emoji表情符');
      }
    }
  }

  if (options.params) {
    for (const k in options.params) {
      if (isEmoji(options.params[k])) {
        return Promise.reject('不支持Emoji表情符');
      }
    }
  }

  let url = api;
  // 跨域
  options.credentials = 'include';

  // 处理hearder
  if (!options.headers) {
    options.headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
  }

  // 处理post
  if (options.method && options.method.toUpperCase() === 'POST') {
    const params = options.body;
    if (options.headers['Content-Type'] === 'application/json') {
      options.body = JSON.stringify(params);
    } else if (options.headers['Content-Type'] === 'multipart/form-data') {
      delete options.headers['Content-Type'];
    } else {
      // 解决多层嵌套数据的问题
      options.body = stringify(params, { arrayFormat: 'brackets', skipNulls: true });
    }
  }

  // 处理get，默认get
  if ((options.method && options.method.toUpperCase() === 'GET') || options.method === undefined) {
    const params = options.params || options.body || {};
    url += `?${stringify(params, { arrayFormat: 'brackets', skipNulls: true })}`;
    // 解决某些浏览器下请求报错的问题 body not allowed for get or head requests
    options.body = undefined;
  }

  return fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
          .then((json) => {
            // if (json.ret === '0') {
            if (json.code === 0) {
              return Promise.resolve(json.data);
            }
            return Promise.reject({
              status: response.status,
              ...json,
            });
          });
      }
      return Promise.reject({
        status: response.status,
      });
    });
};

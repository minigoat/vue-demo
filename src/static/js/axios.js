/*
  @example
  const res = await fetch(reqUrl, {
    method: 'GET',    // 请求方法，GET 或者 POST，默认为 GET
    body: para,   // 请求参数，格式为json，如 { id: 2, name: 'xxx' }
  });
*/
import axios from 'axios';
import { isEmoji } from './emoji';
import stringify from 'qs/lib/stringify';
import isEmptyObject from '@/utils/isEmptyObject';

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
    if (!isEmptyObject(params)) {
        url += `?${stringify(params, { arrayFormat: 'brackets', skipNulls: true })}`;
        // 解决某些浏览器下请求报错的问题 body not allowed for get or head requests
    }
    options.body = undefined;
  }

  console.log('options', options);
  return axios(url, options)
        .then((response) => {
          const { status, data } = response;
          if (status === 200) {
            return Promise.resolve(data);
          }
          return Promise.reject({
            status: response.status,
          });
        });
};

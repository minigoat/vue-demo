// verbs.js
import ajax from '@/utils/ajax';

export function select(url, body = {}) {
  return ajax(url, { method: 'GET', body }).then((res) => {
    const { code, data } = res;
    if (code === 200) {
      return data;
    }
    return Promise.reject(res);
  }).catch(error => Promise.reject(error));
}

export function create(url, body = {}) {
  return ajax(url, { method: 'POST', body }).then((res) => {
    const { code, data } = res;
    if (code === 201) {
      return data;
    }
    return Promise.reject(res);
  }).catch(error => Promise.reject(error));
}

export function patch(url, body = {}) {
  return ajax(url, { method: 'PATCH', body }).then((res) => {
    const { code, data } = res;
    if (code === 201) {
      return data;
    }
    return Promise.reject(res);
  }).catch(error => Promise.reject(error));
}

export function remove(url, body = {}) {
  return ajax(url, { method: 'DELETE', body }).then((res) => {
    const { code, data } = res;
    if (code === 204) {
      return data;
    }
    return Promise.reject(res);
  }).catch(error => Promise.reject(error));
}

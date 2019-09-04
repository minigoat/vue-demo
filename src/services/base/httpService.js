import ajax from '@/utils/ajax';
import { Notification } from 'element-ui';

export async function getServer(url, body = {}) {
  try {
    const res = await ajax(url, {
      method: 'get',
      body,
    });
    if (res.code === 0) {
      return res.data;
    }
    return Promise.reject(res);
  } catch (error) {
    Notification.error(error.data);
    return Promise.reject(error);
  }
}

export async function poatServer(url, body = {}) {
  try {
    const res = await ajax(url, {
      method: 'post',
      body,
    });
    if (res.code === 0) {
      return res.data;
    }
    return Promise.reject(res);
  } catch (error) {
    Notification.error(error.data);
    return Promise.reject(error);
  }
}

export async function postServerWithHeader(url, body = {}, headers) {
  try {
    const res = await ajax(url, {
      body,
      method: 'post',
      headers,
    });
    if (res.code === 0) {
      return res.data;
    }
    return Promise.reject(res);
  } catch (error) {
    Notification.error(error.data);
    return Promise.reject(error);
  }
}

export async function postServerJson(url, body = {}) {
  const res = await postServerWithHeader(url, body, {
    'Content-Type': 'applocation/json',
  });
  return res;
}

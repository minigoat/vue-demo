import { apiHost } from './base/apiHost';
import { select, create, patch, remove } from './base/verbs';
import { Notification } from 'element-ui';

async function test() {
  try {
    const res = await select(`${apiHost.api}/test`);
    return res;
  } catch (error) {
    throw error;
  }
}

export default test;
export { test };

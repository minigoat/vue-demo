import Mock from 'mockjs';
import mockHost from './common/config.js';
import Random from './common/random.js';

Mock.mock(`${mockHost.api}/test`, 'get', {
  code: 200,
  'data|1-10': [{
    'idcdm|+1': 1,
    name: Random.string(),
    type: Random.editionType(),
    desc: Random.ctitle(3, 10),
    publishTime: Random.datetime(),
    createdTime: Random.datetime(),
    createdBy: Random.cname(),
  }]
});

// const data = Mock.mock(`${mockHost.api}/test?`, {
//   code: 200,
//   'data|1-10': [{
//     'idcdm|+1': 1,
//   }]
// });


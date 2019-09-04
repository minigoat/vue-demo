import Mock from 'mockjs';

const Random = Mock.Random;

Random.extend({
  editionType() {
    const editionTypes = ['NORMAL', 'URGENT'];
    return this.pick(editionTypes);
  }
});

export default Random;

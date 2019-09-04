const ranges = [
  '\ud83c[\udf00-\udfff]',
  '\ud83d[\udc00-\ude4f]',
  '\ud83d[\ude80-\udeff]'
];
const reg = new RegExp(ranges.join('|'), 'g');

export const isEmoji = (str = '') => (`${str}`.match(reg) !== null);

export const filterEmoji = (str = '') => `${str}`.replace(reg, '');

export default {
  isEmoji,
  filterEmoji
};

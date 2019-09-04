export function deepClone(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (obj === null || typeof obj !== 'object') return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (const attr in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, attr)) {
        copy[attr] = deepClone(obj[attr]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
}

export function deepCloneObject(target, source) {
  if (source instanceof Object) {
    for (const attr in source) {
      if (Object.prototype.hasOwnProperty.call(source, attr)) {
        target[attr] = deepClone(source[attr]);
      }
    }
  }
}

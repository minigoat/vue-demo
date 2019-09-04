export default function isEmptyObject(obj) {
  for (let key of Object.keys(obj)) {
    return false;
  }
  return true;
}

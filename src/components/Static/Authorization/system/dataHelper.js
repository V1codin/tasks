export default function (target) {
  const elements = target.elements;
  const res = {};
  for (let item of elements) {
    if (item.name !== "") {
      res[item.name] = item.value;
    }
  }
  return res;
}

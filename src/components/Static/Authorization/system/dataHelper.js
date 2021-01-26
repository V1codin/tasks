export function getFormData(target) {
  const elements = target.elements;
  const res = {};
  for (let item of elements) {
    if (item.name !== "") {
      res[item.name] = item.value;
    }
  }
  return res;
}

export function clearData(target) {
  const elements = target.elements;

  for (let item of elements) {
    if (item.name !== "") {
      item.value = "";
    }
  }
}
